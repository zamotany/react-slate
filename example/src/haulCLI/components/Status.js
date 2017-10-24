import React from 'react';
// eslint-disable-next-line
import { Text, Endl } from 'react-stream-renderer';

function StatusItem({ name, value }) {
  return (
    <Text endl>
      <Text style={styles.statusName}>{`  ${name.toUpperCase()}  `}</Text>
      <Text style={styles.statusValue}>
        {`  `}
        {value}
      </Text>
    </Text>
  );
}

export default function Status({ compilerState, serverAddress }) {
  return (
    <Text>
      <Endl />
      <Text>{' '.repeat('7')}</Text>
      <StatusItem name="state" value={compilerState} />
      <Endl />
      <StatusItem name="listening on" value={serverAddress} />
      <Endl />
    </Text>
  );
}

const styles = {
  statusName: {
    color: 'black',
    backgroundColor: 'cyan',
  },
  statusValue: {
    color: 'white',
  },
};
