/* @flow */

import TextNode from '../nodes/TextNode';

/* eslint-disable no-param-reassign */

export function appendToLastLine(outputLines: string[], text: string) {
  const index = (outputLines.length || 1) - 1;
  outputLines[index] = `${outputLines[index] || ''}${text}`;
}

export function appendTextNode(outputLines: string[], node: TextNode) {
  const hasNewLine = node.props.children.indexOf('\n') > -1;
  if (!hasNewLine) {
    appendToLastLine(outputLines, node.props.children);
  } else {
    const textLines = node.props.children.split('\n');
    textLines.forEach((text, i) => {
      appendToLastLine(outputLines, text);
      if (i !== textLines.length - 1) {
        outputLines.push('');
      }
    });
  }
}

export function appendRenderResults(
  outputLines: string[],
  renderResults: string[]
) {
  renderResults.forEach(text => {
    outputLines.push(text);
  });
  outputLines.push('');
}

export function indentLeftBy(textLines: string[], indentation: number) {
  return textLines.map(text => `${' '.repeat(indentation)}${text}`);
}

export function indentTopBy(textLines: string[], indentation: number) {
  const indentLines = [];
  for (let i = 0; i < indentation; i++) {
    indentLines.push('');
  }
  return [...indentLines, ...textLines];
}

export function indentRightTo(textLines: string[], indentation: number) {
  return textLines.map(text => {
    let repeatCount = indentation > 0 ? indentation - text.length : 0;
    if (repeatCount < 0) {
      repeatCount = 0;
    }
    return `${text}${' '.repeat(repeatCount)}`;
  });
}

export function indentBottomTo(textLines: string[], indentation: number) {
  const indentLines = [];
  for (let i = textLines.length; i < indentation; i++) {
    indentLines.push('');
  }
  return [...textLines, ...indentLines];
}
