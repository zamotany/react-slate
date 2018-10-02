/* @flow */

import colorette from 'colorette';
import memoize from 'fast-memoize';
import { withRgbColor, withRgbBackgroundColor } from './colors/rgb';
import { withHexColor, withHexBackgroundColor } from './colors/hex';
import { withKeywordColor, withKeywordBackgroundColor } from './colors/keyword';

colorette.enabled = process.env.CI ? true : colorette.enabled;

const CSI = '\u001b[';

const reset = memoize(
  (text: string) => (text ? `${CSI}0m${text}${CSI}0m` : text)
);

const capitalize = memoize(
  (text: string) => `${text[0].toUpperCase()}${text.slice(1)}`
);

const colorize = memoize(
  (color: string, isBackground: boolean, text: string) => {
    if (color === 'initial') {
      return reset(text);
    }

    if (color.startsWith('raw')) {
      const rawMatch = /raw\((.+)\)/.exec(color);
      if (rawMatch) {
        const [, rawColor] = rawMatch;
        const openCode = isBackground ? 48 : 38;
        const closeCode = openCode + 1;
        return `${CSI}${openCode};${rawColor}m${text}${CSI}${closeCode}m`;
      }

      return text;
    }

    if (color.startsWith('#')) {
      return isBackground
        ? withHexBackgroundColor(color, text)
        : withHexColor(color, text);
    } else if (color.startsWith('rgb')) {
      const rgbColorMatch = /rgb\((\d+),\s?(\d+),\s?(\d+)\)/.exec(color);
      if (rgbColorMatch) {
        const rgb = rgbColorMatch.slice(1, 4);
        return isBackground
          ? withRgbBackgroundColor(rgb, text)
          : withRgbColor(rgb, text);
      }

      const rgbKeywordMatch = /rgb\((.+)\)/.exec(color);
      if (rgbKeywordMatch) {
        return isBackground
          ? withKeywordBackgroundColor(rgbKeywordMatch[1], text)
          : withKeywordColor(rgbKeywordMatch[1], text);
      }

      return text;
    }
    try {
      return isBackground
        ? // $FlowFixMe
          colorette[`bg${capitalize(color)}`](text)
        : // $FlowFixMe
          colorette[color](text);
    } catch (error) {
      return text;
    }
  }
);

const applySingleStyle = memoize((key: string, value: string, text: string) => {
  switch (key) {
    case 'fontWeight':
      return value === 'bold' ? colorette.bold(text) : text;
    case 'fontStyle':
      return value === 'italic' ? colorette.italic(text) : text;
    case 'textDecoration': {
      switch (value) {
        case 'line-through':
          return colorette.strikethrough(text);
        case 'underline':
          return colorette.underline(text);
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
});

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

  return reset(output);
}
