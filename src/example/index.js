import React from 'react';
import { render, Chunk, Endl, Text } from '../';

class Counter extends React.Component {
  state = {
    counter: 0,
  };

  componentDidMount() {
    // console.log('Counter#componentDidMount');
    setInterval(() => {
      this.setState(state => ({ counter: state.counter + 1 }));
    }, 1000);
  }

  render() {
    // console.log('Counter#render');
    return (
      <Chunk id="c-r">
        <Chunk id="c-t">{'Time \n'}</Chunk>
        elapsed: {this.state.counter}
        {'s '}
      </Chunk>
    );
  }
}

function Test() {
  return [<Chunk>First</Chunk>, <Chunk>Second</Chunk>];
}

console.log(Endl);

render(
  <Chunk id="root">
    <Text color="green" endl>
      Hello world!
    </Text>
    <Text>{'\n'}</Text>
    <Counter />
    <Endl />
    fuck
    {' yeah '}
    <Test />
  </Chunk>,
  process.stdout
);
