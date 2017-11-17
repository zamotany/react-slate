/* @flow */

import readline from 'readline';
import {
  CLEAR_SCROLL_BACK,
  SHOW_CURSOR,
  HIDE_CURSOR,
} from '../constants/asciiCodes';
import { onExit } from './utils';

export function clearOnExit(stream: any) {
  onExit(() => {
    readline.cursorTo(stream, 0, 0);
    readline.clearScreenDown(stream);
  });
}

export function hideCursor(stream: any) {
  stream.write(HIDE_CURSOR);

  const restoreCursor = () => {
    stream.write(SHOW_CURSOR);
  };

  onExit(restoreCursor);
}

export function clearScrollbackOnExit(stream: any) {
  onExit(() => {
    stream.write(CLEAR_SCROLL_BACK);
  });
}
