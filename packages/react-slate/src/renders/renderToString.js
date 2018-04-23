/* @flow */

import render from './render';
import { clearCallbacks } from '../utils/clearCallbacksOnExit';

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
      // Need to clear callbacks (setTimeout/setInterval)
      // so the queue is free from task thus stopping React app
      // from running.
      clearCallbacks();
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
