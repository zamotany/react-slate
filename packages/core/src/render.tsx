import React from 'react';
import { terminal } from 'terminal-kit';
import renderToString from './renderToString';

const getCursorLocation = () =>
  (terminal.getCursorLocation as () => Promise<{
    x: number;
    y: number;
  }>)();

export type RenderStatic = (staticElement: JSX.Element) => void;

const RenderStaticContext = React.createContext<{ renderStatic: RenderStatic }>(
  {
    renderStatic: () => {
      /* NOOP */
    },
  }
);

type ComponentProps = { renderStatic: RenderStatic };

export function withRenderStatic<P extends ComponentProps>(
  Component: React.ComponentType<P>
) {
  function Wrapped(props: Pick<P, Exclude<keyof P, keyof ComponentProps>>) {
    return (
      <RenderStaticContext.Consumer>
        {context => {
          const newProps: P = {
            ...props,
            renderStatic: context.renderStatic,
          } as any;
          return <Component {...newProps} />;
        }}
      </RenderStaticContext.Consumer>
    );
  }

  Wrapped.name = `withRenderStatic(${Component.displayName ||
    Component.name ||
    'Unknown'})`;

  return Wrapped;
}

export function useRenderStatic() {
  return React.useContext(RenderStaticContext).renderStatic;
}

export default function render(element: JSX.Element) {
  let dynamicContentFirstRender = true;
  let dynamicContentSnapshot = '';
  let dynamicContentTop = 0;
  let dynamicContentBottom = 0;

  function renderStatic(staticElement: JSX.Element) {
    const { snapshot: staticElementSnapshot } = renderToString(staticElement);
    terminal.moveTo(0, dynamicContentTop);
    terminal(staticElementSnapshot);
    terminal('\n');
    terminal(dynamicContentSnapshot);
    const staticContentheight = (staticElementSnapshot || '').split('\n')
      .length;
    dynamicContentTop += staticContentheight;
    dynamicContentBottom += staticContentheight;
  }

  (async () => {
    for await (const snapshot of renderToString(
      <RenderStaticContext.Provider value={{ renderStatic }}>
        {element}
      </RenderStaticContext.Provider>,
      {
        width: terminal.width,
      }
    )) {
      dynamicContentSnapshot = snapshot || '';
      if (dynamicContentFirstRender) {
        dynamicContentFirstRender = false;
        terminal(snapshot);
        const { y } = await getCursorLocation();
        dynamicContentBottom = y;
      } else {
        const dynamicConentHeight = (snapshot || '').split('\n').length;
        dynamicContentTop = dynamicContentBottom - dynamicConentHeight + 1;
        terminal.moveTo(0, dynamicContentTop);
        terminal.eraseDisplayBelow();
        terminal(snapshot);
        const { y } = await getCursorLocation();
        // eslint-disable-next-line require-atomic-updates
        dynamicContentBottom = y;
      }
    }
  })().catch(error => {
    console.error(error);
    terminal.processExit(1);
  });

  return { renderStatic };
}
