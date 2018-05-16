/* @flow */

import type { Props } from '../types';
import ContainerNode from './ContainerNode';
import ChunkNode from './ChunkNode';

/**
 * Simple node containing text as props.children.
 */
export default class TextNode {
  static componentName = 'TEXT_NODE';

  container: ContainerNode;
  props: Props;
  parent: ChunkNode;

  constructor(container: ContainerNode, props: Props) {
    this.container = container;
    this.props = props;
  }

  replaceChildren(children: string) {
    this.props.children = children;
  }
}
