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
    const { stream } = this.props;
    if (!this.isStreamConfigured) {
      stream.setRawMode(true);
      readline.emitKeypressEvents(stream);
      this.isStreamConfigured = true;
    }
    stream.addListener('keypress', this.onKeyPress);
  }

  componentWillUnmount() {
    const { stream } = this.props;
    stream.setRawMode(false);
    stream.removeListener('keypress', this.onKeyPress);
  }

  render() {
    return this.props.children || null;
  }
}
