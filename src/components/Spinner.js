/* @flow */

import React from 'react';
import cliSpinners from 'cli-spinners';
// $FlowFixMe
import shallowEqual from 'fbjs/lib/shallowEqual';
import Text from './Text';
import { throwComponentError } from '../utils/throwError';

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
  intervalId: number = -1;
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
      throwComponentError('Interval property must be grater than 0', 'Spinner');
    }

    if (frames) {
      if (!interval) {
        throwComponentError(
          'Interval property must be specified when using custom frames',
          'Spinner'
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
    if (this.intervalId > 0) {
      clearInterval(this.intervalId);
    }
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
    return <Text {...rest}>{this.currentFrames[this.state.frame]}</Text>;
  }
}
