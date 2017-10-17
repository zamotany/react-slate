import React from 'react';
// eslint-disable-next-line
import { Chunk, Endl, Text } from 'react-stream-renderer';

class Counter extends React.Component {
  state = {
    counter: 0,
  };

  componentDidMount() {
    // console.log('Counter#componentDidMount');
    setInterval(() => {
      this.setState(state => ({ counter: state.counter + 1 }));
    }, 5);
  }

  render() {
    // console.log('Counter#render');
    return (
      <Chunk id="c-r">
        <Chunk id="c-t">{'Time \n'}</Chunk>
        elapsed: {this.state.counter}
      </Chunk>
    );
  }
}

function Test() {
  return [<Chunk>First</Chunk>, <Chunk>Second</Chunk>];
}

export default () => (
  <Chunk id="root">
    <Text style={{ color: 'yellow', fontWeight: 'bold' }} endl>
      Some yellow and bold text {'\n'}
      <Text
        style={{ backgroundColor: 'rgb(230, 37, 101)', fontWeight: 'normal' }}
        endl
      >
        Text with hot pink background
      </Text>
      <Text style={{ textDecoration: 'underline' }} endl>
        Yellow, bold and underlined text
      </Text>
    </Text>
    <Text>{'\n'}</Text>
    <Counter />
    <Endl />
    heck
    {' yeah '}
    <Test />
  </Chunk>
);
