/* @flow */

import React from 'react';

import type { Style } from '../types';

import Chunk from '../nodes/ChunkNode';
import { getStyleProps } from '../utils/style';

type Props = {
  style?: Style,
  children: any,
};

export default function Text(props: Props) {
  const { children, style } = props;
  return (
    <Chunk.componentName {...getStyleProps(style)}>
      {children}
    </Chunk.componentName>
  );
}
