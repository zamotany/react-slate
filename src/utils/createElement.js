/* @flow */

import StreamContainer from '../components/StreamContainer';
// import StreamRoot from '../components/StreamRoot';
// import Text from '../components/Text';
import Node from '../components/Node';

export default function createElement(
  type: string | Function,
  props: any,
  root: any
) {
  if (typeof type === 'function') {
    return type;
  }

  const COMPONENTS = {
    [Node.componentName]: () => new Node(root, props),
    [StreamContainer.componentName]: () => new StreamContainer(),
    // [StreamRoot.componentName]: () => new StreamRoot(root, props),
    // [Text.componentName]: () => new Text(root, props),
    default: () => undefined,
  };

  return COMPONENTS[type]() || COMPONENTS.default;
}
