/* @flow */

import React from 'react';
import readline from 'readline';

type ReadableStream = stream$Readable & {
  setRawMode(flag: boolean): void,
};

let isStreamConfigured = false;
function configureInputStream(readableStream: ReadableStream) {
  if (!isStreamConfigured) {
    readableStream.setRawMode(true);
    readline.emitKeypressEvents(readableStream);

    readableStream.on('keypress', (ch, key) => {
      if (key.ctrl && key.name === 'c') {
        process.exit(0);
      }
    });

    isStreamConfigured = true;
  }
}

type Key = {
  name: string,
  ctrl: boolean,
  shift: boolean,
  alt: boolean,
};

type Props = {
  stream: ReadableStream,
  onPress(char: string, key: Key): void,
  children?: any
};

export default class KeyPress extends React.Component<Props> {
  onKeyPress = (ch: string, key: Key) => {
    this.props.onPress(ch, key);
  };

  componentDidMount() {
    const { stream } = this.props;
    configureInputStream(stream);
    stream.addListener('keypress', this.onKeyPress);
  }

  componentWillUnmount() {
    const { stream } = this.props;
    stream.removeListener('keypress', this.onKeyPress);
  }

  render() {
    return this.props.children || null;
  }
}
