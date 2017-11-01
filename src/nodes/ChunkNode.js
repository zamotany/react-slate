/* @flow */

/* eslint-disable no-param-reassign */

import type { Props, Element, Position } from '../types';
import TextNode from './TextNode';
import ContainerNode from './ContainerNode';
import {
  appendTextNode,
  appendRenderResults,
  indentLeftBy,
  indentRightTo,
  indentTopBy,
  indentBottomTo,
} from '../utils/layoutUtils';

type ChunkNodePros = Props & {
  x: number,
  y: number,
  children: any,
};

export default class ChunkNode {
  static componentName = 'CHUNK_NODE';

  props: ChunkNodePros;
  container: ContainerNode;
  parent: ChunkNode | ContainerNode;
  children = [];
  parentsOffset: Position = { x: 0, y: 0 };
  // previousPosition: Position;
  // hasChildrenChanged: boolean = true;
  // hasParentChanged: boolean = false;
  // memoizedElements: Element[] = [];

  constructor(container: ContainerNode, props: ChunkNodePros) {
    this.container = container;
    this.props = props;
    this.previousPosition = { x: props.x, y: props.y };
  }

  // hasPositionChanged() {
  //   return (
  //     this.props.x !== this.previousPosition.x ||
  //     this.props.y !== this.previousPosition.y
  //   );
  // }

  setParentsOffset({ x, y }: Position) {
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
    // // Invalidate the whole path from this node up to the top.
    // this.hasChildrenChanged = true;
    // this.parent.invalidateParent();
  }

  prepareChild(child: ChunkNode | TextNode) {
    child.parent = this;
    if (child instanceof ChunkNode) {
      child.setParentsOffset(this.getChildOffset());
    }
  }

  appendChild(child: ChunkNode | TextNode) {
    this.invalidateParent();
    this.appendInitialChild(child);
  }

  appendInitialChild(child: ChunkNode | TextNode) {
    this.prepareChild(child);
    this.children.push(child);
  }

  prependChild(child: ChunkNode | TextNode, childBefore: ChunkNode | TextNode) {
    this.invalidateParent();
    this.prepareChild(child);
    const index = this.children.indexOf(childBefore);
    this.children.splice(index, 0, child);
  }

  removeChild(child: ChunkNode | TextNode) {
    this.invalidateParent();
    const index = this.children.indexOf(child);
    this.children.splice(index, 1);
  }

  render() {
    const outputLines = [];

    for (let childIndex = 0; childIndex < this.children.length; childIndex++) {
      const child = this.children[childIndex];

      if (child instanceof ChunkNode) {
        appendRenderResults(outputLines, child.render());
      } else {
        appendTextNode(outputLines, child);
      }
    }

    const topIndentation = this.props.y;
    const bottomIndentation = this.props.h + this.props.y;
    const leftIndentation = this.props.x;
    const rightIndentation = this.props.w;
    return indentRightTo(
      indentLeftBy(
        indentBottomTo(
          indentTopBy(outputLines, topIndentation),
          bottomIndentation
        ),
        leftIndentation
      ),
      rightIndentation
    );
  }

  renderOld() {
    // When parent changes (eg. positions is updated) it might affect children.
    const hasParentChanged = this.hasParentChanged || this.hasPositionChanged();
    if (
      this.hasChildrenChanged ||
      !this.memoizedElements.length ||
      hasParentChanged
    ) {
      // At least one of the children has changed or position of the parent
      // has changed.

      this.memoizedElements = [];
      this.hasChildrenChanged = false;

      for (const child of this.children) {
        if (child instanceof ChunkNode) {
          // Child is a ChunkNode, which means it's a nested subtree. In this case, move
          // responsibility of appending elements to the container to this subtree and
          // memoize the returned elements.

          // Parents offset need to be corrected, otherwise this subtree would have
          // the old offset from previous render.
          child.hasParentChanged = hasParentChanged;
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
          };
          this.memoizedElements.push(element);
          this.container.appendElement(element);
        }
      }
    } else {
      this.memoizedElements.forEach(element => {
        this.container.appendElement(element);
      });
    }

    // Return memoized elements (old or freshly created new one), so that the parent can memoize
    // it's subtree.
    return this.memoizedElements;
  }
}
