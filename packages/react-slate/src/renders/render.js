/* @flow */

import ReactFiberReconciler from 'react-reconciler';

import type { Target } from '../types';

import ContainerNode from '../nodes/ContainerNode';
import hostConfig from '../host/hostConfig';
import clearCallbacksOnExit from '../utils/clearCallbacksOnExit';

export default function render(
  element: any,
  target: Target,
  callback: ?Function = null
) {
  clearCallbacksOnExit();
  const container = new ContainerNode(target);
  const NodeStreamReconciler = ReactFiberReconciler(hostConfig(container));
  const node = NodeStreamReconciler.createContainer(container);
  NodeStreamReconciler.updateContainer(element, node, null, callback);
}
