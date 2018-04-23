/* @flow */

import readline from 'readline';

import render from './render';

type Options = {
  width?: number,
  height?: number,
};

export default function renderToTerminal(
  element: any,
  stream: tty$WriteStream | stream$Writable,
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
      if (stream.isTTY) {
        const { rows, columns } = ((stream: any): tty$WriteStream);
        return {
          height: rows,
          width: columns,
        };
      }

      return {
        height,
        width,
      };
    },
  };

  render(element, target, callback);
}
