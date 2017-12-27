/* @flow */

type StyledChar = {
  content: string,
  style: string,
};

const RESET = '\u001b[0m';

export default function stringifyStyledAnsiChars(chars: StyledChar[]): string {
  let output = '';
  let lastStyle = '';
  let needsTrailingReset = false;

  for (let i = 0; i < chars.length; ++i) {
    const char = chars[i];
    if (char) {
      const { style, content } = char;
      let escapeCode = '';
      const hasStyleChanged = style !== lastStyle;

      if (hasStyleChanged && style === '') {
        escapeCode = RESET;
        lastStyle = '';
      } else if (hasStyleChanged) {
        escapeCode = `${lastStyle !== '' ? RESET : ''}${style}`;
        lastStyle = style;
        needsTrailingReset = true;
      }

      output += `${escapeCode}${content}`;
    }
  }

  return `${output}${needsTrailingReset ? RESET : ''}`;
}
