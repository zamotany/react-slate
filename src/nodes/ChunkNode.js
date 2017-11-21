/* @flow */

/* eslint-disable no-param-reassign */

import type { Props, LayoutProps, AbsoluteProps, CustomRender } from '../types';
import TextNode from './TextNode';
import ContainerNode from './ContainerNode';
import Canvas from '../utils/Canvas';
import LocalCanvas from '../utils/LocalCanvas';

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

  render(canvas: Canvas) {
    const localCanvas = new LocalCanvas({
      width: this.props.width,
      height: this.props.height,
      style: this.props.stylizeArgs,
    });

    if (typeof this.props.render === 'function') {
      return this.props.render(this, localCanvas, canvas);
    }

    for (let childIndex = 0; childIndex < this.children.length; childIndex++) {
      const child = this.children[childIndex];

      if (child instanceof ChunkNode) {
        localCanvas.merge(child.render(canvas), {
          isInline: Boolean(child.props.inline),
        });
      } else {
        localCanvas.appendTextNode(child);
      }
    }

    localCanvas.addPaddings({
      top: this.props.paddingTop,
      bottom: this.props.paddingBottom,
      left: this.props.paddingLeft,
      right: this.props.paddingRight,
    });

    localCanvas.normalize();
    localCanvas.stylize();

    localCanvas.addMargins({
      top: this.props.marginTop,
      bottom: this.props.marginBottom,
      left: this.props.marginLeft,
      right: this.props.marginRight,
    });

    if (this.props.fixed) {
      canvas.appendTree(localCanvas.canvas, {
        x: this.props.x,
        y: this.props.y,
        z: this.props.z,
      });
      localCanvas.clear();
    }

    return localCanvas;
  }
}
