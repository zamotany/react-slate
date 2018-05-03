/* @flow */

import readline from 'readline';
import type { Target } from '../types';
import render from './render';

type Options = {
  width?: number,
  height?: number,
};

const streamMap = new Map();

export function unmountFromTerminal(stream: tty$WriteStream | stream$Writable) {
  if (streamMap.has(stream)) {
    render(null, ((streamMap.get(stream): any): Target));
    return true;
  }
  return false;
}

export default function renderToTerminal(
  element: any,
  stream: tty$WriteStream | stream$Writable,
  { height = 20, width = 40 }: Options = {},
  callback: ?Function = null
) {
  if (streamMap.has(stream)) {
    return render(element, ((streamMap.get(stream): any): Target), callback);
  }
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

  streamMap.set(stream, target);
  return render(element, target, callback);
}
