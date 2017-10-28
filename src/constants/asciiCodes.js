/* @flow */

export const HIDE_CURSOR = '\x1B[?25l';
export const SHOW_CURSOR = '\x1B[?25h';
export const CLEAR_SCROLL_BACK =
  process.platform === 'win32' ? '\x1Bc' : '\x1B[2J\x1B[3J\x1B[H';
