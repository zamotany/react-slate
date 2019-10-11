import React from 'react';
import {
  View,
  Text,
  Progress,
  renderToString,
  terminal,
} from '../../packages/core';
import { EventEmitter } from 'events';
import DayJs from 'dayjs';

//#region data_source

const dataSource = new EventEmitter();
const emitLogs = () => {
  setTimeout(() => {
    dataSource.emit('log', { message: 'New log :)' });
    emitLogs();
  }, Math.random() * (5000 - 1000) + 1000);
};
emitLogs();
const emitProgress = (platform: string, value: number = 0) => {
  setTimeout(() => {
    dataSource.emit('progress', { platform, value: value + 0.05 });
    emitProgress(platform, value + 0.05);
  }, Math.random() * (500 - 10) + 10);
};
emitProgress('ios');

//#endregion data_source

function Log({ children }: { children: string }) {
  return (
    <View>
      <View marginRight={1}>
        <Text bold color="gray">
          [{DayJs().format('HH:mm:ss:SSS')}]
        </Text>
      </View>
      <View marginRight={1}>
        <Text bold>info</Text>
      </View>
      <Text>▶︎</Text>
      <View marginLeft={1}>
        <Text>{children}</Text>
      </View>
    </View>
  );
}

function Compilation({
  label,
  maxLabelWidth,
  value,
}: {
  label: string;
  maxLabelWidth: number;
  value: number;
}) {
  return (
    <View width="100%">
      <View minWidth={maxLabelWidth}>
        <Text bold>{label}</Text>
      </View>
      <View marginLeft={2} marginRight={2} minWidth={7}>
        <Text italic>{value === 0 ? 'idle' : 'running'}</Text>
      </View>
      <Progress value={value} percentage />
    </View>
  );
}

function Dash({ compiler }: { compiler: EventEmitter }) {
  const [state, setState] = React.useState({ ios: 0, android: 0 });
  React.useEffect(() => {
    compiler.on('progress', ({ platform, value }) => {
      setState(state => ({ ...state, [platform]: value }));
    });
  }, [compiler]);

  return (
    <View flexDirection="column" paddingTop={1} width="100%">
      <Text color="green" bold>
        Compilations:
      </Text>
      <View flexDirection="column" width="90%">
        <Compilation label="iOS" maxLabelWidth={7} value={state.ios} />
        <Compilation label="Android" maxLabelWidth={7} value={state.android} />
      </View>
    </View>
  );
}

(async () => {
  terminal(
    renderToString(
      <View marginBottom={1}>
        <Text bold color="green">
          Starting...
        </Text>
      </View>
    ).snapshot
  );

  dataSource.on('log', ({ message }) => {
    const { snapshot: log } = renderToString(<Log>{message}</Log>);
    terminal.moveTo(0, lineAboveDash);
    terminal('\n' + log + '\n');
    terminal(lastDashSnapshot);
  });

  let firstDashRender = true;
  let lastDashSnapshot = '';
  let lineAboveDash = 0;

  for await (const snapshot of renderToString(<Dash compiler={dataSource} />, {
    width: terminal.width,
  })) {
    lastDashSnapshot = snapshot || '';
    if (firstDashRender) {
      firstDashRender = false;
      terminal(snapshot);
    } else {
      const dashHeight = (snapshot || '').split('\n').length;
      lineAboveDash = terminal.height - dashHeight;
      terminal.moveTo(0, lineAboveDash + 1);
      terminal.eraseDisplayBelow();
      terminal(snapshot);
    }
  }
})();
