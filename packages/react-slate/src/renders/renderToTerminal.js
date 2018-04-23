/* @flow */

import readline from 'readline';

import render from './render';

type Options = {
  width?: number,
  height?: number,
};

export default function renderToTerminal(
  element: any,
  stream: tty$WriteStream | stream$WritableStream,
  { height = 20, width = 40 }: Options = {},
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
        height: stream.isTTY ? stream.rows : height,
        width: stream.isTTY ? stream.columns : width,
      };
    },
  };

  render(element, target, callback);
}
