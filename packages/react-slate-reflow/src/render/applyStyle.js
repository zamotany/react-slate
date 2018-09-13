/* @flow */

import chalk from 'chalk';

chalk.enabled = process.env.CI ? true : chalk.enabled;
chalk.level = process.env.CI ? 1 : chalk.level;

function capitalize(text: string) {
  return `${text[0].toUpperCase()}${text.slice(1)}`;
}

function colorize(color: string, isBackground: boolean, text: string) {
  if (color === 'initial') {
    return chalk.reset(text);
  }

  if (color.startsWith('raw')) {
    const rawMatch = /raw\((.+)\)/.exec(color);
    if (rawMatch) {
      const [, rawColor] = rawMatch;
      const openCode = isBackground ? 48 : 38;
      const closeCode = openCode + 1;
      const CSI = '\u001b[';
      return `${CSI}${openCode};${rawColor}m${text}${CSI}${closeCode}m`;
    }

    return text;
  }

  if (color.startsWith('#')) {
    return isBackground ? chalk.bgHex(color)(text) : chalk.hex(color)(text);
  } else if (color.startsWith('rgb')) {
    const rgbColorMatch = /rgb\((\d+),\s?(\d+),\s?(\d+)\)/.exec(color);
    if (rgbColorMatch) {
      const [r, g, b] = rgbColorMatch.slice(1, 4).map(e => parseInt(e, 10));
      return isBackground
        ? chalk.bgRgb(r, g, b)(text)
        : chalk.rgb(r, g, b)(text);
    }

    const rgbKeywordMatch = /rgb\((.+)\)/.exec(color);
    if (rgbKeywordMatch) {
      return isBackground
        ? chalk.bgKeyword(rgbKeywordMatch[1])(text)
        : chalk.keyword(rgbKeywordMatch[1])(text);
    }

    return text;
  }
  try {
    return isBackground
      ? // $FlowFixMe
        chalk[`bg${capitalize(color)}`](text)
      : // $FlowFixMe
        chalk[color](text);
  } catch (error) {
    return text;
  }
}

function applySingleStyle(key: string, value: string, text: string) {
  switch (key) {
    case 'fontWeight':
      return value === 'bold' ? chalk.bold(text) : text;
    case 'fontStyle':
      return value === 'italic' ? chalk.italic(text) : text;
    case 'textDecoration': {
      switch (value) {
        case 'line-through':
          return chalk.strikethrough(text);
        case 'underline':
          return chalk.underline(text);
        default:
          return text;
      }
    }
    case 'textTransform': {
      switch (value) {
        case 'uppercase':
          return text.toUpperCase();
        case 'lowercase':
          return text.toLowerCase();
        case 'capitalize':
          return capitalize(text);
        default:
          return text;
      }
    }
    default:
      return text;
  }
}

export default function applyStyle(
  style: { [key: string]: string },
  text: string
) {
  const { color, backgroundColor, ...rest } = style;
  let output = Object.keys(rest).reduce(
    (acc, key) => applySingleStyle(key, style[key], acc),
    text
  );

  // Special cases for color and background color, since `reset` will remove both color
  // and background color, we need to change ordering depending on which one has `initial` value,
  // so that we don't remove the other.
  if (color === 'initial' && backgroundColor && backgroundColor !== 'initial') {
    output = colorize(color, false, colorize(backgroundColor, true, output));
  } else if (backgroundColor === 'initial' && color && color !== 'initial') {
    output = colorize(backgroundColor, true, colorize(color, false, output));
  } else if (
    backgroundColor &&
    backgroundColor !== 'initial' &&
    color &&
    color !== 'initial'
  ) {
    output = colorize(backgroundColor, true, colorize(color, false, output));
  } else if (backgroundColor) {
    output = colorize(backgroundColor, true, output);
  } else if (color) {
    output = colorize(color, false, output);
  }

  return chalk.reset(output);
}
