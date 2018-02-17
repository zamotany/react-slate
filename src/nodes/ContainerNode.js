/* @flow */

import readline from 'readline';
import ChunkNode from './ChunkNode';
import AbsoluteCanvas from '../utils/AbsoluteCanvas';
import getBufferDiff from '../utils/getBufferDiff';

export default class ContainerNode {
  children: ChunkNode[] = [];
  frontBuffer: string[] = [];
  backBuffer: string[] = [];
  stream: any = null;
  canvasSize: { width: number, height: number };

  constructor(stream: any) {
    this.stream = stream;

    // @TODO: handle resize
    this.canvasSize = {
      width: this.stream.columns,
      height: this.stream.rows - 1,
    };
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
    this.backBuffer = this.frontBuffer;

    const canvas = new AbsoluteCanvas(this.canvasSize);
    this.frontBuffer = canvas.flatten(
      this.children.reduce(
        (acc, child) =>
          acc
            ? acc.merge(child.render(canvas), { isInline: false })
            : child.render(canvas),
        null
      ).canvas
    );

    if (this.backBuffer.length !== this.frontBuffer.length) {
      readline.cursorTo(this.stream, 0, 0);
      readline.clearScreenDown(this.stream);
      this.stream.write(this.frontBuffer.join('\n'));
    } else {
      const damages = getBufferDiff(this.backBuffer, this.frontBuffer);
      damages.forEach(damage => {
        readline.cursorTo(this.stream, damage.x, damage.y);
        this.stream.write(damage.content);
      });
    }
    // Reset cursor position, so when exiting command prompt will be at the bottom
    // not somewhere in the middle.
    readline.cursorTo(this.stream, 0, this.canvasSize.height + 1);
  }
}
