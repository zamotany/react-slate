/* @flow */
/* eslint-disable no-param-reassign */

import stripAnsi from 'strip-ansi';
import TextNode from '../nodes/TextNode';
import sliceAnsi from './sliceAnsi';
import { createStylize } from '../utils/style';

function appendOffsets(
  canvas: string[],
  { top, bottom, left, right }: { [key: string]: number },
  { width, offsetChar }: { width: number, offsetChar: string }
) {
  for (let i = 0; i < canvas.length; i++) {
    canvas[i] = `${offsetChar.repeat(left)}${canvas[i]}${offsetChar.repeat(
      right
    )}`;
  }
  for (let i = 0; i < top + bottom; i++) {
    // $FlowFixMe
    canvas[i < top ? 'unshift' : 'push'](
      width > 0 ? offsetChar.repeat(width) : ''
    );
  }
}

function appendToLastLine(canvas: string[], text: string) {
  const index = (canvas.length || 1) - 1;
  canvas[index] = `${canvas[index] || ''}${text}`;
}

type Offset = {
  top: number,
  bottom: number,
  left: number,
  right: number,
};

export default class RelativeCanvas {
  canvas: string[] = [];
  mergeState: { wasInlined: boolean } = { wasInlined: true };
  width: number;
  height: number;
  stylize: () => void;

  constructor({
    width,
    height,
    style,
  }: {
    width: ?number,
    height: ?number,
    style: ?any,
  }) {
    this.width = width || -1;
    this.height = height || -1;
    this.stylize = () =>
      createStylize(style, { height: this.height, width: this.width })(
        this.canvas
      );
  }

  clear() {
    this.canvas = [];
  }

  addPaddings(offset: Offset) {
    appendOffsets(this.canvas, offset, {
      offsetChar: ' ',
      width: this.width,
    });
  }

  addMargins(offset: Offset) {
    appendOffsets(this.canvas, offset, {
      offsetChar: '\0',
      width: this.width,
    });
  }

  normalize() {
    if (this.width > 0) {
      for (let i = 0; i < this.canvas.length; i++) {
        this.canvas[i] = sliceAnsi(
          this.canvas[i],
          0,
          this.width || stripAnsi(this.canvas[i]).length
        );
        this.canvas[i] += ' '.repeat(
          (this.width || stripAnsi(this.canvas[i]).length) -
            stripAnsi(this.canvas[i]).length
        );
      }
    }

    if (this.height > 0 && this.canvas.length < this.height) {
      const length = this.height - this.canvas.length;
      for (let i = 0; i < length; i++) {
        this.canvas.push(this.width > 0 ? '\0'.repeat(this.width) : '');
      }
    } else if (this.height > 0 && this.canvas.length > this.height) {
      const length = this.canvas.length - this.height;
      for (let i = 0; i < length; i++) {
        this.canvas.pop();
      }
    }
  }

  appendTextNode(node: TextNode) {
    const hasNewLine = node.props.children.indexOf('\n') > -1;
    if (!this.mergeState.wasInlined) {
      this.canvas.push('');
    }
    if (!hasNewLine) {
      appendToLastLine(this.canvas, node.props.children);
    } else {
      const textLines = node.props.children.split('\n');
      textLines.forEach((text, i) => {
        appendToLastLine(this.canvas, text);
        if (i !== textLines.length - 1) {
          this.canvas.push('');
        }
      });
    }
  }

  merge(
    nestedRelativeCanvas: RelativeCanvas,
    { isInline }: { isInline: boolean }
  ) {
    const shouldInline = this.mergeState.wasInlined && isInline;
    this.mergeState.wasInlined = isInline;
    nestedRelativeCanvas.canvas.forEach((text, i) => {
      if (i === 0 && shouldInline) {
        appendToLastLine(this.canvas, text);
      } else {
        this.canvas.push(text);
      }
    });
  }
}
