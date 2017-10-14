import React from 'react';
import { render, Chunk } from '../';

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

render(
  <Chunk id="root">
    <Chunk id="hw">Hello world!</Chunk>
    <Chunk id="nl">{'\n'}</Chunk>
    <Counter />
    fuck
    {' yeah '}
    <Test />
  </Chunk>,
  process.stdout
);
