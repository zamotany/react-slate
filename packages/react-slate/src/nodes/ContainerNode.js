/* @flow */

import type { Target } from '../types';

import ChunkNode from './ChunkNode';
import AbsoluteCanvas from '../host/AbsoluteCanvas';
import getBufferDiff from '../utils/getBufferDiff';

export default class ContainerNode {
  children: ChunkNode[] = [];
  frontBuffer: string[] = [];
  backBuffer: string[] = [];
  target: Target;

  constructor(target: Target) {
    this.target = target;
    this.reset();
  }

  reset() {
    this.frontBuffer = [];
  }

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

    const canvas = new AbsoluteCanvas(this.target.getSize());
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
      this.target.forceFullDraw
    ) {
      this.target.setCursorPosition(0, 0);
      this.target.clear();
      this.target.print(this.frontBuffer.join('\n'));
    } else {
      const damages = getBufferDiff(this.backBuffer, this.frontBuffer);
      damages.forEach(damage => {
        this.target.setCursorPosition(damage.x, damage.y);
        this.target.print(damage.content);
      });
    }
    // Reset cursor position, so when exiting command prompt will be at the bottom
    // not somewhere in the middle.
    this.target.setCursorPosition(0, this.target.getSize().height + 1);
  }
}
