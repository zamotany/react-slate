// @flow

import React from 'react';
import { Chunk } from './';

export default function Endl({ times }: { times?: number }) {
  return <Chunk>{'\n'.repeat(times || 1)}</Chunk>;
}
