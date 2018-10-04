/* @flow */

import Root from '../nodes/Root';
import View from '../nodes/View';
import Text from '../nodes/Text';

type LayoutInfo = {
  width: number,
  height: number,
  x: number,
  y: number,
  z: number,
};

export default function getLayout(node: Root | View | Text): LayoutInfo {
  if (node instanceof Root) {
    node.calculateLayout();
    const boxModel = node.layout.boxModel;
    return {
      ...boxModel.getSize(),
      ...boxModel.getPosition(),
    };
  } else if (node instanceof View) {
    const root = new Root();
    root.appendChild(node);
    root.calculateLayout();
    root.removeChild(node);
    const boxModel = node.layout.boxModel;
    return {
      ...root.layout.boxModel.getSize(),
      ...boxModel.getPosition(),
    };
  } else if (node instanceof Text) {
    node.layout.reset();
    node.layout.init();
    const boxModel = node.layout.boxModel;
    return {
      ...boxModel.getSize(),
      ...boxModel.getPosition(),
    };
  }
  return {
    width: -1,
    height: -1,
    x: -1,
    y: -1,
    z: 0,
  };
}
