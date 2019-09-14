import * as colorette from 'colorette';
import fastMemoize from 'fast-memoize';
import {
  applyAnsiColor,
  applyHexBackgroundColor,
  applyHexColor,
  applyKeywordBackgroundColor,
  applyKeywordColor,
  applyRgbBackgroundColor,
  applyRgbColor,
  reset,
  CSI,
} from './colors';
import { capitalize } from '../../utils';
import { Style } from '../../types';

const colorize = fastMemoize(
  (color: string, isBackground: boolean, text: string): string => {
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
        ? applyHexBackgroundColor(color, text)
        : applyHexColor(color, text);
    } else if (color.startsWith('rgb')) {
      const rgbColorMatch = /rgb\((\d+),\s?(\d+),\s?(\d+)\)/.exec(color);
      if (rgbColorMatch) {
        const rgb = rgbColorMatch
          .slice(1, 4)
          .map((v: string) => parseInt(v, 10)) as [number, number, number];

        return isBackground
          ? applyRgbBackgroundColor(rgb, text)
          : applyRgbColor(rgb, text);
      }

      const rgbKeywordMatch = /rgb\((.+)\)/.exec(color);
      if (rgbKeywordMatch) {
        return isBackground
          ? applyKeywordBackgroundColor(rgbKeywordMatch[1].toLowerCase(), text)
          : applyKeywordColor(rgbKeywordMatch[1].toLowerCase(), text);
      }

      return text;
    }

    return isBackground
      ? applyAnsiColor(`bg${capitalize(color)}`, text)
      : applyAnsiColor(color, text);
  }
);

const applyModifier = fastMemoize((modifier: string, text: string) => {
  if (modifier in colorette) {
    return ((colorette as unknown) as {
      [key: string]: (text: string) => string;
    })[modifier](text);
  }
  return text;
});

export default function applyStyle(style: Style, text: string) {
  if (process.env.NO_COLOR) {
    return text;
  }

  const { color, bgColor, modifiers } = style;
  let output = modifiers
    ? modifiers.reduce(
        (acc: string, modifier: string) => applyModifier(modifier, acc),
        text
      )
    : text;

  // Special cases for color and background color, since `reset` will remove both color
  // and background color, we need to change ordering depending on which one has `initial` value,
  // so that we don't remove the other.
  if (color === 'initial' && bgColor && bgColor !== 'initial') {
    output = colorize(color, false, colorize(bgColor, true, output));
  } else if (bgColor === 'initial' && color && color !== 'initial') {
    output = colorize(bgColor, true, colorize(color, false, output));
  } else if (bgColor && bgColor !== 'initial' && color && color !== 'initial') {
    output = colorize(bgColor, true, colorize(color, false, output));
  } else if (bgColor) {
    output = colorize(bgColor, true, output);
  } else if (color) {
    output = colorize(color, false, output);
  }

  return reset(output);
}
