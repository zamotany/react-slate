// @flow

import React, { Children } from 'react';
import chalk from 'chalk';
import { Chunk, Endl } from './';

type Style = {|
  color?: string,
  backgroundColor?: string,
  fontWeight?: 'bold' | 'normal',
  fontStyle?: 'italic' | 'normal',
  textDecoration?: 'underline' | 'line-through' | 'normal',
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase',
  visibility?: 'visible' | 'hidden',
|};

type Props = {
  style?: Style,
  endl?: boolean,
  children: any,
};

function capitalize(text: string) {
  return text
    .split(' ')
    .map(t => t.charAt(0).toUpperCase() + t.slice(1))
    .join(' ');
}

function resolveColor(enhancer, color) {
  if (color) {
    if (color.startsWith('#')) {
      return enhancer.hex(color);
    } else if (color.startsWith('rgb')) {
      const rgb = color
        .replace(/[rgb()]/g, '')
        .split(',')
        .map(i => parseInt(i, 10));
      return enhancer.rgb(...rgb);
    }
    return enhancer.keyword(color);
  }
  return enhancer;
}

function resolveBackgroundColor(enhancer, color) {
  if (color) {
    if (color.startsWith('#')) {
      return enhancer.bgHex(color);
    } else if (color.startsWith('rgb')) {
      const rgb = color
        .replace(/[rgb()]/g, '')
        .split(',')
        .map(i => parseInt(i, 10));
      return enhancer.bgRgb(...rgb);
    }
    return enhancer.bgKeyword(color);
  }
  return enhancer;
}

function stylize(style: Style, text: string) {
  /* eslint-disable no-param-reassign */

  const { color, backgroundColor } = style;

  let enhancer = chalk.reset;

  enhancer = resolveBackgroundColor(enhancer, backgroundColor);
  enhancer = resolveColor(enhancer, color);

  if (style.fontWeight === 'bold') {
    enhancer = enhancer.bold;
  }

  if (style.fontStyle === 'italic') {
    enhancer = enhancer.italic;
  }

  if (style.textDecoration) {
    // eslint-disable-next-line default-case
    switch (style.textDecoration) {
      case 'underline':
        enhancer = enhancer.underline;
        break;
      case 'line-through':
        enhancer = enhancer.strikethrough;
        break;
    }
  }

  if (style.visibility === 'hidden') {
    enhancer = enhancer.hidden;
  }

  if (style.textTransform) {
    // eslint-disable-next-line default-case
    switch (style.textTransform) {
      case 'uppercase':
        text = text.toUpperCase();
        break;
      case 'lowercase':
        text = text.toLowerCase();
        break;
      case 'capitalize':
        text = capitalize(text);
        break;
    }
  }

  return enhancer(text);
}

export default function Text(props: Props) {
  const { children, style, endl } = props;

  return (
    <Chunk>
      {style
        ? Children.map(children, child => {
            if (typeof child === 'string' || typeof child === 'number') {
              return stylize(style, String(child));
            }

            if (child && child.type === Text) {
              return React.cloneElement(child, {
                style: child.props.style
                  ? { ...style, ...child.props.style }
                  : style,
              });
            }

            return child;
          })
        : children}
      {endl ? <Endl /> : null}
    </Chunk>
  );
}
