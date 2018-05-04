/* @flow */

import React from 'react';
import readline from 'readline';

type ReadableStream = stream$Readable & {
  setRawMode(flag: boolean): void,
};

type Key = {
  name: string,
  ctrl: boolean,
  shift: boolean,
  alt: boolean,
};

type Props = {
  stream: ReadableStream,
  onPress(char: string, key: Key): void,
  disableStreamCleanup?: boolean,
  children?: any,
};

const INTERNAL = Symbol('KeyPress_Internal');

export default class KeyPress extends React.Component<Props> {
  // $FlowFixMe
  static [INTERNAL] = {
    instanceCount: 0,
  };

  onKeyPress = (ch: string, key: Key) => {
    this.props.onPress(ch, key);
    if (key.ctrl && key.name === 'c') {
      process.exit(0);
    }
  };

  componentDidMount() {
    const { stream, disableStreamCleanup } = this.props;
    if (!disableStreamCleanup) {
      stream.resume();
    }
    // $FlowFixMe
    if (KeyPress[INTERNAL].instanceCount === 0) {
      setRawMode(stream, true);
      readline.emitKeypressEvents(stream);
    }
    stream.addListener('keypress', this.onKeyPress);
    // $FlowFixMe
    KeyPress[INTERNAL].instanceCount++;
  }

  componentWillUnmount() {
    const { stream, disableStreamCleanup } = this.props;
    stream.removeListener('keypress', this.onKeyPress);
    // $FlowFixMe
    KeyPress[INTERNAL].instanceCount--;
    // $FlowFixMe
    if (KeyPress[INTERNAL].instanceCount === 0) {
      setRawMode(stream, false);
      if (!disableStreamCleanup) {
        // This needs to be explicitly called, since `readline.emitKeypressEvents`
        // contains side effects, which prevents node process from exiting.
        // All code after this line will execute properly.
        stream.pause();
      }
    }
  }

  render() {
    return this.props.children || null;
  }
}

function setRawMode(stream, value) {
  stream.setRawMode && stream.setRawMode(value);
}
