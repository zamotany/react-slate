/* @flow */

import readline from 'readline';

import render from './render';

export default function renderToTerminal(
  element: any,
  stream: tty$WriteStream,
  callback: ?Function = null
) {
  const target = {
    forceFullPrint: false,
    setCursorPosition(x: number, y: number) {
      readline.cursorTo(stream, x, y);
    },
    print(data: string) {
      stream.write(data);
    },
    clear() {
      readline.clearScreenDown(stream);
    },
    getSize() {
      return {
        height: stream.rows,
        width: stream.columns,
      };
    },
  };

  render(element, target, callback);
}
