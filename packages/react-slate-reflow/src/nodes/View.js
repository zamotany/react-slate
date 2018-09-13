/* @flow */

import assert from 'assert';
import type {
  Child,
  Parent,
  LayoutProps,
  StyleProps,
  BorderProps,
  Traversable,
} from '../types';

export default class View implements Traversable<Child> {
  parent: ?Parent = null;
  children: Array<Traversable<Child>> = [];
  tagId: ?string = null;

  layoutProps: ?LayoutProps = null;
  styleProps: ?StyleProps = null;
  borderProps: ?BorderProps = null;

  constructor({ parent, tagId }: { parent: Parent, tagId: string } = {}) {
    if (parent) {
      this.parent = parent;
    }
    this.tagId = tagId;
  }

  setLayoutProps(layoutProps: ?LayoutProps) {
    this.layoutProps = layoutProps;
  }

  setStyleProps(styleProps: ?StyleProps) {
    this.styleProps = styleProps;
  }

  setBorder(borderProps: ?BorderProps) {
    this.borderProps = borderProps;
  }

  findChild(child: Child) {
    return this.children.indexOf(child);
  }

  prependChild(child: Child, position?: number) {
    // eslint-disable-next-line no-param-reassign
    child.parent = this;
    if (position) {
      assert(
        position >= 0 && position <= this.children.length - 1,
        `child position out of bounds: ${position}`
      );

      this.children.splice(position, 0, child);
    } else {
      this.children.unshift(child);
    }
  }

  appendChild(child: Child, position?: number) {
    // eslint-disable-next-line no-param-reassign
    child.parent = this;
    if (position) {
      assert(
        position >= 0 && position <= this.children.length,
        `child position out of bounds: ${position}`
      );

      this.children.splice(position + 1, 0, child);
    } else {
      this.children.push(child);
    }
  }

  removeChild(child: Child) {
    const index = this.children.indexOf(child);

    assert(index >= 0, 'child not found');

    // eslint-disable-next-line no-param-reassign
    child.parent = null;
    this.children.splice(index, 1);
  }
}
