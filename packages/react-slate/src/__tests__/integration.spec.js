/* @flow */

import React from 'react';
import { View } from '../components';
import renderToString from '../renders/renderToString';

describe('in integration tests renderToString', () => {
  it('should apply backgroundColor to paddings', () => {
    expect(
      renderToString(
        <View style={{ padding: '2', backgroundColor: 'ansi-red' }}>
          Hello World
        </View>,
        {
          height: 6,
        }
      )
    ).toMatchSnapshot();
  });
});
