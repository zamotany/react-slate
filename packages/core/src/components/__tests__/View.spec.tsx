import React from 'react';
import View, { reduceLayoutStyle } from '../View';
import Text from '../Text';
import renderToJson from '../../renderToJson';

const LAYOUT_STYLE_DEFAULTS = {
  display: 0,
  positionType: 0,
  flexDirection: 0,
  flexWrap: undefined,
  overflow: 1,
  alignItems: undefined,
  alignSelf: undefined,
  alignContent: undefined,
  justifyContent: undefined,
  start: undefined,
  end: undefined,
  top: undefined,
  bottom: undefined,
  marginStart: undefined,
  marginEnd: undefined,
  marginTop: undefined,
  marginBottom: undefined,
  paddingStart: undefined,
  paddingEnd: undefined,
  paddingTop: undefined,
  paddingBottom: undefined,
  flexGrow: undefined,
  flexShrink: undefined,
  flexBasis: undefined,
  width: undefined,
  height: undefined,
  minWidth: undefined,
  minHeight: undefined,
  maxWidth: undefined,
  maxHeight: undefined,
  zIndex: 0,
};

describe('View component', () => {
  it('should render children', () => {
    expect(
      renderToJson(
        <View flexDirection="column" width="100%">
          <View
            width="100%"
            flexDirection="row"
            justifyContent="center"
            bgColor="green"
          >
            <Text>Hello</Text>
          </View>
          <Text>World</Text>
        </View>,
        {
          width: 13,
          height: 2,
        }
      ).snapshot
    ).toEqual({
      node: 'View',
      children: [
        {
          node: 'View',
          children: [
            {
              node: 'View',
              children: [
                {
                  node: 'Text',
                  body: 'Hello',
                  width: 5,
                  height: 1,
                  x: 4,
                  y: 0,
                  style: {
                    color: undefined,
                    bgColor: undefined,
                    modifiers: undefined,
                  },
                },
              ],
              width: 13,
              height: 1,
              x: 0,
              y: 0,
              style: { bgColor: 'green' },
            },
            {
              node: 'Text',
              body: 'World',
              width: 5,
              height: 1,
              x: 0,
              y: 1,
              style: {
                color: undefined,
                bgColor: undefined,
                modifiers: undefined,
              },
            },
          ],
          width: 13,
          height: 2,
          x: 0,
          y: 0,
          style: { bgColor: undefined },
        },
      ],
      width: 13,
      height: 2,
      x: 0,
      y: 0,
      style: undefined,
    });
  });

  describe('should map flexbox props to layout style object', () => {
    it('from defaults', () => {
      expect(reduceLayoutStyle({ children: [] })).toEqual(
        LAYOUT_STYLE_DEFAULTS
      );
    });

    it('should set absolute position', () => {
      expect(reduceLayoutStyle({ children: [], position: 'absolute' })).toEqual(
        {
          ...LAYOUT_STYLE_DEFAULTS,
          positionType: 1,
          zIndex: 1,
        }
      );
    });

    it('should set display none', () => {
      expect(reduceLayoutStyle({ children: [], display: 'none' })).toEqual({
        ...LAYOUT_STYLE_DEFAULTS,
        display: 1,
      });
    });

    it('should set flex properties', () => {
      expect(
        reduceLayoutStyle({
          children: [],
          flexDirection: 'column',
          flexWrap: 'no-wrap',
          alignItems: 'center',
          alignContent: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
        })
      ).toEqual({
        ...LAYOUT_STYLE_DEFAULTS,
        alignContent: 2,
        alignItems: 2,
        alignSelf: 3,
        flexDirection: 1,
        flexWrap: 0,
        justifyContent: 2,
      });
    });
  });
});
