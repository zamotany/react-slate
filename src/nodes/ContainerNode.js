/* @flow */

import readline from 'readline';
import enhanceConsole from '../effects/enhanceConsole';
import {
  hideCursor,
  clearOnExit,
  clearScrollBackOnExit,
} from '../effects/terminal';
import ChunkNode from './ChunkNode';
import { mergeCanvas, getCanvas } from '../utils/layout';

type Options = {
  debug: boolean,
  hideCursor: boolean,
  clearScreenOnExit: boolean,
  clearScrollbackOnExit: boolean,
  exitOnWarning: boolean,
  exitOnError: boolean,
};

export default class ContainerNode {
  children: ChunkNode[] = [];
  frontBuffer: string = '';
  backBuffer: string = '';
  stream: any = null;
  options: Options;
  canvasSize: { width: number, height: number };

  constructor(stream: any, opts?: Options) {
    this.options = {
      debug: false,
      exitOnError: false,
      exitOnWarning: false,
      hideCursor: false,
      clearScreenOnExit: false,
      clearScrollbackOnExit: false,
      ...(opts || {}),
    };
    this.stream = stream;

    // @TODO: handle resize
    this.canvasSize = {
      width: this.stream.columns,
      height: this.stream.rows - 1,
    };

    enhanceConsole({
      exitOnError: this.options.exitOnError,
      exitOnWarning: this.options.exitOnWarning,
    });

    if (this.options.hideCursor) {
      hideCursor(this.stream);
    }

    if (this.options.clearScreenOnExit) {
      clearOnExit(this.stream);
    }

    if (this.options.clearScrollbackOnExit) {
      clearScrollBackOnExit(this.stream);
    }
  }

  invalidateParent = () => {
    /* NOOP */
  };

  appendChild(child: ChunkNode) {
    // eslint-disable-next-line no-param-reassign
    child.parent = this;
    this.children.push(child);
  }

  prependChild(child: ChunkNode, childBefore: ChunkNode) {
    // eslint-disable-next-line no-param-reassign
    child.parent = this;
    const index = this.children.indexOf(childBefore);
    this.children.splice(index, 0, child);
  }

  removeChild(child: ChunkNode) {
    const index = this.children.indexOf(child);
    this.children.splice(index, 1);
  }

  flush() {
    // @TODO: this buffer/optimization/slitting logic needs to be refactored
    // @TODO: draw damage to screen only instead of everything
    const canvas = getCanvas(this.canvasSize);
    this.frontBuffer = mergeCanvas(
      canvas,
      this.children.reduce(
        (acc, child) => [...acc, ...child.render(canvas)],
        []
      )
    ).join('\n');

    readline.cursorTo(this.stream, 0, 0);
    readline.clearScreenDown(this.stream);
    this.stream.write(this.frontBuffer);
  }
}
