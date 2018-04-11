/* @flow */

import type { NodeStream } from '../../types';

import TTYAdapter from './TTYAdapter';

/**
 * Creates an adapter a TTY Node stream.
 * Use chainable API from TTYAdapter for configuring the behavior.
 */
export default function makeTTYAdapter(stream: NodeStream) {
  if (!stream.isTTY) {
    throw new Error('Given stream is not a TTY');
  }

  return new TTYAdapter({
    stream,
    effects: [],
  });
}
