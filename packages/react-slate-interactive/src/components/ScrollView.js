/* @flow */

import React, { type Element } from 'react';
import { View, type Style } from '@react-slate/core';
import configureIoHandler from '../io';

type Props = {
  children: Element<*>,
  height: number,
  inverted?: boolean,
  inputStream: tty$ReadStream,
  outputStream: tty$WriteStream,
  reportingRatio: number,
  style?: Style,
  follow?: boolean,
  disabled?: boolean,
};

type State = {
  index: number,
};

export default class ScrollView extends React.Component<Props, State> {
  static defaultProps = {
    inputStream: process.stdin,
    outputStream: process.stdout,
    reportingRatio: 0.25,
  };

  contentHeight: number = 0;
  state: State = {
    index: 0,
  };
  emitter: ?* = null;
  dispatch: ?() => void = null;

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

  customRender = (instance: *, relativeCanvas: *, absoluteCanvas: *) => {
    const renderResults = instance.nativeRender(relativeCanvas, absoluteCanvas);
    const { height, follow } = this.props;
    let { index } = this.state;

    // If the scrollable view should follow new content
    // and we have our cursor at the bottom, then
    // we update index to keep actually keep it at the bottom.
    if (
      follow &&
      this.contentHeight !== renderResults.canvas.length &&
      index + height === this.contentHeight
    ) {
      index = renderResults.canvas.length - height;
      // This is a small hack, but it works fine. Maybe we can get rid of it later.
      this.setState(() => ({
        index,
      }));
    }

    this.contentHeight = renderResults.canvas.length;

    renderResults.canvas = renderResults.canvas.slice(index, height + index);
    return renderResults;
  };

  componentDidMount() {
    const { emitter, dispatch } = configureIoHandler({
      input: this.props.inputStream,
      output: this.props.outputStream,
      mouseReportingRatio: this.props.reportingRatio,
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
    return (
      <View style={this.props.style}>
        <View render={this.customRender}>{this.props.children}</View>
      </View>
    );
  }
}
