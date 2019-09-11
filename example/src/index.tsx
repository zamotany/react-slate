import React from 'react';
// import { inspect } from 'util';
import {
  View,
  Text,
  Progress,
  Spinner,
  // renderToJson,
  // renderToString,
  render,
  // terminal,
  exit,
} from '../../packages/core';

const hello = 'Hello';

class Hello extends React.Component<{}, { counter: number }> {
  state = {
    counter: 1,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState(state => ({ counter: state.counter + 1 }));
    }, 1000);
  }

  render() {
    return (
      <View flexDirection="column">
        <Text>
          Test: {hello} {this.state.counter.toString()}
        </Text>
        <Progress
          value={(this.state.counter % 11) / 10}
          width={30}
          percentage
          barStyle={{ color: 'magenta' }}
          percentageStyle={{ color: 'blue', bold: true }}
        />
      </View>
    );
  }
}

const App = () => (
  <View alignItems="center" justifyContent="center" width="100%" height="100%">
    <View
      flexDirection="column"
      onClick={() => {
        exit();
      }}
    >
      <Hello />
      <View>
        <Text>ABC</Text>
      </View>
      <Progress value={0} width={20} percentage />
      <Progress value={0.1} width={20} percentage />
      <Progress value={0.4} width={20} percentage />
      <Progress
        value={0.5}
        width={20}
        percentage
        barStyle={{ color: 'green' }}
        percentageStyle={{ color: 'blue', bold: true }}
      />
      <Progress value={0.8} width={20} percentage />
      <Progress value={0.99} width={20} percentage />
      <Progress value={1} width={20} percentage />
      <View
        onLayout={layout => {
          console.log('onLayout', layout);
        }}
        onClick={evt => {
          console.log('lol', evt);
          return true;
        }}
      >
        <Text
          color="green"
          textTransform="uppercase"
          bold
          onClick={() => {
            console.log('lol2');
            return false;
          }}
        >
          Click here to exit
        </Text>
      </View>
      <View flexDirection="row" justifyContent="space-between" width={20}>
        <Spinner />
        <Spinner type="dots12" />
        <Spinner type="dots12" color="green" />
        <Spinner type="dots12" paused bgColor="blue" />
        <Spinner type="bouncingBar" interval={200} bold />
        <Spinner frames={['1', '2', '3']} interval={80} />
      </View>
    </View>
  </View>
);

render(<App />);

// (async () => {
//   for await (const snapshot of renderToString(<App />, {
//     width: terminal.width,
//     height: terminal.height,
//   })) {
//     console.log(snapshot);
//   }
// })();
