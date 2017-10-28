/* @flow */

import type { Element } from '../types';

export default class Layout {
  elements: Element[] = [];
  lines: string[] = [];
  lastFilledLine: number = 0;

  constructor(elements: Element[]) {
    this.elements = elements;
  }

  fillMissingLines(toLine: number) {
    const LINES_LENGTH = this.lines.length;
    for (let i = this.lastFilledLine; i < toLine; i++) {
      this.lines[i] = i < LINES_LENGTH ? this.lines[i] : '';
    }
    this.lastFilledLine = toLine;
  }

  build() {
    // @TODO: support layers (z-index)
    // Assumption: both x and y are zero-based indexes
    this.elements.forEach(element => {
      const textByLines = element.text.split('\n');
      const POS_Y = getPositionY(element);
      const POS_X = getPositionX(element);

      if (POS_Y + textByLines.length > this.lines.length) {
        // TODO: get rid of it
        this.fillMissingLines(POS_Y + textByLines.length);
      }

      textByLines.forEach((textLine, lineIndex) => {
        const line = this.lines[POS_Y + lineIndex];
        const postContent = line.substr(POS_X + textLine.length);

        let preContent = line.substr(0, POS_X);
        if (preContent.length < POS_X) {
          preContent += ' '.repeat(POS_X - preContent.length);
        }

        this.lines[
          POS_Y + lineIndex
        ] = `${preContent}${textLine}${postContent}`;
      });
    });

    return this.lines.join('\n');
  }
}

function getPositionY(element: Element) {
  return element.y + element.parentsOffsetY;
}

function getPositionX(element: Element) {
  return element.x + element.parentsOffsetX;
}
