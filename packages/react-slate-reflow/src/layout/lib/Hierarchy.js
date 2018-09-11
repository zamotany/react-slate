/* @flow */

import type { Drawable } from '../../types';

type Layer = Drawable[];
type Index = {
  layer: number,
  position: number,
};

export default class Hierarchy {
  layers: { [key: string]: Layer } = {};

  getIndex(zPosition: number = 0) {
    const key = zPosition.toString();
    if (!this.layers[key]) {
      this.layers[key] = [];
    }
    return {
      layer: zPosition,
      position: this.layers[key].length,
    };
  }

  insertElements(index: Index, elements: Drawable[]) {
    // debugger // eslint-disable-line
    const key = index.layer.toString();
    this.layers[key].splice(index.position, 0, ...elements);
  }

  toArray() {
    // debugger // eslint-disable-line
    return Object.keys(this.layers)
      .sort((a, b) => parseInt(a, 10) - parseInt(b, 10))
      .reduce((acc, layerKey) => [...acc, ...this.layers[layerKey]], [])
      .filter(
        // Remove body elements with empty value.
        (element: Drawable) =>
          element && element.body ? element.body.value.length : Boolean(element)
      );
  }
}
