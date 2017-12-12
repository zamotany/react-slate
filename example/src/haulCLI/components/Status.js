import React from 'react';
// eslint-disable-next-line
import { Text, ProgressBar } from 'react-stream-renderer';

function StatusItem({ name, value, style }) {
  return (
    <Text style={style}>
      <Text style={styles.statusName}>{name.toUpperCase()}</Text>
      <Text style={styles.statusValue}>{value}</Text>
    </Text>
  );
}

export default class Status extends React.Component {
  state = {
    iosCompilationProgress: 0,
    androidCompilationProgress: 0,
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState(state => ({
        iosCompilationProgress: state.iosCompilationProgress + 0.05,
        androidCompilationProgress: state.iosCompilationProgress + 0.1,
      }));

      if (
        this.state.iosCompilationProgress >= 1 &&
        this.state.androidCompilationProgress >= 1
      ) {
        clearInterval(this.intervalId);
      }
    }, 800);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { compilerState, serverAddress, width } = this.props;
    return (
      <Text style={styles.container}>
        <StatusItem
          name="state"
          value={compilerState}
          style={{ marginBottom: 1, marginLeft: 7 }}
        />
        <StatusItem name="listening on" value={serverAddress} />
        <Text
          style={{ ...styles.progressContainer, left: Math.floor(width / 2) }}
        >
          <Text>
            <ProgressBar
              value={this.state.iosCompilationProgress}
              barWidth={30}
            />
            <Text style={{ color: 'blue', display: 'inline' }}>{' iOS'}</Text>
          </Text>
          <Text>
            <ProgressBar
              value={this.state.androidCompilationProgress}
              barWidth={30}
            />
            <Text style={{ color: 'blue', display: 'inline' }}>
              {' Android'}
            </Text>
          </Text>
        </Text>
      </Text>
    );
  }
}

const styles = {
  container: {
    padding: '1',
  },
  progressContainer: {
    position: 'fixed',
    top: 9,
  },
  statusName: {
    color: 'black',
    backgroundColor: 'cyan',
    padding: '0 2',
    display: 'inline',
  },
  statusValue: {
    color: 'white',
    marginLeft: 1,
    display: 'inline',
  },
};
