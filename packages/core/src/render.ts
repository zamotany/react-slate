import Reconciler from 'react-reconciler';
import { terminal } from 'terminal-kit';
import createReconcilerConfig from './host/reconcilerConfig';
import View from './host/nodes/View';
import Renderer, { RenderDiff } from './host/renderer/Renderer';
import { createBufferedConsole } from './bufferedConsole';
import { MouseEvent } from './types';
import { EventManager, EventTypes } from './events';

function reflowAndDiff(container: View, renderer: Renderer) {
  container.setLayoutStyle({ width: '100%', height: '100%' });
  const layout = container.layoutNode.computeLayout({
    width: terminal.width,
    height: terminal.height,
  });
  container.notifyOnLayoutHook(layout, { offsetX: 0, offsetY: 0 });
  return renderer.renderDiff(container, layout, {
    maxWidth: terminal.width,
    maxHeight: terminal.height,
  });
}

function flushDiff(diff: RenderDiff) {
  for (let i = 0; i < diff.length; i++) {
    terminal.moveTo(1, diff[i].line + 1);
    terminal(diff[i].text);
  }
}

const { bufferedConsole, flushConsole } = createBufferedConsole();

export function exit(code: number = 0) {
  terminal.grabInput(false);
  terminal.hideCursor(false);
  terminal.fullscreen(false);
  flushConsole(terminal);
  terminal.processExit(code);
}

function initialize(container: View, renderer: Renderer) {
  process.on('exit', exit);

  global.console = bufferedConsole;
  terminal.fullscreen(true);
  terminal.grabInput({ mouse: 'motion' });
  terminal.hideCursor();

  terminal.once('key', (name: string) => {
    if (name === 'CTRL_C') {
      // Trigger 'exit' event, which will do the clean up.
      process.exit(0);
    }
  });

  const eventManager = new EventManager<MouseEvent>();

  terminal.on('mouse', (name: string, data: MouseEvent) => {
    if (name === 'MOUSE_LEFT_BUTTON_PRESSED') {
      eventManager.propagateEvent(
        EventTypes.MOUSE_LEFT_BUTTON_PRESSED,
        data,
        container.eventListener
      );
    } else if (name === 'MOUSE_RIGHT_BUTTON_PRESSED') {
      eventManager.propagateEvent(
        EventTypes.MOUSE_RIGHT_BUTTON_PRESSED,
        data,
        container.eventListener
      );
    } else if (name === 'MOUSE_WHEEL_UP' || name === 'MOUSE_WHEEL_DOWN') {
      eventManager.propagateEvent(
        EventTypes.MOUSE_WHEEL,
        {
          ...data,
          direction: name === 'MOUSE_WHEEL_UP' ? 1 : -1,
        },
        container.eventListener
      );
    } else if (name === 'MOUSE_MOTION') {
      eventManager.propagateEvent(
        EventTypes.MOUSE_MOTION,
        data,
        container.eventListener
      );
    }
  });

  terminal.on('resize', () => {
    const diff = reflowAndDiff(container, renderer);
    flushDiff(diff);
  });
}

export default function render(element: JSX.Element) {
  const renderer = new Renderer();
  const container = new View();
  let initialized = false;

  const reconciler = Reconciler(
    createReconcilerConfig(container, () => {
      const diff = reflowAndDiff(container, renderer);

      if (!initialized) {
        initialized = true;
        initialize(container, renderer);
      }

      flushDiff(diff);
    })
  );
  const node = reconciler.createContainer(container, false, false);
  reconciler.updateContainer(element, node, null, () => undefined);
}
