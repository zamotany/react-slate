/* @flow */

import ReactFiberReconciler from 'react-reconciler';
import {
  Root,
  render as nativeRender,
  createDiffRenderer,
} from '@react-slate/reflow';

import type { Target } from '../types';

import hostConfig from '../host/hostConfig';
import onExit from '../utils/onExit';

const targetMap = new WeakMap();

export default function render(
  element: any,
  target: Target,
  callback: ?() => void = null
) {
  onExit(() => {
    if (targetMap.has(target)) {
      const { node, reconciler } = (targetMap.get(target): any);
      reconciler.updateContainer(null, node, null);
    }
  });

  if (targetMap.has(target)) {
    const { node, reconciler } = (targetMap.get(target): any);
    reconciler.updateContainer(element, node, null, callback);
  } else {
    target.setCursorPosition(0, 0);
    target.clear(true);
    const container = new Root(target.getSize());
    const reconciler = ReactFiberReconciler(
      hostConfig(
        container,
        target,
        target.forceFullPrint ? nativeRender : createDiffRenderer()
      )
    );
    const node = reconciler.createContainer(container);
    targetMap.set(target, {
      container,
      node,
      reconciler,
    });
    reconciler.updateContainer(element, node, null, callback);
  }
}
