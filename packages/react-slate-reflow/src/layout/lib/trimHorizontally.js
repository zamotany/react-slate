/* @flow */

/**
 * Trim value's length and optionally align the value.
 */
export default function trimHorizontally(
  maxLength: number,
  value: string,
  align?: 'left' | 'center' | 'right'
) {
  const availableWidth = maxLength;
  if (availableWidth > -1) {
    const trimmedValue = value.slice(0, availableWidth);
    switch (align) {
      case 'left':
      default: {
        return trimmedValue;
      }
      case 'center': {
        const fillLength = availableWidth - trimmedValue.length;
        const leftFillLength = Math.floor(fillLength / 2);
        const rightFillLength = fillLength - leftFillLength;
        const alignedValue = `${' '.repeat(
          leftFillLength
        )}${trimmedValue}${' '.repeat(rightFillLength)}`;
        return alignedValue;
      }
      case 'right': {
        const fillLength = availableWidth - trimmedValue.length;
        const alignedValue = `${' '.repeat(fillLength)}${trimmedValue}`;
        return alignedValue;
      }
    }
  }
  return value;
}
