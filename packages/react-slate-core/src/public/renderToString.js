/* @flow */

import render from './render';

type Options = {
  height?: number,
  width?: number,
};

const NOOP = () => {};

export default function renderToString(
  element: any,
  { height = -1, width = -1 }: Options = {},
  callback: ?() => void = null
) {
  let snapshot = '';
  let hasScheduledNullRender = false;

  const target = {
    forceFullPrint: true,
    setCursorPosition: NOOP,
    clear: NOOP,
    measure: NOOP,
    print(data: string) {
      if (!hasScheduledNullRender) {
        snapshot += data;
        hasScheduledNullRender = true;
        render(null, target, callback);
      }
    },
    getSize() {
      return {
        height,
        width,
      };
    },
    raiseError(error: Error) {
      throw error;
    },
  };

  render(element, target, callback);
  return snapshot;
}
