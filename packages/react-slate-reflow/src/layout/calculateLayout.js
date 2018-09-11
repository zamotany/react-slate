/* @flow */

import { Stack } from 'buckets-js';
import assert from 'assert';
import Root from '../nodes/Root';
import View from '../nodes/View';
import Text from '../nodes/Text';
import RootLayout from './elements/RootLayout';
import ContainerLayout from './elements/ContainerLayout';
import BorderLayout from './elements/BorderLayout';
import UnitLayout from './elements/UnitLayout';
import Hierarchy from './lib/Hierarchy';
import type { Drawable, LayoutElement } from '../types';

function createLayoutElement(node, parent) {
  if (node instanceof Text) {
    return new UnitLayout(node, parent);
  } else if (node instanceof View && node.borderProps) {
    return new BorderLayout(node, parent);
  } else if (node instanceof View) {
    return new ContainerLayout(node, parent);
  }
  throw new Error('Unknown node type');
}

export default function calculateLayout(
  root: Root
): { drawableItems: Drawable[], layoutTree: RootLayout } {
  const hierarchy = new Hierarchy();
  const layoutState = new Stack();

  const visit = (node): LayoutElement => {
    const parentLayout = layoutState.peek();
    assert(node !== parentLayout.node, 'Cannot use the same node as a child');
    const currentLayout = createLayoutElement(node, parentLayout);

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
  debugger; // eslint-disable-line
  // Initial block layout element for Root.
  const rootLayout = new RootLayout();
  layoutState.push(rootLayout);

  root.children.forEach(child => {
    rootLayout.updateDimensions(visit(child));
  });

  return {
    drawableItems: hierarchy.toArray(),
    layoutTree: rootLayout,
  };
}
