import React from 'react';
import { Text, View, TextProps } from '..';

type PercentageStyle = Omit<TextProps, 'children'>;
type BarStyle = Omit<TextProps, 'children'>;

type Props = {
  value: number;
  width?: number;
  percentage?: boolean;
  percentageStyle?: PercentageStyle;
  barStyle?: BarStyle;
  renderPercentage?: (
    percentage: number,
    percentageStyle?: PercentageStyle
  ) => JSX.Element;
  renderBar?: (
    value: number,
    width: number,
    barStyle?: BarStyle
  ) => JSX.Element;
  renderContainer?: (children: JSX.Element[]) => JSX.Element;
};

export default function Progress(props: Props) {
  const value = Math.max(0, Math.min(1, props.value));
  const percentageValue = Math.floor(value * 100);
  const percentageElement = props.percentage
    ? (props.renderPercentage || renderPercentage)(
        percentageValue,
        props.percentageStyle
      )
    : null;
  const barElement = props.width
    ? (props.renderBar || renderBar)(value, props.width, props.barStyle)
    : null;
  return (props.renderContainer || renderContainer)([
    barElement,
    percentageElement,
  ].filter(Boolean) as JSX.Element[]);
}

function renderPercentage(
  percentage: number,
  percentageStyle?: PercentageStyle
) {
  const text = `${percentage.toString()}%`;
  return (
    <Text {...percentageStyle} key="progress-percentage">
      {' '.repeat(4 - text.length)}
      {text}
    </Text>
  );
}

function renderBar(value: number, width: number, barStyle?: BarStyle) {
  const barWidth = Math.floor(value * width);
  return (
    <View marginRight={1} key="progress-bar">
      {value === 1 ? (
        <Text {...barStyle}>[{'='.repeat(barWidth)}]</Text>
      ) : (
        <Text {...barStyle}>
          [{'='.repeat(barWidth)}
          {value === 1 ? '=' : '>'}
          {' '.repeat(width - barWidth - 1)}]
        </Text>
      )}
    </View>
  );
}

function renderContainer(children: JSX.Element[]) {
  return <View>{children}</View>;
}
