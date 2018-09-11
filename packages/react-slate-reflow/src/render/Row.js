/* @flow */

import applyStyle from './applyStyle';

type Style = { [key: string]: string };
type Cell = {
  char: string,
  style: ?Style,
};

export default class Row {
  maxLength: number;
  cells: Cell[] = [];

  constructor(maxLength: number) {
    this.maxLength = maxLength;
  }

  fillCells(endIndex: number) {
    const fillValue = { char: ' ', style: null };
    for (let i = 0; i < endIndex; i++) {
      this.cells[i] = this.cells[i] || { ...fillValue };
    }
  }

  setText({
    start,
    length,
    style,
    value,
  }: {
    start: number,
    length: number,
    style: ?Style,
    value: string,
  }) {
    if (!this.cells[start]) {
      this.fillCells(this.maxLength < 0 ? start + length : this.maxLength);
    }

    for (
      let cellIndex = start;
      cellIndex < start + length &&
      (this.maxLength < 0 || cellIndex < this.maxLength);
      cellIndex++
    ) {
      if (cellIndex >= 0) {
        this.cells[cellIndex].style = style
          ? {
              ...(this.cells[cellIndex].style || {}),
              ...style,
            }
          : this.cells[cellIndex].style;
        this.cells[cellIndex].char = value[cellIndex - start];
      }
    }
  }

  applyStyle({
    start,
    length,
    style,
  }: {
    start: number,
    length: number,
    style: ?Style,
  }) {
    if (!style) {
      return;
    }

    const value = new Array(length).fill(' ');
    this.cells.slice(start, start + length).forEach((cell, index) => {
      value[index] = cell.char;
    });

    this.setText({
      start,
      length,
      style,
      value: value.join(''),
    });
  }

  flatten() {
    const groups = [];
    let groupIndex = 0;

    this.cells.forEach(cell => {
      if (groups.length === 0) {
        groups.push({
          content: cell.char,
          style: cell.style ? { ...cell.style } : null,
        });
      } else if (areStylesEqual(groups[groupIndex].style, cell.style)) {
        groups[groupIndex].content += cell.char;
      } else {
        groupIndex++;
        groups[groupIndex] = {
          content: cell.char,
          style: cell.style ? { ...cell.style } : null,
        };
      }
    });

    return groups;
  }

  toString() {
    return this.flatten()
      .map(
        group =>
          group.style ? applyStyle(group.style, group.content) : group.content
      )
      .join('');
  }
}

function areStylesEqual(a, b) {
  if (typeof a !== typeof b) {
    return false;
  }

  if (a && b) {
    if (Object.keys(a).length !== Object.keys(b).length) {
      return false;
    }

    // $FlowFixMe
    return !Object.keys(a).find(keyA => a[keyA] !== b[keyA]);
  }

  return a === b;
}
