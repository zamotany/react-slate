import React from 'react';
import { render, Node } from '../';

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
      <Node>
        <Node>{'Time \n'}</Node>
        elapsed: {this.state.counter}s
      </Node>
      // [<Node>First</Node>, <Node>Second</Node>]
    );
  }
}

render(
  <Node>
    <Node>Hello world!</Node>
    <Node>{'\n'}</Node>
    <Counter />
  </Node>,
  process.stdout
);
