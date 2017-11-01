/* @flow */

import type { Margins } from '../types';

import TextNode from '../nodes/TextNode';

/* eslint-disable no-param-reassign */

export function getCanvas({ width, height }: { [key: string]: number }) {
  const canvas = [];
  for (let i = 0; i < height; i++) {
    canvas.push(' '.repeat(width));
  }
  return canvas;
}

export function mergeCanvas(canvas: string[], relativeCanvas: string[]) {
  // We only care about canvas.length since it should be max number or terminal's rows.
  const finalCanvas = [];
  const noContentLine = ' '.repeat(canvas[0].length);
  for (let lineIndex = 0; lineIndex < canvas.length; lineIndex++) {
    finalCanvas[lineIndex] =
      canvas[lineIndex] === noContentLine && relativeCanvas[lineIndex]
        ? relativeCanvas[lineIndex]
        : canvas[lineIndex];
  }
  return finalCanvas;
}

export function appendToLastLine(canvas: string[], text: string) {
  const index = (canvas.length || 1) - 1;
  canvas[index] = `${canvas[index] || ''}${text}`;
}

export function appendTextNode(canvas: string[], node: TextNode) {
  const hasNewLine = node.props.children.indexOf('\n') > -1;
  if (!hasNewLine) {
    appendToLastLine(canvas, node.props.children);
  } else {
    const textLines = node.props.children.split('\n');
    textLines.forEach((text, i) => {
      appendToLastLine(canvas, text);
      if (i !== textLines.length - 1) {
        canvas.push('');
      }
    });
  }
}

export function appendRenderResults(canvas: string[], renderResults: string[]) {
  renderResults.forEach(text => {
    canvas.push(text);
  });
  canvas.push('');
}

export function addMarginsAndNormalize(
  canvas: string[],
  { marginLeft, marginRight, marginTop, marginBottom }: Margins,
  lineLength: number
) {
  const noContentLine = ' '.repeat(lineLength);
  for (let i = 0; i < canvas.length; i++) {
    canvas[i] = `${' '.repeat(marginLeft)}${canvas[i]}${' '.repeat(
      marginRight
    )}`;
    canvas[i] = `${canvas[i]}${noContentLine}`.substr(0, lineLength);
  }
  for (let i = 0; i < marginTop; i++) {
    canvas.unshift(noContentLine);
  }
  for (let i = 0; i < marginBottom; i++) {
    canvas.push(noContentLine);
  }
}

export function layAbsoluteTextNode(canvas: string[], node: TextNode) {}
