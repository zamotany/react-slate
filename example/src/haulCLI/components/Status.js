import React from 'react';
// eslint-disable-next-line
import { Text, Endl } from 'react-stream-renderer';

function StatusItem({ name, value, style }) {
  return (
    <Text style={style}>
      <Text style={styles.statusName}>{name.toUpperCase()}</Text>
      <Text style={styles.statusValue}>{value}</Text>
    </Text>
  );
}

export default function Status({ compilerState, serverAddress, width }) {
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
        <Text>Progress bars will be here</Text>
      </Text>
    </Text>
  );
}

const styles = {
  container: {
    padding: '1 1 1 0',
    height: 5,
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
