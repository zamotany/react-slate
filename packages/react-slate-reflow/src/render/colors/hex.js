/* @flow */

import memoize from 'fast-memoize';
import convert from 'color-convert';
import supportsColor from 'supports-color';
import { create as createRgb } from './rgb';

export function create(level: number) {
  const { withRgbColor, withRgbBackgroundColor } = createRgb(level);
  return {
    withHexColor: memoize((color: string, text: string) =>
      withRgbColor(convert.hex.rgb(color), text)
    ),

    withHexBackgroundColor: memoize((color: string, text: string) =>
      withRgbBackgroundColor(convert.hex.rgb(color), text)
    ),
  };
}

export const { withHexColor, withHexBackgroundColor } = create(
  process.env.CI ? 1 : supportsColor.stdout.level
);
