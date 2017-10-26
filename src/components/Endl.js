// @flow

import React from 'react';
import { Chunk } from './';

export default function Endl({ times }: { times?: number }) {
  return (
    <Chunk x={0} y={0} relative>
      {'\n'.repeat(times || 1)}
    </Chunk>
  );
}
