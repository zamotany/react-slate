/* @flow */

import readline from 'readline';
import type { OutputStream } from '../types';

const HIDE_CURSOR = '\x1B[?25l';
const SHOW_CURSOR = '\x1B[?25h';
const CLEAR_SCROLL_BACK =
  process.platform === 'win32' ? '\x1Bc' : '\x1B[2J\x1B[3J\x1B[H';

const defaultStream = process.stdout;

export default {
  Codes: {
    HIDE_CURSOR,
    SHOW_CURSOR,
    CLEAR_SCROLL_BACK,
  },
  clear(stream: OutputStream = defaultStream) {
    readline.clearScreenDown(stream);
  },
  clearScrollback(stream: OutputStream = defaultStream) {
    stream.write(CLEAR_SCROLL_BACK);
  },
  showCursor(stream: OutputStream = defaultStream) {
    stream.write(SHOW_CURSOR);
  },
  hideCursor(stream: OutputStream = defaultStream) {
    stream.write(HIDE_CURSOR);
  },
};
