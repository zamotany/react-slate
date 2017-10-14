/* @flow */

import ChunkNode from '../nodes/ChunkNode';
import TextNode from '../nodes/TextNode';
import ContainerNode from '../nodes/ContainerNode';

export default function createElement(
  type: string | Function,
  props: any,
  root: ContainerNode
) {
  if (typeof type === 'function') {
    return type;
  }

  const COMPONENTS = {
    [ChunkNode.componentName]: () => new ChunkNode(root, props),
    [TextNode.componentName]: () => new TextNode(root, props),
    default: () => undefined,
  };

  return COMPONENTS[type]() || COMPONENTS.default;
}
