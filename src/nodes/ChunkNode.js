/* @flow */

import type { Props } from '../types';
import TextNode from './TextNode';
import ContainerNode from './ContainerNode';

export default class ChunkNode {
  static componentName = 'CHUNK_NODE';

  children = [];
  props: Props;
  container: ContainerNode;

  constructor(container: ContainerNode, props: Props) {
    this.container = container;
    this.props = props;
  }

  appendChild(child: ChunkNode | TextNode) {
    this.children.push(child);
  }

  removeChild(child: ChunkNode | TextNode) {
    const index = this.children.indexOf(child);
    this.children.slice(index, 1);
  }

  render() {
    for (const child of this.children) {
      if (typeof child.render === 'function') {
        child.render();
      } else {
        this.container.write(child.props.children);
      }
    }
  }
}
