/* @flow */

import View from './View';
import type { Child, Traversable } from '../types';
import calculateLayout from '../layout/calculateLayout';

type Size = {
  width: number,
  height: number,
};

export default class Root implements Traversable<Child> {
  children: Array<Traversable<Child>> = [];
  size: Size;

  constructor(size: Size) {
    this.size = size;
  }

  findChild(child: Child) {
    return View.prototype.findChild.call(this, child);
  }

  prependChild(child: Child, position?: number) {
    return View.prototype.prependChild.call(this, child, position);
  }

  appendChild(child: Child, position?: number) {
    return View.prototype.appendChild.call(this, child, position);
  }

  removeChild(child: Child) {
    return View.prototype.removeChild.call(this, child);
  }

  calculateLayout() {
    return calculateLayout(this);
  }
}
