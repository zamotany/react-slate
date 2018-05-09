/* @flow */

import readline from 'readline';
import { Internal } from '@react-slate/core';
import { hasThrownError } from './utils';
import { SHOW_CURSOR, HIDE_CURSOR, CLEAR_SCROLL_BACK } from '../asciiCodes';

type Stream = stream$Writable;

export function clearScreen(stream: Stream) {
  readline.clearScreenDown(stream);
}

export function clearOnExit(stream: Stream, forceClear?: boolean = false) {
  Internal.onExit(() => {
    if (!hasThrownError() || forceClear) {
      clearScreen(stream);
    }
  });
}

export function hideCursor(stream: Stream) {
  stream.write(HIDE_CURSOR);

  const restoreCursor = () => {
    stream.write(SHOW_CURSOR);
  };

  Internal.onExit(restoreCursor);
}

export function clearScrollbackOnExit(
  stream: Stream,
  forceClear?: boolean = false
) {
  Internal.onExit(() => {
    if (!hasThrownError() || forceClear) {
      stream.write(CLEAR_SCROLL_BACK);
    }
  });
}

export function clearOnError(stream: Stream) {
  Internal.onExit(() => {
    if (hasThrownError()) {
      clearScreen(stream);
    }
  });
}
