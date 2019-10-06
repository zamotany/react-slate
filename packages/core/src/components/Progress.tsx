import React from 'react';
import { Text, View } from '..';
import { OnLayoutHook } from '../types';

export default class Progress extends React.Component<
  {
    value: number;
    percentage?: boolean;
    renderBar?: (children: string) => JSX.Element;
    renderPercentage?: (children: string) => JSX.Element;
  },
  { width: number }
> {
  state = {
    width: 0,
  };

  onLayout: OnLayoutHook = layout => {
    this.setState({ width: layout.width });
  };

  render() {
    const { percentage, renderBar, renderPercentage } = this.props;
    const { width } = this.state;
    const value = Math.max(0, Math.min(1, this.props.value));

    const percentageLength = this.props.percentage ? 5 : 0;
    const maxBarWith = width - 2 - percentageLength;
    const fillWidth = Math.max(0, Math.floor(value * maxBarWith));
    const offsetWidth = Math.max(0, maxBarWith - fillWidth - 1);
    const bar = `[${'='.repeat(fillWidth)}${value === 1 ? '' : '>'}${' '.repeat(
      offsetWidth
    )}]`;
    const percentageString = `${Math.floor(value * 100).toString()}%`;

    return (
      <View
        onLayout={this.onLayout}
        width="100%"
        justifyContent="space-between"
      >
        {width ? renderBar ? renderBar(bar) : <Text>{bar}</Text> : null}
        {width
          ? percentage &&
            (renderPercentage ? (
              renderPercentage(percentageString)
            ) : (
              <Text>{percentageString}</Text>
            ))
          : null}
      </View>
    );
  }
}
