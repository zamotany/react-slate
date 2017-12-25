/* @flow */

/**
 * `getBufferDiff` calculates damages as whole lines,
 * since determining difference on single char level
 * is too complex as the lines contain escape codes.
 * This means that the indexes between front and back buffers
 * might be different depending on styling and simply stripping
 * the codes from the string won't help - they are still
 * needed to be applied and at correct positions.
 */

type Damage = {
  content: string,
  x: number,
  y: number,
};

export default function getBufferDiff(
  backBuffer: string[],
  frontBuffer: string[]
) {
  const damages: Damage[] = [];

  for (let y = 0; y < frontBuffer.length; y++) {
    if (frontBuffer[y] !== backBuffer[y]) {
      damages.push({
        content: frontBuffer[y],
        x: 0,
        y,
      });
    }
  }

  return damages;
}
