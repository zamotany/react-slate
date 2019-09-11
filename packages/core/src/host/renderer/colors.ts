import fastMemoize from 'fast-memoize';
import colorette from 'colorette';
import ansiStyles from 'ansi-styles';
import * as supportsColor from 'supports-color';
import colorConvert from 'color-convert';
import { KEYWORD } from 'color-convert/conversions';

colorette.options.enabled = process.env.CI ? true : colorette.options.enabled;

export const CSI = '\u001b[';

export const reset = fastMemoize((text: string) =>
  text ? `${CSI}0m${text}${CSI}0m` : text
);

export function applyAnsiColor(color: string, text: string): string {
  if (color in colorette) {
    return ((colorette as unknown) as {
      [key: string]: (text: string) => string;
    })[color](text);
  }
  return text;
}

export function applyRgbColor(
  [r, g, b]: [number, number, number],
  text: string,
  level: number = supportsColor.stdout.level
): string {
  switch (level) {
    case 1:
      return `${ansiStyles.color.ansi.rgb(r, g, b)}${text}${
        ansiStyles.color.close
      }`;
    case 2:
      return `${ansiStyles.color.ansi256.rgb(r, g, b)}${text}${
        ansiStyles.color.close
      }`;
    case 3:
      return `${ansiStyles.color.ansi16m.rgb(r, g, b)}${text}${
        ansiStyles.color.close
      }`;
    default:
      return text;
  }
}

export function applyRgbBackgroundColor(
  [r, g, b]: [number, number, number],
  text: string,
  level: number = supportsColor.stdout.level
): string {
  switch (level) {
    case 1:
      return `${ansiStyles.bgColor.ansi.rgb(r, g, b)}${text}${
        ansiStyles.bgColor.close
      }`;
    case 2:
      return `${ansiStyles.bgColor.ansi256.rgb(r, g, b)}${text}${
        ansiStyles.bgColor.close
      }`;
    case 3:
      return `${ansiStyles.bgColor.ansi16m.rgb(r, g, b)}${text}${
        ansiStyles.bgColor.close
      }`;
    default:
      return text;
  }
}

export function applyHexColor(
  color: string,
  text: string,
  level: number = supportsColor.stdout.level
): string {
  return applyRgbColor(colorConvert.hex.rgb(color), text, level);
}

export function applyHexBackgroundColor(
  color: string,
  text: string,
  level: number = supportsColor.stdout.level
): string {
  return applyRgbBackgroundColor(colorConvert.hex.rgb(color), text, level);
}

export function applyKeywordColor(
  color: string,
  text: string,
  level: number = supportsColor.stdout.level
): string {
  try {
    return applyRgbColor(
      colorConvert.keyword.rgb((color as unknown) as KEYWORD),
      text,
      level
    );
  } catch (error) {
    return text;
  }
}

export function applyKeywordBackgroundColor(
  color: string,
  text: string,
  level: number = supportsColor.stdout.level
): string {
  try {
    return applyRgbBackgroundColor(
      colorConvert.keyword.rgb((color as unknown) as KEYWORD),
      text,
      level
    );
  } catch (error) {
    return text;
  }
}
