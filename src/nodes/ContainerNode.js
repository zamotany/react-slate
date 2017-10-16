/* @flow */

import readline from 'readline';

export default class ContainerNode {
  children = [];
  output: string = '';
  stream: any = null;

  constructor(stream: any) {
    this.stream = stream;
  }

  write(data: string) {
    this.output += data;
  }

  appendChild(child: { render: Function }) {
    this.children.push(child);
  }

  getOutput() {
    return `${this.output}\n`;
  }

  _batch = null;

  flush() {
    this.output = '';
    this.children.forEach(child => child.render());
    this._batch = this._batch || setTimeout(() => this.update(), 0);
  }

  update() {
    readline.cursorTo(this.stream, 0, 0);
    readline.clearScreenDown(this.stream);
    this.stream.write(this.getOutput());
    this._batch = null;
  }
}
