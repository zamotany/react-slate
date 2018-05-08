/* @flow */

import React from 'react';
import { View } from '../../components';
import renderToString from '../renderToString';

describe('renderToString', () => {
  it('should render hello world to a single frame', async () => {
    const done = jest.fn();
    const snapshot = renderToString(<View>Hello World</View>, undefined, done);
    expect(done).toHaveBeenCalled();
    expect(snapshot).toMatch('Hello World');
  });

  it('should render counter to a multiple frames', async () => {
    class Counter extends React.Component<*, { counter: number }> {
      constructor(props) {
        super(props);
        this.state = {
          counter: 0,
        };
      }

      componentDidMount() {
        setInterval(() => {
          this.setState(state => ({ counter: state.counter + 1 }));
        }, 100);
      }

      render() {
        return <View>Counter: {this.state.counter}</View>;
      }
    }

    const snapshot = renderToString(<Counter />);
    expect(snapshot).toMatch('Counter: 0');
  });
});
