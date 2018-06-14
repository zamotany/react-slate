/* @flow */

import React from 'react';

import type { Style } from '../types';

import Chunk from '../nodes/ChunkNode';
import { getStyleProps } from '../utils/style';

type Props = {
  style?: Style,
  children: mixed,
  render?: *,
};

export default function View(props: Props) {
  const { children, style, render } = props;
  return (
    <Chunk.componentName {...getStyleProps(style)} render={render}>
      {children}
    </Chunk.componentName>
  );
}
