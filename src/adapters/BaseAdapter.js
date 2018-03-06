/* @flow */
/* eslint-disable class-methods-use-this */

export interface IBaseAdapter {
  isReady: boolean;
  notReadyErrorMessage: string;
  forceFullPrint: boolean;
  getSize(): { width: number, height: number };
  print(data: string, metadata: { isFullPrint: boolean }): void;
  clear(): void;
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
