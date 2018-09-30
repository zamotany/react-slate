/* @flow */

import assert from 'assert';
import UnitLayout from '../layout/elements/UnitLayout';
import type { Node } from '../types';

export default class Text implements Node {
  body: string = '';
  parent = null;
  // Children should always be empty.
  children = Object.freeze([]);
  layout = new UnitLayout(this);

  setBody(body: string) {
    assert(!body.includes('\n'), 'Text body cannot have new line characters');
    this.body = body;
  }
}
