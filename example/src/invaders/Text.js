/* @flow */

import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Text as NativeText } from 'react-stream-renderer';

export default function Text({ x, y, ...rest }: *) {
  return (
    <NativeText
      style={{ position: 'fixed', left: Math.floor(x * 4), top: Math.floor(y) }}
      {...rest}
    />
  );
}
