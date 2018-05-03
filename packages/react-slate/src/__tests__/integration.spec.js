/* @flow */

import React from 'react';
import { View } from '../components';
import renderToString from '../public/renderToString';

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

  it('should apply backgroundColor whole content with fixed height', () => {
    expect(
      renderToString(
        <View style={{ height: 4, backgroundColor: 'ansi-red' }}>
          Hello World
        </View>,
        {
          height: 6,
        }
      )
    ).toMatchSnapshot();

    expect(
      renderToString(
        <View style={{ height: 4, width: 12, backgroundColor: 'ansi-red' }}>
          Hello World
        </View>,
        {
          height: 6,
        }
      )
    ).toMatchSnapshot();
  });
});
