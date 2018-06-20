/* @flow */

import React from 'react';
import configureIoHandler from '../io';

type Key = {
  name: string,
  ctrl: boolean,
  shift: boolean,
  alt: boolean,
  char: string,
};

type Props = {
  inputStream: tty$ReadStream,
  onPress(char: string, key: Key): void,
  children?: any,
};

export default class KeyPress extends React.Component<Props> {
  static defaultProps = {
    inputStream: process.stdin,
  };

  emitter: ?* = null;
  dispatch: ?() => void = null;

  componentDidMount() {
    const { inputStream } = this.props;
    const { emitter, dispatch } = configureIoHandler({
      input: inputStream,
      output: null,
    });
    this.emitter = emitter;
    this.dispatch = dispatch;
    this.emitter.addListener('keypress', this.props.onPress);
  }

  componentWillUnmount() {
    if (this.emitter) {
      this.emitter.removeListener('keypress', this.props.onPress);
      this.emitter = null;
    }
    if (this.dispatch) {
      this.dispatch();
      this.dispatch = null;
    }
  }

  render() {
    return this.props.children || null;
  }
}
