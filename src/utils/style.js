/* @flow */

import chalk from 'chalk';

export function getStyleProps(style: any = {}) {
  const {
    display,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    height,
    width,
    ...rest
  } = style;
  const inline = display === 'inline';
  return {
    marginTop: marginTop || 0,
    marginBottom: marginBottom || 0,
    marginLeft: marginLeft || 0,
    marginRight: marginRight || 0,
    paddingTop: paddingTop || 0,
    paddingBottom: paddingBottom || 0,
    paddingLeft: paddingLeft || 0,
    paddingRight: paddingRight || 0,
    height: height || (inline ? 0 : -1),
    width: width || -1,
    inline,
    stylizeArgs: rest,
  };
}

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

export function createStylize(style: any = {}) {
  /* eslint-disable no-param-reassign */

  if (!Object.keys(style).length) {
    return function stylize(text: string) {
      return text;
    };
  }

  const { color, backgroundColor } = style;

  let enhance = colorize(chalk, false, color);
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

  return function stylize(text: string) {
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
  };
}
