/* @flow */

import render from './render';
import type { Drawable, Size } from '../types';

export default function createDiffRenderer() {
  let previousRows = [];
  return function renderDiff(elements: Drawable[], canvasSize: Size) {
    const rows = render(elements, canvasSize).split('\n');

    if (!previousRows.length) {
      previousRows = rows;
      return rows.reduce(
        (acc, row, index) => ({
          ...acc,
          [index]: row,
        }),
        {}
      );
    }

    const output = {};
    for (let i = 0; i < Math.max(previousRows.length, rows.length); i++) {
      if (previousRows[i] !== rows[i]) {
        output[i] = typeof rows[i] === 'string' ? rows[i] : '';
      }
    }

    previousRows = rows;
    return output;
  };
}
