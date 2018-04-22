/* @flow */

import React from 'react';
import { View } from '../../components';
import renderToFrames from '../renderToFrames';

describe('renderToFrames', () => {
  it('should render hello world to a single frame', async () => {
    const done = jest.fn();
    const frames = await renderToFrames(
      <View>Hello World</View>,
      { count: 1 },
      done
    );
    expect(done).toHaveBeenCalled();
    expect(frames.length).toBe(1);
    expect(frames[0]).toMatch('Hello World');
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

    const frames = await renderToFrames(<Counter />, { count: 3 });
    expect(frames.length).toBe(3);
    expect(frames[0]).toMatch('Counter: 0');
    expect(frames[1]).toMatch('Counter: 1');
    expect(frames[2]).toMatch('Counter: 2');
  });
});
