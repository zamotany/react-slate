/* @flow */

import type { Element } from '../types';

function getLines(text) {
  let lines = text.split('\n');

  if (lines.length === 1) {
    return lines;
  }

  const endsWithNewLine = text.endsWith('\n');
  if (endsWithNewLine) {
    lines = lines.slice(0, lines.length - 1);
  }
  return lines.map(
    (line, i) => `${line}${i < lines.length - 1 || endsWithNewLine ? '\n' : ''}`
  );
}

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
      this.lines[i] = i < LINES_LENGTH ? this.lines[i] : '\n';
    }
    this.lastFilledLine = toLine;
  }

  build() {
    // @TODO: support layers (z-index)

    // Assumption: both x and y are zero-based indexes
    this.elements.forEach(element => {
      const contentLines = getLines(element.text);
      const TOP_OFFSET = element.y + element.parentsOffsetY;
      const LEFT_OFFSET = element.x + element.parentsOffsetX;
      if (TOP_OFFSET + contentLines.length > this.lines.length) {
        // TODO: get rid of it
        this.fillMissingLines(TOP_OFFSET + contentLines.length);
      }

      contentLines.forEach((content, i) => {
        const line =
          this.lines[TOP_OFFSET + i] === '\n' ? '' : this.lines[TOP_OFFSET + i];
        const postContent = line.substr(LEFT_OFFSET + content.length);

        let preContent = line.substr(0, LEFT_OFFSET);
        if (preContent.length < LEFT_OFFSET) {
          preContent += ' '.repeat(LEFT_OFFSET - preContent.length);
        }

        this.lines[TOP_OFFSET + i] = `${preContent}${content}${postContent}`;
      });
    });

    return this.lines.join('');
  }
}
