/* @flow */

import type { Element } from 'react';
import ReactFiberReconciler from 'react-reconciler';
import { Root } from '@react-slate/reflow';
import hostConfig from '../host/hostConfig';

const NOOP = () => {};
const target = {
  forceFullPrint: true,
  setCursorPosition: NOOP,
  print: NOOP,
  clear: NOOP,
  getSize: () => ({ width: -1, height: -1 }),
  raiseError: error => {
    throw error;
  },
  measure: NOOP,
};

export default function getDetachedNode(element: Element<*>) {
  const container = new Root();
  const config = hostConfig(container, target, (...args) => ({})); // eslint-disable-line no-unused-vars
  const reconciler = ReactFiberReconciler(config);
  const reconcilerNode = reconciler.createContainer(container);
  reconciler.updateContainer(element, reconcilerNode, null);
  const [node = null] = container.children;
  reconciler.updateContainer(null, reconcilerNode, null);
  return node;
}
