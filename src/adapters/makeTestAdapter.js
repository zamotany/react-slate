/* @flow */
/* eslint-disable class-methods-use-this */

import BaseAdapter from './BaseAdapter';

export default function makeTestAdapter({
  height,
  width,
  onPrint,
  onClear,
  onSetCursorPosition,
  ...rest
}: {
  height: number,
  width: number,
  onPrint?: (data: string, metadata: *) => void,
  onClear: () => void,
  onSetCursorPosition: (x: number, y: number) => void,
}) {
  if (rest.length) {
    throw new Error(
      `Detected unsupported properties ${Object.keys(rest).join(', ')}`
    );
  }

  return new class extends BaseAdapter {
    constructor() {
      super({ forceFullPrint: true });
      this.isReady = true;
    }

    getSize() {
      return {
        height,
        width,
      };
    }

    print(...args: *) {
      if (onPrint) {
        onPrint(...args);
      }
    }

    clear() {
      if (onClear) {
        onClear();
      }
    }

    setCursorPosition(x: number, y: number) {
      if (onSetCursorPosition) {
        onSetCursorPosition(x, y);
      }
    }
  }();
}
