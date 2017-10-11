/* @flow */

/* eslint-disable no-param-reassign */

// $FlowFixMe
import { ReactFiberReconciler } from 'react-dom';
import reconcilerConfig from './utils/reconcilerConfig';
import components from './components';

const NodeStreamReconciler = ReactFiberReconciler(reconcilerConfig);

// eslint-disable-next-line import/prefer-default-export
export function render(element: any, stream: any) {
  const container = new components.StreamContainer(stream);
  const node = NodeStreamReconciler.createContainer(container);
  NodeStreamReconciler.updateContainer(element, node, null);
  container.flush();
}

Object.keys(components).forEach(id => {
  module.exports[id] = components[id];
});
