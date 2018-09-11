/* @flow */
/* eslint-disable react/no-unused-prop-types */

import React, { type Element } from 'react';
import { View, type Style, renderToString } from '@react-slate/core';
import Raw from './Raw';
import configureIoHandler from '../io';

type Props = {
  children: Element<*>,
  height: number,
  inverted?: boolean,
  inputStream: tty$ReadStream,
  outputStream: tty$WriteStream,
  scrollSensitivity: number,
  style?: Style,
  stickToBottom?: boolean,
  disabled?: boolean,
};

type State = {
  index: number,
};

export default class ScrollView extends React.Component<Props, State> {
  static defaultProps = {
    inputStream: process.stdin,
    outputStream: process.stdout,
    scrollSensitivity: 0.25,
  };

  contentHeight: number = 0;
  state = {
    index: 0,
  };
  emitter: ?* = null;
  dispatch: ?() => void = null;

  constructor(props: Props) {
    super(props);

    if (this.getHeight() < 0) {
      throw new Error(
        'ScrollView height must be a non-negative number. Did you forgot to pass' +
          '`height` prop or `style` prop with `height` property?'
      );
    }
  }

  mouseHandler = ({ name, button }: { name: string, button: string }) => {
    if (name !== 'scroll' || this.props.disabled) {
      return;
    }

    const direction = button === 'down' ? 1 : -1;
    this.setState(state => {
      let index = state.index + (this.props.inverted ? -1 : 1) * direction;
      index = index < 0 ? 0 : index;
      index =
        index + this.props.height > this.contentHeight
          ? this.contentHeight - this.props.height
          : index;
      return {
        index,
      };
    });
  };

  getHeight() {
    return (
      this.props.height || (this.props.style && this.props.style.height) || -1
    );
  }

  componentDidMount() {
    const { emitter, dispatch } = configureIoHandler({
      input: this.props.inputStream,
      output: this.props.outputStream,
      mouseReportingRatio: this.props.scrollSensitivity,
    });
    this.emitter = emitter;
    this.dispatch = dispatch;
    emitter.addListener('mouse', this.mouseHandler);
  }

  componentWillUnmount() {
    if (this.emitter) {
      this.emitter.removeListener('mouse', this.mouseHandler);
      this.emitter = null;
    }
    if (this.dispatch) {
      this.dispatch();
      this.dispatch = null;
    }
  }

  render() {
    const children = renderToString(this.props.children, {
      height: -1,
      width: -1,
    }).split('\n');
    const { stickToBottom } = this.props;
    const height = this.getHeight();
    let { index } = this.state;

    // If the scrollable view should follow new content
    // and we have our cursor at the bottom, then
    // we update index to keep actually keep it at the bottom.
    if (
      stickToBottom &&
      this.contentHeight !== children.length &&
      index + height === this.contentHeight
    ) {
      index = children.length - height;
      // This is a small hack, but it works fine. Maybe we can get rid of it later.
      setTimeout(() => {
        this.setState(() => ({
          index,
        }));
      }, 0);
    }

    this.contentHeight = children.length;

    return (
      <View style={this.props.style}>
        <Raw>{children.slice(index, height + index)}</Raw>
      </View>
    );
  }
}
