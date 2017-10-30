/* @flow */

import * as React from 'react';
import dedent from 'dedent';
import Text from './Text';

type CharacterSet = {
  horizontal: string,
  vertical: string,
  topLeft: string,
  topRight: string,
  bottomLeft: string,
  bottomRight: string,
};

const sets: { [key: string]: CharacterSet } = {
  solid: {
    horizontal: '─',
    vertical: '│',
    topLeft: '┌',
    topRight: '┐',
    bottomLeft: '└',
    bottomRight: '┘',
  },
  double: {
    horizontal: '═',
    vertical: '║',
    topLeft: '╔',
    topRight: '╗',
    bottomLeft: '╚',
    bottomRight: '╝',
  },
};

type Style = {|
  height?: number,
  width?: number,
  borderStyle?: $Keys<typeof sets>,
  borderColor?: string,
  backgroundColor?: string,
  visibility?: 'visible' | 'hidden',
|};

type Props = {|
  x: number,
  y: number,
  style?: Style,
|};

export default class Box extends React.Component<Props> {
  render() {
    const { x, y, style } = this.props;
    const { height = 2, width = 2, borderStyle, borderColor } = style || {};
    const border = sets[borderStyle || 'solid'];

    return (
      <Text x={x} y={y} style={{ color: borderColor }}>
        {dedent`
        ${border.topLeft}${border.horizontal.repeat(
          width - 1
        )}${border.topRight}
        ${`${border.vertical}${' '.repeat(width - 1)}${border.vertical}\n`
          .repeat(height - 1)
          .trim()}
        ${border.bottomLeft}${border.horizontal.repeat(
          width - 1
        )}${border.bottomRight}
      `}
      </Text>
    );
  }
}
