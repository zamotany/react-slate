// @flow

import React, { Children } from 'react';
import chalk from 'chalk';
import memoize from 'fast-memoize';
import { Chunk, getChunkNodeProps } from './';

type Style = {|
  color?: string,
  backgroundColor?: string,
  fontWeight?: 'bold' | 'normal',
  fontStyle?: 'italic' | 'normal',
  textDecoration?: 'underline' | 'line-through' | 'normal',
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase',
  visibility?: 'visible' | 'hidden',
  marginTop?: number,
  marginBottom?: number,
  marginLeft?: number,
  marginRight?: number,
|};

type Props = {
  style?: Style,
  children: any,
};

function capitalize(text: string) {
  return text
    .split(' ')
    .map(t => t.charAt(0).toUpperCase() + t.slice(1))
    .join(' ');
}

function colorize(enhance, bg: boolean, color?: string) {
  if (color) {
    if (color.startsWith('#')) {
      return bg ? enhance.bgHex(color) : enhance.hex(color);
    } else if (color.startsWith('rgb')) {
      const rgb = color
        .replace(/[rgb()]/g, '')
        .split(',')
        .map(i => parseInt(i, 10));
      return bg ? enhance.bgRgb(...rgb) : enhance.rgb(...rgb);
    } else if (color.startsWith('ansi-')) {
      const name = color.replace(/^ansi-/, '');
      return bg ? enhance[`bg${capitalize(name)}`] : enhance[name];
    }

    return bg ? enhance.bgKeyword(color) : enhance.keyword(color);
  }
  return enhance;
}

function stylize(style: Style, text: string) {
  /* eslint-disable no-param-reassign */

  const { color, backgroundColor } = style;

  let enhance = chalk.reset;

  enhance = colorize(enhance, false, color);
  enhance = colorize(enhance, true, backgroundColor);

  if (style.fontWeight === 'bold') {
    enhance = enhance.bold;
  }

  if (style.fontStyle === 'italic') {
    enhance = enhance.italic;
  }

  if (style.textDecoration) {
    // eslint-disable-next-line default-case
    switch (style.textDecoration) {
      case 'underline':
        enhance = enhance.underline;
        break;
      case 'line-through':
        enhance = enhance.strikethrough;
        break;
    }
  }

  if (style.visibility === 'hidden') {
    enhance = enhance.hidden;
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

  return enhance(text);
}

function stylizeChildren(children, style) {
  return Children.map(children, child => {
    if (typeof child === 'string' || typeof child === 'number') {
      return stylize(style, String(child));
    }

    if (child && child.type === Text) {
      return React.cloneElement(child, {
        style: child.props.style ? { ...style, ...child.props.style } : style,
      });
    }

    return child;
  });
}

const memoizedStylizeChildren = memoize(stylizeChildren);

export default function Text(props: Props) {
  // @TODO: memoize
  const { children, style } = props;
  return (
    <Chunk {...getChunkNodeProps(style)}>
      {style ? memoizedStylizeChildren(children, style) : children}
    </Chunk>
  );
}
