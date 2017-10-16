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

  flush() {
    this.output = '';
    this.children.forEach(child => child.render());
    readline.cursorTo(this.stream, 0, 0);
    readline.clearScreenDown(this.stream);
    this.stream.write(this.getOutput());
  }
}
