import React from 'react';
import cliSpinners, { SpinnerName } from 'cli-spinners';
import { Text, TextProps } from '..';

type Props = {
  type?: SpinnerName;
  interval?: number;
  frames?: string[];
  paused?: boolean;
} & Omit<TextProps, 'children'>;

type State = {
  frame: string;
  index: number;
};

export default class Spinner extends React.Component<Props, State> {
  state = {
    frame: this.getAnimation().frames[0],
    index: 0,
  };

  intervalId?: NodeJS.Timeout;

  getAnimation() {
    const { type = 'dots', interval, frames } = this.props;

    if (frames && typeof interval !== 'number') {
      throw new Error(
        'Spinner: Interval property must be specified when using custom frames'
      );
    }

    if (
      typeof interval !== 'undefined' &&
      (typeof interval !== 'number' || isNaN(interval) || interval <= 0)
    ) {
      throw new Error(
        'Spinner: Interval property must be a number grater than 0'
      );
    }

    if (frames) {
      return {
        frames,
        interval: interval!,
      };
    }

    const spinner = cliSpinners[type];

    return {
      frames: spinner.frames,
      interval: interval || spinner.interval,
    };
  }

  start() {
    const { frames, interval } = this.getAnimation();
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.intervalId = setInterval(() => {
      this.setState((state: State, props: Props) => {
        if (props.paused) {
          return state;
        }

        const index =
          state.index === frames.length - 1
            ? 0
            : Math.min(state.index + 1, frames.length - 1);
        return { index, frame: frames[index] };
      });
    }, interval);
  }

  componentDidMount() {
    this.start();
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  render() {
    // eslint-disable-next-line
    const { frames, interval, type, paused, ...textStyle } = this.props;
    return (
      // <View>
      <Text {...textStyle}>{this.state.frame}</Text>
      /* </View> */
    );
  }
}
