import Reconciler from 'react-reconciler';
import createReconcilerConfig from './host/reconcilerConfig';
import View from './host/nodes/View';
import Renderer from './host/renderer/Renderer';
import { AsyncIterator } from './utils';

export default function renderToString(
  element: JSX.Element,
  {
    width,
    height,
    maxRenders,
  }: { width?: number; height?: number; maxRenders?: number } = {}
): { snapshot: string | undefined } & Iterable<Promise<string | undefined>> {
  let currentSnapshot = '';
  const asyncIterator = new AsyncIterator<string>(maxRenders);
  const renderer = new Renderer();
  const container = new View();
  container.setLayoutStyle({ width: '100%', height: '100%' });
  const reconciler = Reconciler(
    createReconcilerConfig(container, () => {
      const layout = container.layoutNode.computeLayout({
        width: width || null,
        height: height || null,
      });
      container.notifyOnLayoutHook(layout, { offsetX: 0, offsetY: 0 });
      currentSnapshot = renderer.renderToString(container, layout, {
        maxHeight: height,
        maxWidth: width,
      });

      asyncIterator.nextValue(currentSnapshot);
    })
  );
  const node = reconciler.createContainer(container, false, false);
  reconciler.updateContainer(element, node, null, () => undefined);
  return asyncIterator.makeIterator({
    get snapshot() {
      return currentSnapshot;
    },
  });
}
