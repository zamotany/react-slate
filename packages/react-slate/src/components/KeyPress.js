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
    streams: new WeakMap(),
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

    // If stream wasn't stored, then the stream was not configured yet.
    // $FlowFixMe
    if (!KeyPress[INTERNAL].streams.has(stream)) {
      setRawMode(stream, true);
      readline.emitKeypressEvents(stream);
    }
    stream.addListener('keypress', this.onKeyPress);

    // Store stream and set initial value to 1, so another instance
    // won't run configuration code again.
    // $FlowFixMe
    if (!KeyPress[INTERNAL].streams.has(stream)) {
      // $FlowFixMe
      KeyPress[INTERNAL].streams.set(stream, 1);
    } else {
      // $FlowFixMe
      const count = KeyPress[INTERNAL].streams.get(stream);
      // $FlowFixMe
      KeyPress[INTERNAL].streams.set(stream, count + 1);
    }
  }

  componentWillUnmount() {
    const { stream, disableStreamCleanup } = this.props;
    stream.removeListener('keypress', this.onKeyPress);

    // Decrement number of instances of `KeyPress` operating on given stream,
    // only if the stream was configured and stored.
    // $FlowFixMe
    if (KeyPress[INTERNAL].streams.has(stream)) {
      // $FlowFixMe
      const count = KeyPress[INTERNAL].streams.get(stream) - 1;
      // $FlowFixMe
      KeyPress[INTERNAL].streams.set(stream, count);

      // Cleanup the stream if current instance was the only one left
      // operating on given stream.
      if (count === 0) {
        setRawMode(stream, false);
        if (!disableStreamCleanup) {
          // This needs to be explicitly called, since `readline.emitKeypressEvents`
          // contains side effects, which prevents node process from exiting.
          // All code after this line will execute properly.
          stream.pause();
        }
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
