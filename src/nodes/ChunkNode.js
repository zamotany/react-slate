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
  memoizedText: string = '';

  constructor(container: ContainerNode, props: Props) {
    this.container = container;
    this.props = props;
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
    this.children.push(child);
  }

  removeChild(child: ChunkNode | TextNode) {
    this.invalidateParent();
    const index = this.children.indexOf(child);
    this.children.slice(index, 1);
  }

  render() {
    if (this.hasChanged) {
      // At least one of the children has changed.

      this.memoizedText = '';
      this.hasChanged = false;

      for (const child of this.children) {
        if (typeof child.render === 'function') {
          // Child is a ChunkNode, which means it's
          // a nested subtree. In this case, move responsibility
          // of writing to the container to this subtree and
          // memoize the rendered text.
          this.memoizedText += child.render();
        } else {
          // Child is a TextNode, so we can just add it
          // to the memoized test and write it to the container.
          this.memoizedText += child.props.children;
          this.container.write(child.props.children);
        }
      }
    } else {
      // If subtree hasn't changed, write memoized text
      // to container.
      this.container.write(this.memoizedText);
    }

    // Return memoized text (old or freshly created new one),
    // so that the parent can memoize it's subtree.
    return this.memoizedText;
  }
}
