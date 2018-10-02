/* @flow */

import memoize from 'fast-memoize';
import supportsColor from 'supports-color';
import convert from 'color-convert';

const CSI = '\u001b[';
const RGB_OPEN = `${CSI}38`;
const RGB_BG_OPEN = `${CSI}48`;
const COLOR_CLOSE = `${CSI}39m`;
const BG_COLOR_CLOSE = `${CSI}49m`;
const BG_COLOR_OFFSET = 10;

export function create(level: number) {
  return {
    withRgbColor: memoize(
      {
        '1': (
          rgb: [number | string, number | string, number | string],
          text: string
        ) => {
          const code = convert.rgb.ansi16(rgb);
          return `${CSI}${code}m${text}${COLOR_CLOSE}`;
        },
        '2': (
          rgb: [number | string, number | string, number | string],
          text: string
        ) => `${RGB_OPEN};5;${convert.rgb.ansi256(rgb)}m${text}${COLOR_CLOSE}`,
        '3': (
          rgb: [number | string, number | string, number | string],
          text: string
        ) =>
          `${RGB_OPEN};2;${rgb[0]};${rgb[1]};${rgb[2]}m${text}${COLOR_CLOSE}`,
      }[level]
    ),
    withRgbBackgroundColor: memoize(
      {
        '1': (
          rgb: [number | string, number | string, number | string],
          text: string
        ) => {
          const code = convert.rgb.ansi16(rgb);
          return `${CSI}${code + BG_COLOR_OFFSET}m${text}${BG_COLOR_CLOSE}`;
        },
        '2': (
          rgb: [number | string, number | string, number | string],
          text: string
        ) =>
          `${RGB_BG_OPEN};5;${convert.rgb.ansi256(
            rgb
          )}m${text}${BG_COLOR_CLOSE}`,
        '3': (
          rgb: [number | string, number | string, number | string],
          text: string
        ) =>
          `${RGB_BG_OPEN};2;${rgb[0]};${rgb[1]};${
            rgb[2]
          }m${text}${BG_COLOR_CLOSE}`,
      }[level]
    ),
  };
}

export const { withRgbColor, withRgbBackgroundColor } = create(
  process.env.CI ? 1 : supportsColor.stdout.level
);
