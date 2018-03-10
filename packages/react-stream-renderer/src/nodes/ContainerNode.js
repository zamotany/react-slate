/* @flow */

import type { IBaseAdapter } from '../adapters/BaseAdapter';
import ChunkNode from './ChunkNode';
import AbsoluteCanvas from '../utils/AbsoluteCanvas';
import getBufferDiff from '../utils/getBufferDiff';

export default class ContainerNode {
  children: ChunkNode[] = [];
  frontBuffer: string[] = [];
  backBuffer: string[] = [];
  adapter: IBaseAdapter;

  constructor(adapter: IBaseAdapter) {
    this.adapter = adapter;
    this.reset();

    if (!this.adapter.isReady) {
      throw new Error(
        this.adapter.notReadyErrorMessage || 'Adapter is not ready'
      );
    }
  }

  reset() {
    this.frontBuffer = [];
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

  draw() {
    this.backBuffer = this.frontBuffer;

    const canvas = new AbsoluteCanvas(this.adapter.getSize());
    this.frontBuffer = canvas.flatten(
      this.children.reduce(
        (acc, child) =>
          acc
            ? acc.merge(child.render(canvas), { isInline: false })
            : child.render(canvas),
        null
      ).canvas
    );

    if (
      this.backBuffer.length !== this.frontBuffer.length ||
      this.adapter.forceFullDraw
    ) {
      this.adapter.setCursorPosition(0, 0);
      this.adapter.clear();
      this.adapter.print(this.frontBuffer.join('\n'), { isFullPrint: true });
    } else {
      const damages = getBufferDiff(this.backBuffer, this.frontBuffer);
      damages.forEach(damage => {
        this.adapter.setCursorPosition(damage.x, damage.y);
        this.adapter.print(damage.content, { isFullPrint: false });
      });
    }
    // Reset cursor position, so when exiting command prompt will be at the bottom
    // not somewhere in the middle.
    this.adapter.setCursorPosition(0, this.adapter.getSize().height + 1);
  }
}
