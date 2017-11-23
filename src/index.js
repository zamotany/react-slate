/* @flow */

// $FlowFixMe
import ReactFiberReconciler from 'react-reconciler';
import hostConfig from './utils/hostConfig';
import ContainerNode from './nodes/ContainerNode';
import clearCallbacksOnExit from './effects/clearCallbacksOnExit';
import { throwError } from './utils/throwError';

process.on('uncaughtException', error => {
  throwError(error);
});

process.on('unhandledRejection', reason => {
  throwError(new Error(`Unhandled rejection: ${reason}`));
});

clearCallbacksOnExit();

const NodeStreamReconciler = ReactFiberReconciler(hostConfig);

export function render(element: any, stream: any, options: any) {
  const container = new ContainerNode(stream, options);
  const node = NodeStreamReconciler.createContainer(container);
  NodeStreamReconciler.updateContainer(element, node, null);
}

export * from './components';
export * from './constants/asciiCodes';
export { default as colors } from './constants/colors';
