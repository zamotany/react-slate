/* @flow */

import readline from 'readline';
import { SHOW_CURSOR, HIDE_CURSOR } from '../constants/asciiCodes';
import LineBuffer from '../utils/LineBuffer';

type Options = {
  renderOptimizations: boolean,
  hideCursor: boolean,
};

export default class ContainerNode {
  children = [];
  frontBuffer: string = '';
  backBuffer: string = '';
  stream: any = null;
  options: Options;

  constructor(stream: any, opts?: Options) {
    this.options = {
      renderOptimizations: false,
      hideCursor: false,
      ...(opts || {}),
    };
    this.stream = stream;

    if (this.options.hideCursor) {
      this.stream.write(HIDE_CURSOR);
    }

    const restoreCursor = () => {
      this.stream.write(SHOW_CURSOR);
    };

    process.on('exit', restoreCursor);
    process.on('SIGINT', restoreCursor);
    process.on('uncaughtException', restoreCursor);
  }

  write(data: string) {
    this.frontBuffer += data;
  }

  appendChild(child: { render: Function }) {
    this.children.push(child);
  }

  getOutput() {
    return `${this.frontBuffer}\n`;
  }

  _buffer: LineBuffer;

  flush() {
    this.frontBuffer = '';
    this.children.forEach(child => child.render());

    const output = this.getOutput();

    if (this._buffer) {
      this._buffer.update(output, this.stream);
    } else {
      this._buffer = new LineBuffer(output);
      readline.cursorTo(this.stream, 0, 0);
      readline.clearScreenDown(this.stream);
      this.stream.write(output);
    }
  }
}
