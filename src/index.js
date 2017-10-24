/* @flow */

// $FlowFixMe
import { ReactFiberReconciler } from 'react-dom';
import hostConfig from './utils/hostConfig';
import ContainerNode from './nodes/ContainerNode';

const NodeStreamReconciler = ReactFiberReconciler(hostConfig);

export function render(element: any, stream: any, options: any) {
  const container = new ContainerNode(stream, options);
  const node = NodeStreamReconciler.createContainer(container);
  NodeStreamReconciler.updateContainer(element, node, null);
}

export * from './components';
export * from './constants/asciiCodes';
export { default as colors } from './constants/colors';
export { hideCursor, showCursor } from './effects/cursor';
