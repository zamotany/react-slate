/* @flow */
/* eslint-disable no-continue */

import stripAnsi from 'strip-ansi';
import shallowEqual from 'shallowequal';
import applyStyle from './applyStyle';
import type { Drawable, StyleProps, Size } from '../types';

type Cell = {
  char: string,
  style: StyleProps,
};

export default class RenderingPipeline {
  drawableItems: Drawable[];
  canvas: Array<Array<Cell>> = [];
  memoizedRows: string[] = [];
  canvasHeight = 0;
  canvasWidth = 0;
  maxHeight = Number.MAX_SAFE_INTEGER;
  maxWidth = Number.MAX_SAFE_INTEGER;

  resize(width: number, height: number) {
    if (width < this.canvasWidth && height < this.canvasHeight) {
      return;
    }

    const safeHeight = Math.min(
      Math.max(height, this.canvasHeight),
      this.maxHeight
    );
    const safeWidth = Math.min(
      Math.max(width, this.canvasWidth),
      this.maxWidth
    );

    for (let y = 0; y < safeHeight; y++) {
      if (!this.canvas[y]) {
        this.canvas[y] = [];
      }
      for (let x = 0; x < safeWidth; x++) {
        if (!this.canvas[y][x]) {
          this.canvas[y][x] = {
            char: '',
            style: {},
          };
        }
      }
    }

    this.canvasHeight = safeHeight;
    this.canvasWidth = safeWidth;
  }

  rasterize() {
    for (
      let itemIndex = 0;
      itemIndex < this.drawableItems.length;
      itemIndex++
    ) {
      const item = this.drawableItems[itemIndex];
      if (!item.body && !item.box) {
        continue;
      }

      const text = item.body ? stripAnsi(item.body.value) : '';
      // $FlowFixMe
      const height = item.body ? 1 : item.box.height;
      // $FlowFixMe
      const width = item.body ? text.length : item.box.width;
      // $FlowFixMe
      const x = (item.box || item.body).x;
      // $FlowFixMe
      const y = (item.box || item.body).y;
      // $FlowFixMe
      const style = (item.box || item.body).style || {};

      this.resize(x + width, y + height);

      let textIndex = 0;
      for (
        let yCellIndex = y;
        yCellIndex < y + height && yCellIndex < this.maxHeight;
        yCellIndex++
      ) {
        if (yCellIndex < 0) {
          continue;
        }

        for (
          let xCellIndex = x;
          xCellIndex < x + width && xCellIndex < this.maxWidth;
          xCellIndex++
        ) {
          if (xCellIndex < 0) {
            if (text) {
              textIndex++;
            }
            continue;
          }

          if (text) {
            this.canvas[yCellIndex][xCellIndex].char = text[textIndex];
            textIndex++;
          }
          // $FlowFixMe
          Object.assign(this.canvas[yCellIndex][xCellIndex].style, style);
        }
      }
    }
  }

  getAnsiRows() {
    const rows = [];
    for (let y = 0; y < this.canvasHeight; y++) {
      let line = '';
      let groupText = '';
      let groupStyle = {};
      for (let x = 0; x < this.canvasWidth; x++) {
        if (shallowEqual(groupStyle, this.canvas[y][x].style)) {
          groupText += this.canvas[y][x].char || ' ';
        } else {
          line += applyStyle(groupStyle, groupText);
          groupStyle = this.canvas[y][x].style;
          groupText = this.canvas[y][x].char || ' ';
        }
      }

      rows[y] = line + applyStyle(groupStyle, groupText);
    }

    return rows;
  }

  reset(maxSize?: Size) {
    this.canvas = [];
    this.canvasHeight = 0;
    this.canvasWidth = 0;
    if (maxSize) {
      this.maxHeight =
        maxSize.height < 0 ? Number.MAX_SAFE_INTEGER : maxSize.height;
      this.maxWidth =
        maxSize.width < 0 ? Number.MAX_SAFE_INTEGER : maxSize.width;
    }
  }

  render = (drawableItems: Drawable[], maxSize?: Size) => {
    this.reset(maxSize);
    this.drawableItems = drawableItems;
    this.rasterize();
    const rows = this.getAnsiRows();
    return {
      '0': rows.join('\n'),
    };
  };

  renderDiff = (drawableItems: Drawable[], maxSize?: Size) => {
    this.reset(maxSize);
    this.drawableItems = drawableItems;
    this.rasterize();
    const rows = this.getAnsiRows();
    const diff = {};
    for (let y = 0; y < Math.max(rows.length, this.memoizedRows.length); y++) {
      if (this.memoizedRows[y] !== rows[y]) {
        diff[`${y}`] = rows[y] || '';
      }
    }
    this.memoizedRows = rows;
    return diff;
  };
}
