/* @flow */

import BoxModel from '../lib/BoxModel';
import type Text from '../../nodes/Text';
import trimHorizontally from '../lib/trimHorizontally';
import { makeInlineStyle } from '../lib/makeStyle';
import type { LayoutElement } from '../../types';

export default class UnitLayout implements LayoutElement {
  node: Text;
  parent: LayoutElement;
  children = Object.freeze([]);
  lastChild = null;

  boxModel = new BoxModel();
  isInline = true;
  isAbsolute = false;

  constructor(node: Text, parent: LayoutElement) {
    this.node = node;
    this.parent = parent;
    parent.children.push(this);
    this.init();
  }

  init() {
    const isSwitching = Boolean(
      this.parent.lastChild && !this.parent.lastChild.isInline
    );

    this.boxModel.setMaxDimensions({
      parentBox: this.parent.boxModel,
      siblingBox: this.parent.lastChild
        ? this.parent.lastChild.boxModel
        : undefined,
      variant: 'current-line',
      isSwitching,
    });

    this.boxModel.resize({
      width: this.node.body.length,
      height: 1,
    });

    if (this.parent.lastChild) {
      this.boxModel.setPosition({
        parentBox: this.parent.boxModel,
        // $FlowFixMe
        siblingBox: this.parent.lastChild.boxModel,
        variant: isSwitching ? 'next-line' : 'current-line',
      });
    } else {
      this.boxModel.setPosition({
        parentBox: this.parent.boxModel,
        variant: 'init',
      });
    }
  }

  // eslint-disable-next-line no-unused-vars
  updateDimensions(childLayout: *) {
    // NOOP
  }

  isDrawable() {
    return this.boxModel.isVisible();
  }

  getDrawableItems() {
    const style = makeInlineStyle(collectStyleProps(this));
    const value = trimHorizontally(
      this.boxModel.getDrawableItemWidth(),
      this.node.body,
      (style && style.textAlign) || 'left'
    );

    return [
      {
        body: {
          value,
          style,
          x: this.boxModel.getPosition().x,
          y: this.boxModel.getPosition().y,
        },
      },
    ];
  }

  getLayoutTree() {
    return {
      type: UnitLayout.name,
      dimensions: this.boxModel.getSize(),
      placement: this.boxModel.getPosition(),
      body: this.node.body,
    };
  }
}

function collectStyleProps(layout: LayoutElement) {
  const styleProps = [];
  let currentLayout = layout.parent;
  while (currentLayout && currentLayout.node) {
    if (currentLayout.node.styleProps) {
      const {
        // $FlowFixMe
        backgroundColor,
        // $FlowFixMe
        ...inlineStyleProps
      } = currentLayout.node.styleProps;
      styleProps.push(inlineStyleProps);
    }
    currentLayout = currentLayout.parent || null;
  }
  return styleProps.reverse();
}
