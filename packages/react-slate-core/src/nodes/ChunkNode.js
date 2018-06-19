/* @flow */

/* eslint-disable no-param-reassign */

import type { Props, LayoutProps, AbsoluteProps, CustomRender } from '../types';
import TextNode from './TextNode';
import ContainerNode from './ContainerNode';
import AbsoluteCanvas from '../host/AbsoluteCanvas';
import RelativeCanvas from '../host/RelativeCanvas';

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

  constructor(container: ContainerNode, props: ChunkNodePros) {
    this.container = container;
    this.props = props;
  }

  prepareChild(child: ChunkNode | TextNode) {
    child.parent = this;
  }

  appendChild(child: ChunkNode | TextNode) {
    this.appendInitialChild(child);
  }

  appendInitialChild(child: ChunkNode | TextNode) {
    this.prepareChild(child);
    this.children.push(child);
  }

  prependChild(child: ChunkNode | TextNode, childBefore: ChunkNode | TextNode) {
    this.prepareChild(child);
    const index = this.children.indexOf(childBefore);
    this.children.splice(index, 0, child);
  }

  removeChild(child: ChunkNode | TextNode) {
    const index = this.children.indexOf(child);
    this.children.splice(index, 1);
  }

  nativeRender(relativeCanvas: RelativeCanvas, absoluteCanvas: AbsoluteCanvas) {
    for (let childIndex = 0; childIndex < this.children.length; childIndex++) {
      const child = this.children[childIndex];

      if (child instanceof ChunkNode) {
        relativeCanvas.merge(child.render(absoluteCanvas), {
          isInline: Boolean(child.props.inline),
        });
      } else {
        relativeCanvas.appendTextNode(child);
      }
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

  render(absoluteCanvas: AbsoluteCanvas) {
    const relativeCanvas = new RelativeCanvas({
      width: this.props.width,
      height: this.props.height,
      style: this.props.stylizeArgs,
    });

    if (typeof this.props.internal_do_not_use_render === 'function') {
      return this.props.internal_do_not_use_render(
        this,
        relativeCanvas,
        absoluteCanvas
      );
    }

    return this.nativeRender(relativeCanvas, absoluteCanvas);
  }
}
