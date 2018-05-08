/**
 * Code taken from https://github.com/chalk/slice-ansi.
 * This is just a temporary solution.
 *
 * @TODO: make a PR to chalk/slice-ansi to support 256bit color.
 */

import isFullwidthCodePoint from 'is-fullwidth-code-point';
import astralRegex from 'astral-regex';
import ansiStyles from 'ansi-styles';

const ESCAPES = ['\u001B', '\u009B'];

const END_CODE = 39;

const wrapAnsi = code => `${ESCAPES[0]}[${code}m`;

module.exports = (str, begin, end) => {
  const arr = Array.from(str.normalize());
  // eslint-disable-next-line no-param-reassign
  end = typeof end === 'number' ? end : arr.length;

  let insideEscape = false;
  let escapeCode;
  let visible = 0;
  let output = '';

  for (const item of arr.entries()) {
    const i = item[0];
    const x = item[1];

    let leftEscape = false;

    if (ESCAPES.indexOf(x) !== -1) {
      insideEscape = true;
      const code = /\d[^m]*/.exec(str.slice(i, str.indexOf('m', i)));
      escapeCode = code === END_CODE ? null : code;
    } else if (insideEscape && x === 'm') {
      insideEscape = false;
      leftEscape = true;
    }

    if (!insideEscape && !leftEscape) {
      ++visible;
    }

    if (
      !astralRegex({ exact: true }).test(x) &&
      isFullwidthCodePoint(x.codePointAt())
    ) {
      ++visible;
    }

    if (visible > begin && visible <= end) {
      output += x;
    } else if (
      visible === begin &&
      !insideEscape &&
      escapeCode !== undefined &&
      escapeCode !== END_CODE
    ) {
      output += wrapAnsi(escapeCode);
    } else if (visible >= end) {
      if (escapeCode !== undefined) {
        output += wrapAnsi(
          ansiStyles.codes.get(parseInt(escapeCode, 10)) || END_CODE
        );
      }
      break;
    }
  }

  return output;
};
