/* @flow */

import React from 'react';
import { View } from '@react-slate/core';
import Profiler from './Profiler';

type State = {
  status: 'connected' | 'disconnected',
  socket: ?WebSocket,
};

type Props = {
  server: *,
};

export default class App extends React.Component<Props, State> {
  state = {
    status: 'disconnected',
    socket: null,
  };

  constructor(props: Props) {
    super(props);

    this.props.server.on('connection', socket => {
      this.setState({ status: 'connected', socket });
      socket.on('close', () => {
        this.setState({ status: 'disconnected', socket: null });
      });
      const intervalId = setInterval(() => {
        try {
          socket.send('ping');
        } catch (error) {
          socket.close();
          this.setState({ status: 'disconnected', socket: null });
          clearInterval(intervalId);
        }
      }, 100);
    });
  }

  render() {
    return (
      <View>
        <View style={[styles.title, styles.divider]}>devtools</View>
        <View style={styles.divider}>Status: {this.state.status}</View>
        <Profiler socket={this.state.socket} />
      </View>
    );
  }
}

const styles = {
  title: {
    color: 'black',
    backgroundColor: 'green',
    textTransform: 'uppercase',
    padding: '0 2',
  },
  divider: {
    marginBottom: 1,
  },
};
