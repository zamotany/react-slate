import React from 'react';
// eslint-disable-next-line
import { Text, Endl, Spinner } from 'react-stream-renderer';

import Logo from './components/Logo';
import Status from './components/Status';
import Logs from './components/Logs';

function Hr({ style, width, char = '=' }) {
  return (
    <Text style={style} endl>
      {`${char}`.repeat(width)}
    </Text>
  );
}

function CompilerProgress() {
  return null;
}

function Shortcuts() {
  return null;
}

const width = process.stdout.columns;
const height = process.stdout.rows;

export default class HaulCLI extends React.Component {
  render() {
    return (
      <Text>
        <Logo width={width} />
        <Endl times={2} />
        <Hr width={width} style={styles.separator} />
        <Status
          compilerState={
            <Text>
              <Spinner interval={400} />
              {'  building  '}
              <Spinner />
            </Text>
          }
          serverAddress="http://localhost:8081"
        />
        <CompilerProgress />
        <Hr width={width} style={styles.separator} />
        <Logs
          maxHeight={height - 20}
          messages={[{ timestamp: Date.now(), text: 'Test log' }]}
        />
        <Hr width={width} style={styles.separator} />
        <Shortcuts />
      </Text>
    );
  }
}

const styles = {
  separator: {
    color: 'blue',
  },
};
