/* @flow */

type StyledChar = {
  content: string,
  style: string,
};

const RESET = '\u001b[0m';

export default function stringifyStyledAnsiChars(chars: StyledChar[]): string {
  let output = '';
  let lastStyle = null;

  for (let i = 0; i < chars.length; ++i) {
    const char = chars[i];
    if (char) {
      const { style, content } = char;
      let escapeCode = '';

      if (style !== lastStyle && style === '') {
        escapeCode = RESET;
        lastStyle = null;
      } else if (style !== lastStyle) {
        escapeCode = `${RESET}${style}`;
        lastStyle = style;
      }

      output += `${escapeCode}${content}`;
    }
  }

  return output;
}
