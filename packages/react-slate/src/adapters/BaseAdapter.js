/* @flow */
/* eslint-disable class-methods-use-this */

export interface IBaseAdapter {
  /**
   * Tells if the adapter is ready. For example if there's a need to
   * trigger some side effects this flag can be used to distinct if they're
   * applied or not.
   */
  isReady: boolean;

  /**
   * Error message to show if the adapter is not ready yet.
   */
  notReadyErrorMessage: string;

  /**
   * Switches to rendering full content of the canvas instead of drawing
   * only damaged lines.
   */
  forceFullPrint: boolean;

  /**
   * Provides width and height of the canvas on which the content will be rendered.
   */
  getSize(): { width: number, height: number };

  /**
   * Prints rendered content. This is the place to flush content to the host environment.
   */
  print(data: string, metadata: { isFullPrint: boolean }): void;

  /**
   * Clear the content below the cursor position, which will be set before
   * using `setCursorPosition`.
   */
  clear(): void;

  /**
   * Moves cursor to specific coordinates.
   */
  setCursorPosition(x: number, y: number): void;
}

type BaseAdapterOptions = {
  forceFullPrint: boolean | null | void,
};

export default class BaseAdapter implements IBaseAdapter {
  isReady: boolean = false;
  notReadyErrorMessage: string;
  forceFullPrint: boolean;

  constructor({ forceFullPrint }: BaseAdapterOptions = {}) {
    this.forceFullPrint = Boolean(forceFullPrint);
  }

  getSize() {
    throw new Error('Adapter#getSize must be provided');
  }

  // eslint-disable-next-line no-unused-vars
  print(data: string, metadata: *) {
    throw new Error('Adapter#print must be provided');
  }

  clear() {}

  // eslint-disable-next-line no-unused-vars
  setCursorPosition(x: number, y: number) {}
}
