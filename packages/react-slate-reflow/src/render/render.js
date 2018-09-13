/* @flow */

import stripAnsi from 'strip-ansi';
import Row from './Row';
import type { Drawable, Size } from '../types';

function fill(rows, index, maxWidth) {
  for (let i = 0; i <= index; i++) {
    // eslint-disable-next-line no-param-reassign
    rows[i] = rows[i] || new Row(maxWidth);
  }
}

export default function render(elements: Drawable[], canvasSize: Size) {
  const rows = [];
  const { width: maxWidth, height: maxHeight } = canvasSize;

  elements.forEach(element => {
    if (!element.body && !element.box) {
      return;
    }

    const elementHeight = element.box ? element.box.height : 1;
    // $FlowFixMe
    const y = (element.box || element.body).y;

    for (
      let rowIndex = y;
      rowIndex >= 0 &&
      rowIndex < elementHeight + y &&
      (maxHeight < 0 || y + 1 <= maxHeight);
      rowIndex++
    ) {
      if (!rows[rowIndex]) {
        fill(rows, rowIndex, maxWidth);
      }

      const row = rows[rowIndex];
      if (element.body) {
        const { value, x, style } = element.body;
        row.setText({
          value: stripAnsi(value),
          start: x,
          length: stripAnsi(value).length,
          style: normalizeStyle(style),
        });
      } else if (element.box) {
        const { x, width, style } = element.box;
        row.applyStyle({
          start: x,
          length: width,
          style: normalizeStyle(style),
        });
      }
    }
  });

  return rows.map(row => row.toString()).join('\n');
}

function normalizeStyle(style: *): { [key: string]: string } {
  return (
    Object.keys(style || {})
      // $FlowFixMe
      .filter(key => style[key])
      // $FlowFixMe
      .reduce((acc, key) => ({ ...acc, [key]: style[key] }), {})
  );
}
