/* @flow */

import normalize from './normalize';
import type { StyleProps, BodyStyle, BorderProps } from '../../types';

export function makeBlockStyle(styleProps: ?StyleProps) {
  return styleProps && styleProps.backgroundColor
    ? {
        backgroundColor: styleProps.backgroundColor,
      }
    : null;
}

export function makeBorderStyle(
  borderProps: ?BorderProps,
  styleProps: ?StyleProps
) {
  return normalize({
    backgroundColor:
      (borderProps || {}).backgroundColor || (styleProps || {}).backgroundColor,
    color: (borderProps || {}).color || (styleProps || {}).color,
  });
}

export function makeInlineStyle(collectedStyleProps: BodyStyle[]) {
  return collectedStyleProps
    .filter(styleProps => Object.keys(styleProps).length)
    .reduce(
      (flatStyles, styleProps) => ({
        ...(flatStyles || {}),
        ...styleProps,
      }),
      null
    );
}
