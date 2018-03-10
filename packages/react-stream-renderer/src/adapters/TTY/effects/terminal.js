/* @flow */

import TTYAdapter from '../TTYAdapter';
import { onExit } from './utils';
import { SHOW_CURSOR, HIDE_CURSOR, CLEAR_SCROLL_BACK } from '../asciiCodes';
import { hasThrown } from '../../../utils/throwError';

export function clearScreen(streamAdapter: TTYAdapter) {
  streamAdapter.clear();
}

export function clearOnExit(
  streamAdapter: TTYAdapter,
  forceClear?: boolean = false
) {
  onExit(() => {
    if (!hasThrown() || forceClear) {
      clearScreen(streamAdapter);
    }
  });
}

export function hideCursor(streamAdapter: TTYAdapter) {
  streamAdapter.stream.write(HIDE_CURSOR);

  const restoreCursor = () => {
    streamAdapter.stream.write(SHOW_CURSOR);
  };

  onExit(restoreCursor);
}

export function clearScrollbackOnExit(
  streamAdapter: TTYAdapter,
  forceClear?: boolean = false
) {
  onExit(() => {
    if (!hasThrown() || forceClear) {
      streamAdapter.stream.write(CLEAR_SCROLL_BACK);
    }
  });
}

export function clearOnError(streamAdapter: TTYAdapter) {
  onExit(() => {
    if (hasThrown()) {
      streamAdapter.clear();
    }
  });
}
