/* @flow */

import React from 'react';
import stripAnsi from 'strip-ansi';
import { View, renderToString } from '../';

describe('in integration tests renderToString', () => {
  it('should apply backgroundColor to paddings', () => {
    expect(
      renderToString(
        <View style={{ padding: '2', backgroundColor: 'red' }}>
          Hello World
        </View>,
        {
          height: 6,
        }
      )
    ).toMatchSnapshot();
  });

  it('should apply backgroundColor to whole content with fixed height', () => {
    expect(
      renderToString(
        <View style={{ height: 4, backgroundColor: 'red' }}>Hello World</View>,
        {
          height: 6,
        }
      )
    ).toMatchSnapshot();

    expect(
      renderToString(
        <View style={{ height: 4, width: 12, backgroundColor: 'red' }}>
          Hello World
        </View>,
        {
          height: 6,
        }
      )
    ).toMatchSnapshot();
  });

  it('should discard negative margins', () => {
    expect(
      stripAnsi(
        renderToString(<View style={{ marginLeft: -2 }}>Hello World</View>, {
          height: 1,
        })
      )
    ).toMatch(/^Hello World/);

    expect(
      stripAnsi(
        renderToString(<View style={{ marginRight: -2 }}>Hello World</View>, {
          height: 1,
        })
      )
    ).toMatch(/^Hello World/);

    expect(
      stripAnsi(
        renderToString(
          <View>
            <View>Hello</View>
            <View style={{ marginTop: -1 }}>World</View>
          </View>,
          {
            height: 2,
            width: 5,
          }
        )
      )
    ).toMatch('Hello\nWorld');

    expect(
      stripAnsi(
        renderToString(
          <View>
            <View style={{ marginBottom: -1 }}>Hello</View>
            <View>World</View>
          </View>,
          {
            height: 2,
            width: 5,
          }
        )
      )
    ).toMatch('Hello\nWorld');
  });

  describe('with absolute positioning', () => {
    it('should left-trim if left is negative', () => {
      expect(
        stripAnsi(
          renderToString(
            <View style={{ position: 'absolute', left: -2 }}>Hello</View>,
            {
              height: 1,
              width: 5,
            }
          )
        )
      ).toMatch(/^llo/);
    });

    it('should correctly left-trim element with border', () => {
      expect(
        renderToString(
          <View
            style={{ position: 'absolute', left: -2, borderStyle: 'solid' }}
          >
            Hello
          </View>,
          {
            height: 3,
            width: 7,
          }
        )
      ).toMatchSnapshot();

      expect(
        renderToString(
          <View style={{ position: 'absolute', left: -2, border: 'solid red' }}>
            Hello
          </View>,
          {
            height: 3,
            width: 7,
          }
        )
      ).toMatchSnapshot();
    });

    it('should right-trim if left + content width > canvas width', () => {
      expect(
        stripAnsi(
          renderToString(
            <View style={{ position: 'absolute', left: 3 }}>Hello</View>,
            {
              height: 1,
              width: 5,
            }
          )
        )
      ).toMatch(/\s{3}He$/);
    });

    it('should top-trim if top is negative', () => {
      expect(
        stripAnsi(
          renderToString(
            <View style={{ position: 'absolute', top: -1 }}>
              <View>Hello</View>
              <View>World</View>
            </View>,
            {
              height: 2,
              width: 5,
            }
          )
        )
      ).toMatch('World');
    });
    it('should top-trim if top + content height > canvas height', () => {
      expect(
        stripAnsi(
          renderToString(
            <View style={{ position: 'absolute', top: 1 }}>
              <View>Hello</View>
              <View>World</View>
            </View>,
            {
              height: 2,
              width: 5,
            }
          )
        )
      ).toMatch(`\nHello`);
    });
  });
});
