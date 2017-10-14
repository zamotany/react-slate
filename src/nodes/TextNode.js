// @flow

import type { Props } from '../types';
import ContainerNode from './ContainerNode';

/**
 * Simple node containing text as props.children.
 */
export default class TextNode {
  static componentName = 'TEXT_NODE';

  container: ContainerNode;
  props: Props;

  constructor(container: ContainerNode, props: Props) {
    this.container = container;
    this.props = props;
  }
}
