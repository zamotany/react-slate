import React from 'react';
import {
  View,
  Text,
  Progress,
  terminal,
  render,
  renderToString,
  useRenderStatic,
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
  const renderStatic = useRenderStatic();
  const [state, setState] = React.useState({ ios: 0, android: 0 });

  React.useEffect(() => {
    compiler.on('progress', ({ platform, value }) => {
      setState(state => ({ ...state, [platform]: value }));
    });

    compiler.on('log', ({ message }) => {
      renderStatic(<Log>{message}</Log>);
    });
  }, [compiler, renderStatic]);

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

terminal(
  renderToString(
    <View marginBottom={1}>
      <Text bold color="green">
        Starting...
      </Text>
    </View>
  ).snapshot
);
render(<Dash compiler={dataSource} />);
