/* @flow */

import React from 'react';
import { View, renderToString } from '../';

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

  it('should discard negative margins', () => {
    expect(
      renderToString(<View style={{ marginLeft: -2 }}>Hello World</View>, {
        height: 1,
      })
    ).toMatch(/^Hello World/);

    expect(
      renderToString(<View style={{ marginRight: -2 }}>Hello World</View>, {
        height: 1,
      })
    ).toMatch(/^Hello World/);

    expect(
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
    ).toMatch('Hello\nWorld');

    expect(
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
    ).toMatch('Hello\nWorld');
  });

  describe('with fixed positioning', () => {
    it('should left-trim if left is negative', () => {
      expect(
        renderToString(
          <View style={{ position: 'fixed', left: -2 }}>Hello</View>,
          {
            height: 1,
            width: 5,
          }
        )
      ).toMatch(/^llo/);
    });

    it('should correctly left-trim element with border', () => {
      expect(
        renderToString(
          <View style={{ position: 'fixed', left: -2, borderStyle: 'solid' }}>
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
          <View
            style={{ position: 'fixed', left: -2, border: 'solid ansi-red' }}
          >
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
        renderToString(
          <View style={{ position: 'fixed', left: 3 }}>Hello</View>,
          {
            height: 1,
            width: 5,
          }
        )
      ).toMatch(/\s{3}He$/);
    });
    it('should top-trim if top is negative', () => {
      expect(
        renderToString(
          <View style={{ position: 'fixed', top: -1 }}>{'Hello\nWorld'}</View>,
          {
            height: 2,
            width: 5,
          }
        )
      ).toMatch(`World\n${' '.repeat(5)}`);

      expect(
        renderToString(
          <View style={{ position: 'fixed', top: -1 }}>
            <View>Hello</View>
            <View>World</View>
          </View>,
          {
            height: 2,
            width: 5,
          }
        )
      ).toMatch(`World\n${' '.repeat(5)}`);
    });
    it('should top-trim if top + content height > canvas height', () => {
      expect(
        renderToString(
          <View style={{ position: 'fixed', top: 1 }}>{'Hello\nWorld'}</View>,
          {
            height: 2,
            width: 5,
          }
        )
      ).toMatch(`${' '.repeat(5)}\nHello`);

      expect(
        renderToString(
          <View style={{ position: 'fixed', top: 1 }}>
            <View>Hello</View>
            <View>World</View>
          </View>,
          {
            height: 2,
            width: 5,
          }
        )
      ).toMatch(`${' '.repeat(5)}\nHello`);
    });
  });
});
