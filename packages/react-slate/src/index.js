/* @flow */

// $FlowFixMe
import ReactFiberReconciler from 'react-reconciler';

import type { IBaseAdapter } from './adapters/BaseAdapter';

import ContainerNode from './nodes/ContainerNode';
import hostConfig from './utils/hostConfig';

export function render(element: any, streamAdapter: IBaseAdapter) {
  const container = new ContainerNode(streamAdapter);
  const NodeStreamReconciler = ReactFiberReconciler(hostConfig(container));
  const node = NodeStreamReconciler.createContainer(container);
  NodeStreamReconciler.updateContainer(element, node, null);

  return function forceUpdate() {
    container.reset();
    container.draw();
  };
}

export * from './components';
export { default as colors } from './constants/colors';
export { default as makeTTYAdapter } from './adapters/TTY/makeTTYAdapter';
export { default as makeTestAdapter } from './adapters/makeTestAdapter';
export { default as BaseAdapter } from './adapters/BaseAdapter';
