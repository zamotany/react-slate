import Reconciler from 'react-reconciler';
import { inspect } from 'util';
import createReconcilerConfig from './host/reconcilerConfig';
import View from './host/nodes/View';
import Text from './host/nodes/Text';
import { Layout } from './layout';
import { JsonView, JsonText, JsonParagraph } from './types';
import { AsyncIterator } from './utils';
import Paragraph from './host/nodes/Paragraph';

function traverse(
  node: View | Paragraph | Text,
  layout: Layout
): JsonView | JsonParagraph | JsonText | undefined {
  if (node instanceof View) {
    return {
      node: 'View',
      children: node.children.map((child, index) =>
        traverse(child, layout.child(index))
      ),
      width: layout.width,
      height: layout.height,
      x: layout.x,
      y: layout.y,
      style: node.style,
    } as JsonView;
  } else if (node instanceof Text) {
    return {
      node: 'Text',
      body: node.getBody(),
      width: layout.width,
      height: layout.height,
      x: layout.x,
      y: layout.y,
      style: node.style,
    } as JsonText;
  } else if (node instanceof Paragraph) {
    return {
      node: 'Paragraph',
      children: node.children.map((child, index) =>
        traverse(child, layout.child(index))
      ),
      width: layout.width,
      height: layout.height,
      x: layout.x,
      y: layout.y,
      style: node.style,
    } as JsonParagraph;
  }

  throw new Error(`Unknown instance of node: ${inspect(node)}`);
}

export default function renderToJson(
  element: JSX.Element,
  {
    width,
    height,
    maxRenders,
  }: { width?: number; height?: number; maxRenders?: number } = {}
): { snapshot: JsonView | undefined } & Iterable<
  Promise<JsonView | undefined>
> {
  let currentSnapshot: JsonView | undefined;
  const asyncIterator = new AsyncIterator<JsonView | undefined>(maxRenders);
  const container = new View();
  container.setLayoutStyle({ width: '100%', height: '100%' });
  const reconciler = Reconciler(
    createReconcilerConfig(container, () => {
      const layout = container.layoutNode.computeLayout({
        width: width || null,
        height: height || null,
      });
      container.notifyOnLayoutHook(layout, { offsetX: 0, offsetY: 0 });
      currentSnapshot = traverse(container, layout) as JsonView;
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
