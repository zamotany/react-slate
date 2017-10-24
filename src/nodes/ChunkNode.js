/* @flow */

import type { Props } from '../types';
import TextNode from './TextNode';
import ContainerNode from './ContainerNode';

export default class ChunkNode {
  static componentName = 'CHUNK_NODE';

  children = [];
  props: Props;
  container: ContainerNode;
  parent: ChunkNode | ContainerNode;
  hasChanged: boolean = true;
  memoizedText: string;

  constructor(container: ContainerNode, props: Props) {
    this.container = container;
    this.props = props;
  }

  invalidateParent() {
    this.hasChanged = true;
    this.parent.invalidateParent();
  }

  appendChild(child: ChunkNode | TextNode, isInitial?: boolean = false) {
    if (!isInitial) {
      this.invalidateParent();
    }

    // eslint-disable-next-line no-param-reassign
    child.parent = this;
    this.children.push(child);
  }

  removeChild(child: ChunkNode | TextNode) {
    this.invalidateParent();
    const index = this.children.indexOf(child);
    this.children.slice(index, 1);
  }

  render() {
    if (this.hasChanged) {
      this.memoizedText = '';
      this.hasChanged = false;

      for (const child of this.children) {
        if (typeof child.render === 'function') {
          this.memoizedText += child.render();
        } else {
          this.memoizedText += child.props.children;
          this.container.write(child.props.children);
        }
      }
    } else {
      this.container.write(this.memoizedText);
    }

    return this.memoizedText;
  }
}
