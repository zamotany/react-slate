/* @flow */

export default function alignText(
  text: string,
  { align }: { align: 'left' | 'center' | 'right' }
) {
  if (align === 'left') {
    return text;
  }

  const rawContent = text.replace(/\s*$/, '');
  if (align === 'right') {
    return `${' '.repeat(text.length - rawContent.length)}${rawContent}`;
  }

  const offset = (text.length - rawContent.length) / 2;
  return `${' '.repeat(Math.ceil(offset))}${rawContent}${' '.repeat(
    Math.floor(offset)
  )}`;
}
