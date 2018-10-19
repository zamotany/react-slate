/* @flow */

import ReactFiberReconciler from 'react-reconciler';
import { Root, RenderingPipeline } from '@react-slate/reflow';

import type { Target } from '../types';

import hostConfig from '../host/hostConfig';
import App from './App';

const targetMap = new WeakMap();

export default function render(
  element: any,
  target: Target,
  callback: ?() => void = null
) {
  App.onExit(() => {
    if (targetMap.has(target)) {
      const { node, reconciler } = (targetMap.get(target): any);
      reconciler.updateContainer(null, node, null);
    }
  }, App.Priority.Critical);

  if (targetMap.has(target)) {
    const { node, reconciler } = (targetMap.get(target): any);
    reconciler.updateContainer(element, node, null, callback);
  } else {
    target.setCursorPosition(0, 0);
    target.clear(true);
    const container = new Root(target.getSize());
    const renderingPipeline = new RenderingPipeline();
    const reconciler = ReactFiberReconciler(
      hostConfig(
        container,
        target,
        target.forceFullPrint
          ? renderingPipeline.render
          : renderingPipeline.renderDiff
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
