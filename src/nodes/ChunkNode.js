/* @flow */

/* eslint-disable no-param-reassign */

import type { Props, Margins } from '../types';
import TextNode from './TextNode';
import ContainerNode from './ContainerNode';
import {
  appendTextNode,
  layAbsoluteTextNode,
  appendRenderResults,
  addMarginsAndNormalize,
} from '../utils/layoutUtils';

type ChunkNodePros = Props &
  Margins & {
    children: any,
  };

export default class ChunkNode {
  static componentName = 'CHUNK_NODE';

  props: ChunkNodePros;
  container: ContainerNode;
  parent: ChunkNode | ContainerNode;
  children = [];
  // previousPosition: Position;
  // hasChildrenChanged: boolean = true;
  // hasParentChanged: boolean = false;
  // memoizedElements: Element[] = [];

  constructor(container: ContainerNode, props: ChunkNodePros) {
    this.container = container;
    this.props = props;
  }

  // hasPositionChanged() {
  //   return (
  //     this.props.x !== this.previousPosition.x ||
  //     this.props.y !== this.previousPosition.y
  //   );
  // }

  invalidateParent() {
    this;
    // // Invalidate the whole path from this node up to the top.
    // this.hasChildrenChanged = true;
    // this.parent.invalidateParent();
  }

  prepareChild(child: ChunkNode | TextNode) {
    child.parent = this;
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

  render(canvas: string[]) {
    const localCanvas = [];
    for (let childIndex = 0; childIndex < this.children.length; childIndex++) {
      const child = this.children[childIndex];

      if (child instanceof ChunkNode) {
        appendRenderResults(localCanvas, child.render(canvas));
      } else if (this.props.absolute) {
        layAbsoluteTextNode(canvas, child);
      } else {
        appendTextNode(localCanvas, child);
      }
    }

    addMarginsAndNormalize(localCanvas, this.props, canvas[0].length);
    return localCanvas;
  }
}
