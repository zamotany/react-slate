/* @flow */

/* eslint-disable no-param-reassign */

import stripAnsi from 'strip-ansi';
import AnsiParser from 'ansi-parser';
import sliceAnsi from '../utils/sliceAnsi';
import stringifyStyledAnsiChars from '../utils/stringifyStyledAnsiChars';

type CanvasSize = {
  width: number,
  height: number,
};

type Char = {
  style: string,
  content: string,
};

function isEmpty(value: ?(string[])) {
  return !value || !value.length;
}

function mergeAnsiStrings(bottomString: string, topString: string) {
  const bottom: Char[] = AnsiParser.parse(bottomString);
  const top: Char[] = AnsiParser.parse(topString);
  const output: Char[] = [];

  const length = Math.max(bottom.length, top.length);
  for (let i = 0; i < length; i++) {
    const char =
      top[i] && top[i].content && top[i].content !== '\0'
        ? top[i]
        : bottom[i] || { style: '', content: '\0' };
    output.push(char);
  }

  return stringifyStyledAnsiChars(output);
}

export default class AbsoluteCanvas {
  positiveLayers = [];
  negativeLayers = [];

  noContentLine: string;
  size: CanvasSize;

  constructor({ width, height }: CanvasSize) {
    this.size = { width, height };
    this.noContentLine = '\0'.repeat(width);
  }

  atLayer(layerIndex: number) {
    if (!Number.isInteger(layerIndex)) {
      throw new Error('Layer index (z-index) must be an integer.');
    }

    if (layerIndex > -1) {
      this.positiveLayers[layerIndex] = isEmpty(this.positiveLayers[layerIndex])
        ? new Array(this.size.height).fill(this.noContentLine)
        : this.positiveLayers[layerIndex];
      return this.positiveLayers[layerIndex];
    }
    const index = -layerIndex;
    this.negativeLayers[index] = isEmpty(this.negativeLayers[index])
      ? new Array(this.size.height).fill(this.noContentLine)
      : this.negativeLayers[index];
    return this.negativeLayers[index];
  }

  appendTree(
    nestedTree: string[],
    { x, y, z }: { x: number, y: number, z: number }
  ) {
    const layer = this.atLayer(z);
    for (
      let i = Math.abs(Math.min(y, 0)); // If y < 0 start from line abs(y), otherwise from 0
      i < nestedTree.length && y + i < layer.length;
      i++
    ) {
      // Append offsets if x > 0
      let line = `${'\0'.repeat(Math.max(x, 0))}${nestedTree[i]}`;
      // Left-trim line if x < 0
      line = x < 0 ? sliceAnsi(line, Math.abs(x)) : line;
      layer[y + i] = sliceAnsi(
        mergeAnsiStrings(layer[y + i], line),
        0,
        this.size.width
      );
    }
  }

  merge(bottomCanvas: string[], topCanvas: string[]) {
    for (let lineIndex = 0; lineIndex < this.size.height; lineIndex++) {
      if (
        // If both strings have content.
        bottomCanvas[lineIndex] &&
        bottomCanvas[lineIndex] !== this.noContentLine &&
        topCanvas[lineIndex] &&
        topCanvas[lineIndex] !== this.noContentLine
      ) {
        bottomCanvas[lineIndex] = mergeAnsiStrings(
          bottomCanvas[lineIndex],
          topCanvas[lineIndex]
        );
      } else if (
        // If only top string has content.
        (!bottomCanvas[lineIndex] ||
          bottomCanvas[lineIndex] === this.noContentLine) &&
        topCanvas[lineIndex] &&
        topCanvas[lineIndex] !== this.noContentLine
      ) {
        bottomCanvas[lineIndex] = topCanvas[lineIndex];
      } else {
        bottomCanvas[lineIndex] = bottomCanvas[lineIndex] || this.noContentLine;
      }

      const lineLength = stripAnsi(bottomCanvas[lineIndex]).length;
      if (lineLength < this.noContentLine.length) {
        bottomCanvas[lineIndex] += '\0'.repeat(
          this.noContentLine.length - lineLength
        );
      }
    }
    return bottomCanvas;
  }

  flatten(relativeCanvas: string[]) {
    // eslint-disable-next-line no-unused-vars
    let flatCanvas = this.negativeLayers.reduce(
      (acc: string[], currentCanvas: string[]) =>
        this.merge(currentCanvas, acc),
      new Array(this.size.height).fill(this.noContentLine)
    );
    flatCanvas = this.merge(flatCanvas, relativeCanvas);
    return this.positiveLayers
      .reduce(this.merge.bind(this), flatCanvas)
      .map(line => line.replace(/\0/g, ' '));
  }
}
