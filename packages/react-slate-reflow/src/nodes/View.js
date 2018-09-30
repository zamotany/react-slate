/* @flow */

import assert from 'assert';
import ContainerLayout from '../layout/elements/ContainerLayout';
import BorderLayout from '../layout/elements/BorderLayout';
import normalizeLayoutProps from '../layout/lib/normalizeLayoutProps';
import type {
  LayoutProps,
  StyleProps,
  BorderProps,
  Node,
  ChildNode,
  ParentNode,
  NormalizedLayoutProps,
} from '../types';

export default class View implements Node {
  parent = null;
  children = [];
  layout = new ContainerLayout(this);

  tagId: ?string = null;

  layoutProps: ?LayoutProps = null;
  normalizedLayoutProps: ?NormalizedLayoutProps = null;
  styleProps: ?StyleProps = null;
  borderProps: ?BorderProps = null;

  constructor({ parent, tagId }: { parent: ParentNode, tagId: string } = {}) {
    if (parent) {
      this.parent = parent;
    }
    this.tagId = tagId;
  }

  setLayoutProps(layoutProps: ?LayoutProps) {
    this.layoutProps = layoutProps;
    if (this.layoutProps) {
      this.normalizedLayoutProps = normalizeLayoutProps(this.layoutProps);
    } else {
      this.normalizedLayoutProps = null;
    }
  }

  setStyleProps(styleProps: ?StyleProps) {
    this.styleProps = styleProps;
  }

  setBorder(borderProps: ?BorderProps) {
    this.borderProps = borderProps;
    const layout = this.borderProps
      ? new BorderLayout(this)
      : new ContainerLayout(this);
    this.layout.children.forEach((childLayout, index) => {
      layout.children[index] = childLayout;
      // eslint-disable-next-line no-param-reassign
      childLayout.parent = layout;
    });

    // Rewire new layout element
    if (this.parent) {
      const parentLayout = this.parent.layout;
      const index = parentLayout.children.indexOf(this.layout);
      assert(index >= 0, 'child layout to replace was not found');
      parentLayout.children[index] = layout;
      layout.parent = parentLayout;
    }

    this.layout = layout;
  }

  findChild(child: ChildNode) {
    return this.children.indexOf(child);
  }

  prependChild(child: ChildNode, position?: number) {
    // eslint-disable-next-line no-param-reassign
    child.parent = this;
    // eslint-disable-next-line no-param-reassign
    child.layout.parent = this.layout;
    if (position) {
      assert(
        position >= 0 && position <= this.children.length - 1,
        `child position out of bounds: ${position}`
      );
      this.children.splice(position, 0, child);
      this.layout.children.splice(position, 0, child.layout);
    } else {
      this.children.unshift(child);
      this.layout.children.unshift(child.layout);
    }
  }

  appendChild(child: ChildNode, position?: number) {
    // eslint-disable-next-line no-param-reassign
    child.parent = this;
    // eslint-disable-next-line no-param-reassign
    child.layout.parent = this.layout;
    if (position) {
      assert(
        position >= 0 && position <= this.children.length,
        `child position out of bounds: ${position}`
      );

      this.children.splice(position + 1, 0, child);
      this.layout.children.splice(position + 1, 0, child.layout);
    } else {
      this.children.push(child);
      this.layout.children.push(child.layout);
    }
  }

  removeChild(child: ChildNode) {
    // Remove node
    const nodeIndex = this.children.indexOf(child);
    assert(nodeIndex >= 0, 'child not found');
    // eslint-disable-next-line no-param-reassign
    child.parent = null;
    this.children.splice(nodeIndex, 1);

    // CLear layout relation
    const layoutIndex = this.layout.children.indexOf(child.layout);
    assert(layoutIndex >= 0, 'child layout not found');
    // $FlowFixMe
    child.layout.parent = undefined; // eslint-disable-line no-param-reassign
    this.layout.children.splice(layoutIndex, 1);
  }
}
