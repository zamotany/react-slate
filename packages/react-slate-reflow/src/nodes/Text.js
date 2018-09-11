/* @flow */

import assert from 'assert';
import type { Parent, Traversable } from '../types';

export default class Text implements Traversable<*> {
  body: string = '';
  parent: ?Parent = null;
  // Children should always be empty.
  children: Array<*> = Object.freeze([]);

  setBody(body: string) {
    assert(!body.includes('\n'), 'Text body cannot have new line characters');
    this.body = body;
  }
}
