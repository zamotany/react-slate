/* @flow */

import readline from 'readline';
import { onExit, hasThrownError } from './utils';
import { SHOW_CURSOR, HIDE_CURSOR, CLEAR_SCROLL_BACK } from '../asciiCodes';

type Stream = stream$Writable;

export function clearScreen(stream: Stream) {
  readline.clearScreenDown(stream);
}

export function clearOnExit(stream: Stream, forceClear?: boolean = false) {
  onExit(() => {
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

  onExit(restoreCursor);
}

export function clearScrollbackOnExit(
  stream: Stream,
  forceClear?: boolean = false
) {
  onExit(() => {
    if (!hasThrownError() || forceClear) {
      stream.write(CLEAR_SCROLL_BACK);
    }
  });
}

export function clearOnError(stream: Stream) {
  onExit(() => {
    if (hasThrownError()) {
      clearScreen(stream);
    }
  });
}
