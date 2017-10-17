/* @flow */

import readline from 'readline';

export default class LineBuffer {
  constructor(text: string) {
    this._text = text;
  }

  _text: string;

  update(text: string, stream: *) {
    const previous = this._text.split('\n');
    const next = text.split('\n');

    for (let i = 0, l = Math.max(previous.length, next.length); i < l; i++) {
      if (previous[i] !== next[i]) {
        readline.cursorTo(stream, 0, i);
        readline.clearLine(stream, 0);

        if (next[i]) {
          stream.write(next[i]);
        }
      }
    }

    readline.cursorTo(stream, 0, next.length);

    this._text = text;
  }
}
