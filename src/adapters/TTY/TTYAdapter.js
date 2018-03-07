/* @flow */

import readline from 'readline';

import type { NodeStream } from '../../types';

import BaseAdapter from '../BaseAdapter';
import clearCallbacksOnExit from './effects/clearCallbacksOnExit';
import overwriteConsole from './effects/overwriteConsole';
import {
  hideCursor,
  clearOnExit,
  clearScrollbackOnExit,
  clearOnError,
} from './effects/terminal';

/**
 * Adapter for TTY streams like `process.{stdout,stderr}` with chainable API for
 * enhancing the experience with terminal apps.
 *
 * @example
 * const adapter = new TTYAdapter()
 *   .withCustomConsole({ outStream: true, errStream: true })
 *   .hideCursor()
 *   .makeEffects();
 */
export default class TTYAdapter extends BaseAdapter {
  notReadyErrorMessage: string = 'Adapter is not ready. Did you forgot to call `makeEffects`?';
  effects: Function[];
  stream: NodeStream;

  constructor({
    effects,
    stream,
  }: {
    effects: Function[],
    stream: NodeStream,
  }) {
    super();
    this.stream = stream;
    this.effects = effects;
  }

  /**
   * Redirect console output to specified streams or files.
   * This method won't have any effect unless `makeEffects` is called.
   */
  withCustomConsole(params: *) {
    return new TTYAdapter({
      stream: this.stream,
      effects: [...this.effects, () => overwriteConsole(params)],
    });
  }

  /**
   * Hides cursor.
   * This method won't have any effect unless `makeEffects` is called.
   */
  hideCursor() {
    return new TTYAdapter({
      stream: this.stream,
      effects: [...this.effects, hideCursor],
    });
  }

  /**
   * Clear screen or scrollback when process is about to exit.
   * This method won't have any effect unless `makeEffects` is called.
   */
  clearOnExit(shouldClearScrollback: boolean) {
    return new TTYAdapter({
      stream: this.stream,
      effects: [
        ...this.effects,
        adapter => {
          if (shouldClearScrollback) {
            clearScrollbackOnExit(adapter);
          } else {
            clearOnExit(adapter);
          }
        },
      ],
    });
  }

  /**
   * Clear screen when process is about to exit due to an error.
   * This method won't have any effect unless `makeEffects` is called.
   */
  clearOnError() {
    return new TTYAdapter({
      stream: this.stream,
      effects: [...this.effects, clearOnError],
    });
  }

  /**
   * Perform accumulated side effects.
   */
  makeEffects() {
    clearCallbacksOnExit();
    this.effects.forEach(effect => effect(this));
    this.isReady = true;
    return this;
  }

  getSize() {
    // $FlowFixMe
    return { width: this.stream.columns, height: this.stream.rows };
  }

  print(data: string) {
    this.stream.write(data);
  }
  clear() {
    readline.clearScreenDown((this.stream: any));
  }
  setCursorPosition(x: number, y: number) {
    readline.cursorTo((this.stream: any), x, y);
  }
}
