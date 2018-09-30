/* @flow */

import type { Drawable } from '../../types';

type Index = {
  layer: number,
  position: number,
};

export default class Hierarchy {
  layers: Array<Array<Drawable>> = [];
  minLayerIndex = 0;
  maxLayerIndex = 0;

  getIndex(zPosition: number = 0) {
    if (!this.layers[zPosition]) {
      this.layers[zPosition] = [];
      this.minLayerIndex = Math.min(this.minLayerIndex, zPosition);
      this.maxLayerIndex = Math.max(this.maxLayerIndex, zPosition);
    }
    return {
      layer: zPosition,
      position: this.layers[zPosition].length,
    };
  }

  insertElements(index: Index, elements: Drawable[]) {
    this.layers[index.layer].splice(index.position, 0, ...elements);
  }

  toArray() {
    const flatDrawableItems = [];
    for (
      let layerIndex = this.minLayerIndex;
      layerIndex <= this.maxLayerIndex;
      layerIndex++
    ) {
      const layer = this.layers[layerIndex];
      if (!layer) {
        continue; // eslint-disable-line no-continue
      }
      let offset = flatDrawableItems.length;
      for (let itemIndex = 0; itemIndex < layer.length; itemIndex++) {
        if (
          layer[itemIndex] &&
          ((layer[itemIndex].body && layer[itemIndex].body.value.length) ||
            layer[itemIndex].box)
        ) {
          flatDrawableItems[offset + itemIndex] = layer[itemIndex];
        } else {
          offset--;
        }
      }
    }
    return flatDrawableItems;
  }
}
