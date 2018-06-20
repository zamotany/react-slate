/* @flow */

import React from 'react';

import type { Style } from '../types';

import Chunk from '../nodes/ChunkNode';
import { getStyleProps } from '../utils/style';

type Props = {
  style?: Style,
  children: mixed,
};

export default function View(props: Props) {
  const { children, style } = props;
  // $FlowFixMe
  const { internal_do_not_use_render } = props; // eslint-disable-line camelcase
  return (
    <Chunk.componentName
      {...getStyleProps(style)}
      internal_do_not_use_render={internal_do_not_use_render} // eslint-disable-line camelcase
    >
      {children}
    </Chunk.componentName>
  );
}
