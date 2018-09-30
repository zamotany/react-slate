/* @flow */

import { Stack } from 'buckets-js';
import assert from 'assert';
import Hierarchy from './lib/Hierarchy';
import type Root from '../nodes/Root';
import type { Drawable, LayoutElement, Node } from '../types';

export default function calculateLayout(
  root: Root
): { drawableItems: Drawable[], layoutTree: LayoutElement } {
  const hierarchy = new Hierarchy();
  const layoutState = new Stack();

  const visit = (node: Node): LayoutElement => {
    const parentLayout = layoutState.peek();
    assert(node !== parentLayout.node, 'Cannot use the same node as a child');
    const currentLayout = node.layout;
    currentLayout.reset();
    currentLayout.init();

    const index = currentLayout.isDrawable()
      ? hierarchy.getIndex(currentLayout.boxModel.getPosition().z)
      : null;

    if (node.children.length) {
      layoutState.push(currentLayout);

      node.children.forEach(child => {
        const childLayout = visit(child);
        currentLayout.updateDimensions(childLayout);
      });

      layoutState.pop();
    }

    if (index) {
      hierarchy.insertElements(index, currentLayout.getDrawableItems());
    }

    return currentLayout;
  };

  // Initial block layout element for Root.
  const rootLayout = root.layout;
  rootLayout.reset();
  layoutState.push(rootLayout);

  root.children.forEach(child => {
    rootLayout.updateDimensions(visit(child));
  });

  return {
    drawableItems: hierarchy.toArray(),
    layoutTree: rootLayout,
  };
}
