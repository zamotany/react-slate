/* @flow */

import render from './render';

type Options = {
  height?: number,
  width?: number,
};

const NOOP = () => {};

export default function renderToString(
  element: any,
  { height = 20, width = 40 }: Options = {},
  callback: ?Function = null
) {
  let snapshot = '';
  const target = {
    forceFullPrint: true,
    setCursorPosition: NOOP,
    clear: NOOP,
    print(data: string) {
      snapshot += data;
      render(null, target, callback);
    },
    getSize() {
      return {
        height,
        width,
      };
    },
  };

  render(element, target, callback);
  return snapshot;
}
