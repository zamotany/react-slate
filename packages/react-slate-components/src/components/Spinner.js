/* @flow */

import React from 'react';
import cliSpinners from 'cli-spinners';
import shallowEqual from 'shallowequal';
import { View } from '@react-slate/core';

type Props = {
  type?: string,
  interval?: number,
  frames?: string[],
  style?: any,
};
type State = {
  frame: number,
};

export default class Spinner extends React.Component<Props, State> {
  intervalId: * = -1;
  currentFrames: string[] = [' '];

  constructor(props: Props) {
    super(props);

    this.state = {
      frame: 0,
    };
  }

  // eslint-disable-next-line class-methods-use-this
  getAnimationFromProps(props: Props) {
    const { type = 'dots', interval, frames } = props;

    if (typeof interval === 'number' && interval <= 0) {
      throw new Error('Spinner: Interval property must be grater than 0');
    }

    if (frames) {
      if (!interval) {
        throw new Error(
          'Spinner: Interval property must be specified when using custom frames'
        );
      }

      return {
        frames,
        interval,
      };
    }

    const animation = cliSpinners[type];
    if (interval) {
      animation.interval = interval;
    }

    return animation;
  }

  initializeFramesAndStartCounter(props: Props) {
    const { frames, interval } = this.getAnimationFromProps(props);
    this.currentFrames = frames;
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => {
      const frame =
        this.state.frame + 1 >= frames.length ? 0 : this.state.frame + 1;
      this.setState(() => ({ frame }));
    }, interval);
  }

  componentDidMount() {
    this.initializeFramesAndStartCounter(this.props);
  }

  componentWillReceiveProps(nextProps: Props) {
    if (shallowEqual(this.props, nextProps)) {
      this.initializeFramesAndStartCounter(nextProps);
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { type, interval, frames, ...rest } = this.props;

    return (
      <View
        style={[
          { display: 'inline' },
          ...(Array.isArray(rest.style) ? rest.style : [rest.style || false]),
        ]}
      >
        {this.currentFrames[this.state.frame]}
      </View>
    );
  }
}
