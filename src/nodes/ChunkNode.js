/* @flow */

import type { Props, Element } from '../types';
import TextNode from './TextNode';
import ContainerNode from './ContainerNode';

type ChunkNodePros = Props & {
  x: number,
  y: number,
  relative: boolean,
  children: any,
};

export default class ChunkNode {
  static componentName = 'CHUNK_NODE';

  props: ChunkNodePros;
  container: ContainerNode;
  parent: ChunkNode | ContainerNode;
  children = [];
  parentsOffset: { x: number, y: number } = { x: 0, y: 0 };
  hasChanged: boolean = true;
  memoizedElements: Element[] = [];

  constructor(container: ContainerNode, props: ChunkNodePros) {
    this.container = container;
    this.props = props;
  }

  setParentsOffset({ x, y }: { x: number, y: number }) {
    this.parentsOffset.x = x;
    this.parentsOffset.y = y;
  }

  getChildOffset() {
    return {
      x: this.props.x + this.parentsOffset.x,
      y: this.props.y + this.parentsOffset.y,
    };
  }

  invalidateParent() {
    // Invalidate the whole path from this node up to the top.
    this.hasChanged = true;
    this.parent.invalidateParent();
  }

  appendChild(child: ChunkNode | TextNode) {
    this.invalidateParent();
    // eslint-disable-next-line no-param-reassign
    this.appendInitialChild(child);
  }

  appendInitialChild(child: ChunkNode | TextNode) {
    // eslint-disable-next-line no-param-reassign
    child.parent = this;
    if (child instanceof ChunkNode) {
      child.setParentsOffset(this.getChildOffset());
    }
    this.children.push(child);
  }

  removeChild(child: ChunkNode | TextNode) {
    this.invalidateParent();
    const index = this.children.indexOf(child);
    this.children.slice(index, 1);
  }

  render() {
    if (this.hasChanged || !this.memoizedElements.length) {
      // At least one of the children has changed.

      this.memoizedElements = [];
      this.hasChanged = false;

      for (const child of this.children) {
        if (child instanceof ChunkNode) {
          // Child is a ChunkNode, which means it's a nested subtree. In this case, move
          // responsibility of appending elements to the container to this subtree and
          // memoize the returned elements.

          // Parents offset need to be corrected, otherwise this subtree would have
          // the old offset from previous render.
          child.setParentsOffset(this.getChildOffset());
          this.memoizedElements.push(...child.render());
        } else {
          // Child is a TextNode, so we can just create element object and append it to
          // memoized elements and to the container.
          const parentsOffset = this.getChildOffset();
          const element = {
            x: 0,
            y: 0,
            parentsOffsetX: parentsOffset.x,
            parentsOffsetY: parentsOffset.y,
            text: child.props.children,
            // If ChunkNode (parent) has only a single child, this element isRelative
            // property is determined from parent node, otherwise we assume it's relative.
            isRelative:
              this.children.length > 1 || Boolean(this.props.relative),
          };
          this.memoizedElements.push(element);
          this.container.appendElement(element);
        }
      }
    } else {
      // If subtree hasn't changed, append memoized elements to the container.
      this.memoizedElements.forEach(element => {
        // Fix parents offset, since it might have changed.
        const parentsOffset = this.getChildOffset();
        this.container.appendElement({
          ...element,
          parentsOffsetX: parentsOffset.x,
          parentsOffsetY: parentsOffset.y,
        });
      });
    }

    // Return memoized elements (old or freshly created new one), so that the parent can memoize
    // it's subtree.
    return this.memoizedElements;
  }
}
