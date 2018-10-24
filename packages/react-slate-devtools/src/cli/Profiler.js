/* @flow */

import React from 'react';
import { View } from '@react-slate/core';

type State = {
  curFrameTime: number,
  avgFrameTime: number,
  minFrameTime: number,
  maxFrameTime: number,
  curLayoutShare: number,
  curRenderShare: number,
  curDrawShare: number,
  avgLayoutShare: number,
  avgRenderShare: number,
  avgDrawShare: number,
};

type Props = {
  socket: *,
};

export default class Profiler extends React.Component<Props, State> {
  state = {
    curFrameTime: 0,
    avgFrameTime: 0,
    minFrameTime: 0,
    maxFrameTime: 0,
    curLayoutShare: 0,
    curRenderShare: 0,
    curDrawShare: 0,
    avgLayoutShare: 0,
    avgRenderShare: 0,
    avgDrawShare: 0,
  };

  timestamp: number;
  currentFrameTime = 0;
  accFrameTime = 0;
  accFrameSnapshots = 0;
  socket: *;

  componentDidUpdate() {
    if (this.props.socket && this.props.socket !== this.socket) {
      this.socket = this.props.socket;
      this.props.socket.on('message', data => {
        this.handleMessage(data.toString());
      });
    }
  }

  handleMessage(message: string) {
    const { measurements } = JSON.parse(message);

    if (measurements) {
      const { frame } = measurements;
      this.setState({
        curFrameTime: frame.current,
        avgFrameTime: frame.average,
        minFrameTime: frame.min,
        maxFrameTime: frame.max,
        curLayoutShare: frame.currentLayoutShare,
        curRenderShare: frame.currentRenderShare,
        curDrawShare: frame.currentDrawShare,
        avgLayoutShare: frame.averageLayoutShare,
        avgRenderShare: frame.averageRenderShare,
        avgDrawShare: frame.averageDrawShare,
      });
    }
  }

  render() {
    return (
      <View>
        <View style={styles.title}>profiler</View>
        <View style={styles.frameTimeLabel}>Total frame time:</View>
        <View style={styles.frameTimeItemContainer}>
          <View style={styles.frameTimeItemTitle}>Current:</View>
          <View style={styles.frameTimeItemValue}>
            {this.state.curFrameTime}
          </View>
          {` ms (${this.state.curLayoutShare.toFixed(
            2
          )}/${this.state.curRenderShare.toFixed(
            2
          )}/${this.state.curDrawShare.toFixed(2)})`}
        </View>
        <View style={styles.frameTimeItemContainer}>
          <View style={styles.frameTimeItemTitle}>Average:</View>
          <View style={styles.frameTimeItemValue}>
            {this.state.avgFrameTime}
          </View>
          {` ms (${this.state.avgLayoutShare.toFixed(
            2
          )}/${this.state.avgRenderShare.toFixed(
            2
          )}/${this.state.avgDrawShare.toFixed(2)})`}
        </View>
        <View style={styles.frameTimeItemContainer}>
          <View style={styles.frameTimeItemTitle}>Min:</View>
          <View style={styles.frameTimeItemValue}>
            {this.state.minFrameTime}
          </View>
          {' ms'}
        </View>
        <View style={styles.frameTimeItemContainer}>
          <View style={styles.frameTimeItemTitle}>Max:</View>
          <View style={styles.frameTimeItemValue}>
            {this.state.maxFrameTime}
          </View>
          {' ms'}
        </View>
      </View>
    );
  }
}

const styles = {
  title: {
    color: 'black',
    backgroundColor: 'magenta',
    textTransform: 'uppercase',
    padding: '0 2',
    marginBottom: 1,
  },
  frameTimeLabel: {
    color: 'gray',
    marginRight: 1,
  },
  frameTimeItemContainer: {
    marginLeft: 2,
    color: 'gray',
  },
  frameTimeItemTitle: {
    width: 8,
    display: 'inline',
    marginRight: 2,
    color: 'initial',
  },
  frameTimeItemValue: {
    width: 3,
    display: 'inline',
    color: 'initial',
  },
};
