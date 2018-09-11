/* @flow */

import ContainerLayout from './ContainerLayout';
import BoxModel from '../lib/BoxModel';
import { makeBorderStyle, makeBlockStyle } from '../lib/makeStyle';
import type View from '../../nodes/View';
import type { LayoutElement } from '../../types';

const BORDER_CHARS = {
  'single-line': {
    top: '─',
    bottom: '─',
    left: '│',
    right: '│',
    topLeft: '┌',
    topRight: '┐',
    bottomLeft: '└',
    bottomRight: '┘',
  },
  'double-line': {
    top: '═',
    bottom: '═',
    left: '║',
    right: '║',
    topLeft: '╔',
    topRight: '╗',
    bottomLeft: '╚',
    bottomRight: '╝',
  },
};

export default class BorderLayout implements LayoutElement {
  node: View;
  parent: LayoutElement;
  children = [];
  lastChild = null;

  boxModel = new BorderBoxModel();
  isInline = false;
  isAbsolute = false;

  constructor(node: View, parent: LayoutElement) {
    this.node = node;
    this.parent = parent;
    parent.children.push(this);
    this.init();
  }

  init() {
    ContainerLayout.prototype.init.call(this);
  }

  updateDimensions(childLayout: *) {
    ContainerLayout.prototype.updateDimensions.call(this, childLayout);
  }

  isDrawable() {
    return true;
  }

  getDrawableItems() {
    const width = this.boxModel.getSize().width - 2;
    const height = this.boxModel.getSize().height - 2;
    const x = this.boxModel.getPosition().x;
    const y = this.boxModel.getPosition().y;
    const additionalDrawableItems = ContainerLayout.prototype.isDrawable.call(
      this
    )
      ? ContainerLayout.prototype.getDrawableItems.call(this)
      : [];
    const style = makeBorderStyle(this.node.borderProps, this.node.styleProps);
    const borderChars =
      // $FlowFixMe
      BORDER_CHARS[this.node.borderProps.thickness];
    return [
      ...new Array(height).fill(null).map((e, index) => ({
        body: {
          value: ' '.repeat(width),
          x: x + 1,
          y: y + index + 1,
          style: makeBlockStyle(this.node.styleProps),
        },
      })),
      ...additionalDrawableItems,
      {
        body: {
          value: `${borderChars.topLeft}${borderChars.top.repeat(width)}${
            borderChars.topRight
          }`,
          x,
          y,
          style,
        },
      },
      ...new Array(height).fill(null).map((e, index) => ({
        body: {
          value: borderChars.left,
          x,
          y: y + index + 1,
          style,
        },
      })),
      ...new Array(height).fill(null).map((e, index) => ({
        body: {
          value: borderChars.right,
          x: x + width + 1,
          y: y + index + 1,
          style,
        },
      })),
      {
        body: {
          value: `${borderChars.bottomLeft}${borderChars.bottom.repeat(width)}${
            borderChars.bottomRight
          }`,
          x,
          y: y + height + 1,
          style,
        },
      },
    ];
  }

  getLayoutTree() {
    return {
      type: `${BorderLayout.name}${this.isInline ? '(inline)' : ''}${
        this.isAbsolute ? '(absolute)' : ''
      }`,
      dimensions: this.boxModel.getSize(),
      placement: this.boxModel.getPosition(),
      // $FlowFixMe
      children: this.children.map((child: LayoutElement) =>
        child.getLayoutTree()
      ),
    };
  }
}

class BorderBoxModel extends BoxModel {
  getSize() {
    const { width, height } = super.getSize();
    return {
      width: width + 2,
      height: height + 2,
    };
  }

  getPosition(variant?: 'for-parent' | 'for-child' | 'for-sibling') {
    switch (variant) {
      case 'for-sibling':
      case 'for-parent':
      default:
        return {
          x: this._position.x,
          y: this._position.y,
          z: this._position.z,
        };
      case 'for-child':
        return {
          x: this._position.x + 1,
          y: this._position.y + 1,
          z: this._position.z,
        };
    }
  }

  resizeToContain({ childBox }: { childBox: BoxModel }) {
    const { width, height } = childBox.getSize();
    const childPosition = childBox.getPosition('for-parent');
    // NOTE: left and top inset bounds have to be subtracted, since
    // they were added in child's placement.
    const xDiff =
      childPosition.x - 1 - this._position.x - this._insetBounds.left;
    const yDiff =
      childPosition.y - 1 - this._position.y - this._insetBounds.top;
    this.resize({
      width: xDiff + width + childBox._outsetBounds.right,
      height: yDiff + height + childBox._outsetBounds.bottom,
    });
  }
}
