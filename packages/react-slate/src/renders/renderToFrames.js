/* @flow */

import render from './render';
import { clearCallbacks } from '../utils/clearCallbacksOnExit';

type Options = {
  count?: number,
  height?: number,
  width?: number,
};

const NOOP = () => {};

export default function renderToFrames(
  element: any,
  { count = 1, height = 20, width = 40 }: Options = {},
  callback: ?Function = null
): Promise<string[]> {
  return new Promise(resolve => {
    const frames = [];
    const target = {
      forceFullPrint: true,
      setCursorPosition: NOOP,
      clear: NOOP,
      print(data: string) {
        frames.push(data);
        if (frames.length >= count) {
          // Need to clear callbacks (setTimeout/setInterval)
          // so the queue is free from task thus stopping React app
          // from running.
          clearCallbacks();
          resolve(frames);
        }
      },
      getSize() {
        return {
          height,
          width,
        };
      },
    };

    render(element, target, callback);
  });
}
