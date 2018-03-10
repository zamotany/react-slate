/* @flow */
/* eslint-disable class-methods-use-this */

import BaseAdapter from './BaseAdapter';

type TestAdapterOptions = {
  height: number,
  width: number,
  onPrint?: (data: string, metadata: *) => void,
  onClear: () => void,
  onSetCursorPosition: (x: number, y: number) => void,
};

/**
 * Creates an adapter for testing. You can provide hooks to assert the rendered content.
 */
export default function makeTestAdapter({
  height = 40,
  width = 80,
  onPrint,
  onClear,
  onSetCursorPosition,
  ...rest
}: TestAdapterOptions) {
  if (rest.length) {
    throw new Error(
      `Detected unsupported properties ${Object.keys(rest).join(', ')}`
    );
  }

  class TestAdapter extends BaseAdapter {
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
  }

  return new TestAdapter();
}
