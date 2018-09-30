/* @flow */

import View from './View';
import type { ChildNode, Node } from '../types';
import calculateLayout from '../layout/calculateLayout';
import RootLayout from '../layout/elements/RootLayout';

type Size = {
  width: number,
  height: number,
};

export default class Root implements Node {
  children = [];
  parent = null;
  layout = new RootLayout(this);
  size: Size;

  constructor(size: Size) {
    this.size = size;
  }

  findChild(child: ChildNode) {
    return View.prototype.findChild.call(this, child);
  }

  prependChild(child: ChildNode, position?: number) {
    return View.prototype.prependChild.call(this, child, position);
  }

  appendChild(child: ChildNode, position?: number) {
    return View.prototype.appendChild.call(this, child, position);
  }

  removeChild(child: ChildNode) {
    return View.prototype.removeChild.call(this, child);
  }

  calculateLayout() {
    return calculateLayout(this);
  }
}
