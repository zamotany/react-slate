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

export default class KeyPress extends React.Component<Props> {
  isStreamConfigured: boolean = false;

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
    if (!this.isStreamConfigured) {
      setRawMode(stream, true);
      readline.emitKeypressEvents(stream);
    }
    stream.addListener('keypress', this.onKeyPress);
  }

  componentWillUnmount() {
    const { stream, disableStreamCleanup } = this.props;
    setRawMode(stream, false);
    stream.removeListener('keypress', this.onKeyPress);
    if (!disableStreamCleanup) {
      // This needs to be explicitly called, since `readline.emitKeypressEvents`
      // contains side effects, which prevents node process from exiting.
      // All code after this line will execute properly.
      stream.pause();
    }
  }

  render() {
    return this.props.children || null;
  }
}

function setRawMode(stream, value) {
  stream.setRawMode && stream.setRawMode(value);
}
