/* @flow */

import readline from 'readline';
import type { Target } from '../types';
import render from './render';

type Options = {
  width?: number,
  height?: number,
};

const streamMap = new WeakMap();

export function makeTerminalTarget(
  stream: tty$WriteStream | stream$Writable,
  { height = 20, width = 40 }: Options = {}
): Target {
  if (streamMap.has(stream)) {
    return (streamMap.get(stream): any);
  }
  const target = {
    forceFullPrint: false,
    measure: () => {}, // NOOP
    setCursorPosition(x: number, y: number) {
      readline.cursorTo(stream, x, y);
    },
    print(data: string) {
      stream.write(data);
    },
    clear(fullScreen) {
      if (fullScreen) {
        readline.clearScreenDown(stream);
      } else {
        readline.clearLine(stream, 1);
      }
    },
    getSize() {
      if (stream.isTTY) {
        const { rows, columns } = (stream: any);
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
    raiseError(error: Error) {
      stream.write(`${error.toString()}\n`);
      console.error(error);
      process.exit(1);
    },
  };

  streamMap.set(stream, target);
  return target;
}

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
  callback: ?() => void = null
) {
  return render(
    element,
    makeTerminalTarget(stream, { width, height }),
    callback
  );
}
