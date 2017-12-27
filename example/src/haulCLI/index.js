import React from 'react';
// eslint-disable-next-line
import { Text, Spinner } from 'react-stream-renderer';

import Logo from './components/Logo';
import Status from './components/Status';
import Logs from './components/Logs';

function Line({ style, width, char = '=', label }) {
  return (
    <Text style={style}>
      {`${char.repeat(4)} `}
      <Text
        style={{
          display: 'inline',
          color: 'white',
          textTransform: 'uppercase',
        }}
      >
        {label}
      </Text>
      {` ${char.repeat(width - label.length - 6)}`}
    </Text>
  );
}

const width = process.stdout.columns;
const height = process.stdout.rows;

export default class HaulCLI extends React.Component {
  state = {
    messages: [],
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        messages: this.state.messages.concat({
          timestamp: Date.now(),
          text: `Test log ${Date.now()}`,
        }),
      });
    }, 1000);
  }

  render() {
    const spinner = <Spinner interval={200} />;
    return (
      <Text>
        <Logo width={width} />
        <Line width={width} style={styles.separator} label="status" />
        <Status
          compilerState={
            <Text style={{ display: 'inline' }}>
              {spinner}
              {'  building  '}
              {spinner}
            </Text>
          }
          serverAddress="http://localhost:8081"
          width={width}
        />
        <Line width={width} style={styles.separator} label="Logs" />
        <Logs height={height - 20} messages={this.state.messages} />
        <Line width={width} style={styles.separator} label="shortcuts" />
        <Text style={{ textTransform: 'uppercase' }}>todo</Text>
      </Text>
    );
  }
}

const styles = {
  separator: {
    color: 'blue',
  },
};
