// @flow

import React, { Children } from 'react';
import chalk from 'chalk';
import { Chunk, Endl } from './';

type Props = {
  children: any,
  color?: string | [number, number, number],
  endl?: boolean,
};

export default function Text(props: Props) {
  const { children, color, endl } = props;

  function colorize(text) {
    if (color && Array.isArray(color)) {
      return chalk.rgb(...color)(text);
    } else if (color && /#/.test(color)) {
      return chalk.hex(color)(text);
    } else if (color) {
      return chalk.keyword(color)(text);
    }
    return text;
  }

  return (
    <Chunk>
      {typeof color === 'undefined'
        ? children
        : Children.map(children, child => {
            if (typeof child === 'string') {
              return colorize(child);
            }

            if (typeof child.props.color === 'undefined') {
              return React.cloneElement(child, {
                color,
              });
            }

            return child;
          })}
      {endl ? <Endl /> : null}
    </Chunk>
  );
}
