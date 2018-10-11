/* @flow */

import React from 'react';
import { View } from '@react-slate/core';
import { ListView, KeyPress } from '@react-slate/components';

type State = {
  logs: Array<{ level: string, timestamp: string, messages: string[] }>,
};

type Props = {
  socket: *,
};

export default class Logger extends React.Component<Props, State> {
  state = {
    logs: [],
  };

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
    const { logs } = JSON.parse(message);

    if (logs) {
      this.setState(state => ({
        logs: state.logs.concat(...logs).slice(-100),
      }));
    }
  }

  render() {
    return (
      <View>
        <View style={styles.title}>logger</View>
        <KeyPress onPress={() => {}}>
          <View style={styles.controls}>{`(Press R' to clear logs)`}</View>
        </KeyPress>
        <ListView
          listHeight={5}
          data={this.state.logs}
          keyExtractor={({ item }) => `${item.timestamp}-${item.level}`}
          renderItem={({ item }) => (
            <View>
              <View style={[styles.baseLogItem, styles.logTimestamp]}>
                {item.timestamp}
              </View>
              <View style={[styles.baseLogItem, styles.logLevel(item.level)]}>
                {item.level}
              </View>
              <View style={[styles.baseLogItem]}>
                {item.level === 'assert'
                  ? `${item.messages.slice(1).join(' ')} ${
                      item.messages[0] ? 'PASSED' : 'FAILED'
                    }`
                  : item.messages.join(' ')}
              </View>
            </View>
          )}
        />
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
    marginTop: 1,
  },
  controls: {
    marginBottom: 1,
    color: 'gray',
  },
  baseLogItem: {
    display: 'inline',
    marginRight: 1,
  },
  logTimestamp: {
    color: 'gray',
  },
  logLevel(level: string) {
    let color = 'white';
    switch (level) {
      case 'warn':
        color = 'yellow';
        break;
      case 'error':
        color = 'red';
        break;
      case 'debug':
        color = 'gray';
        break;
      case 'assert':
        color = 'magenta';
        break;
      case 'info':
      default:
    }
    return {
      color,
      fontWeight: 'bold',
    };
  },
};
