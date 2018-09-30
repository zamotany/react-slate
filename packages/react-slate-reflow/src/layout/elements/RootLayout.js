/* @flow */

import ContainerLayout from './ContainerLayout';
import BoxModel from '../lib/BoxModel';
import type Root from '../../nodes/Root';
import type { LayoutElement } from '../../types';

export default class RootLayout implements LayoutElement {
  node: Root;
  parent: LayoutElement;
  children = [];
  lastChild = null;

  boxModel = new BoxModel();
  isInline = false;
  isAbsolute = false;

  constructor(node: Root) {
    this.node = node;
  }

  reset() {
    this.boxModel = new BoxModel();
    this.lastChild = null;
  }

  init() {
    // NOOP
  }

  updateDimensions(childLayout: LayoutElement) {
    // If child layout is absolute the update logic can be simplified to
    // simply take the grater value. Additionally, placement x and y must
    // be taken into account also since they correspond to `left` and `top` values.
    if (childLayout.isAbsolute) {
      const { width, height } = childLayout.boxModel.getSize();
      const { x, y } = childLayout.boxModel.getPosition();
      this.boxModel.resize({
        width: x + width,
        height: y + height,
      });
    } else {
      ContainerLayout.prototype.updateDimensions.call(this, childLayout);
    }
  }

  isDrawable() {
    return false;
  }

  getDrawableItems() {
    return [];
  }

  getLayoutTree() {
    return {
      type: RootLayout.name,
      dimensions: this.boxModel.getSize(),
      placement: this.boxModel.getPosition(),
      // $FlowFixMe
      children: this.children.map((child: LayoutElement) =>
        child.getLayoutTree()
      ),
    };
  }
}
