/* @flow */

/* eslint-disable no-param-reassign */

import type { Props, LayoutProps, AbsoluteProps, CustomRender } from '../types';
import TextNode from './TextNode';
import ContainerNode from './ContainerNode';
import AbsoluteCanvas from '../utils/AbsoluteCanvas';
import RelativeCanvas from '../utils/RelativeCanvas';

type ChunkNodePros = Props &
  LayoutProps &
  AbsoluteProps & {
    children: any,
    stylizeArgs: any,
    render?: CustomRender,
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

  render(absoluteCanvas: AbsoluteCanvas) {
    const relativeCanvas = new RelativeCanvas({
      width: this.props.width,
      height: this.props.height,
      style: this.props.stylizeArgs,
    });

    if (typeof this.props.render === 'function') {
      return this.props.render(this, relativeCanvas, absoluteCanvas);
    }

    for (let childIndex = 0; childIndex < this.children.length; childIndex++) {
      const child = this.children[childIndex];

      if (child instanceof ChunkNode) {
        relativeCanvas.merge(child.render(absoluteCanvas), {
          isInline: Boolean(child.props.inline),
        });
      } else {
        relativeCanvas.appendTextNode(child);
      }
    } else {
      // If subtree hasn't changed, write memoized text
      // to container.
      this.container.write(this.memoizedText);
    }

    relativeCanvas.addPaddings({
      top: this.props.paddingTop,
      bottom: this.props.paddingBottom,
      left: this.props.paddingLeft,
      right: this.props.paddingRight,
    });

    relativeCanvas.normalize();
    relativeCanvas.stylize();

    relativeCanvas.addMargins({
      top: this.props.marginTop,
      bottom: this.props.marginBottom,
      left: this.props.marginLeft,
      right: this.props.marginRight,
    });

    if (this.props.fixed) {
      absoluteCanvas.appendTree(relativeCanvas.canvas, {
        x: this.props.x,
        y: this.props.y,
        z: this.props.z,
      });
      relativeCanvas.clear();
    }

    return relativeCanvas;
  }
}
