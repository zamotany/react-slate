/* @flow */

import Layout from '../Layout';

describe('utils/Layout', () => {
  describe('with single-line text', () => {
    it('should generate layout from non-overlapping elements', () => {
      const elements = [
        {
          x: 0,
          y: 0,
          parentsOffsetX: 0,
          parentsOffsetY: 0,
          text: 'Text1',
        },
        {
          x: 2,
          y: 1,
          parentsOffsetX: 0,
          parentsOffsetY: 0,
          text: 'Text2',
        },
        {
          x: 0,
          y: 0,
          parentsOffsetX: 3,
          parentsOffsetY: 2,
          text: 'Text3',
        },
        {
          x: 3,
          y: 1,
          parentsOffsetX: 3,
          parentsOffsetY: 2,
          text: 'Text4',
        },
      ];

      const expectedOutput = [
        'Text1',
        '  Text2',
        '   Text3',
        '      Text4',
      ].join('\n');

      const layout = new Layout(elements);
      const output = layout.build();

      expect(output).toEqual(expectedOutput);
    });

    it('should generate layout from overlapping elements', () => {
      const elements = [
        {
          x: 0,
          y: 0,
          parentsOffsetX: 0,
          parentsOffsetY: 0,
          text: 'Text1',
        },
        {
          x: 2,
          y: 0,
          parentsOffsetX: 0,
          parentsOffsetY: 0,
          text: 'Text2',
        },
        {
          x: 2,
          y: 0,
          parentsOffsetX: 0,
          parentsOffsetY: 2,
          text: 'Text3',
        },
        {
          x: 4,
          y: 2,
          parentsOffsetX: 0,
          parentsOffsetY: 0,
          text: 'Text4',
        },
      ];

      const expectedOutput = ['TeText2', '', '  TeText4'].join('\n');

      const layout = new Layout(elements);
      const output = layout.build();

      expect(output).toEqual(expectedOutput);
    });
  });

  describe('with multi-line text', () => {
    it('should generate layout from elements', () => {
      const elements = [
        {
          x: 0,
          y: 0,
          parentsOffsetX: 0,
          parentsOffsetY: 0,
          text: 'Text1A\nText1B',
        },
        {
          x: 2,
          y: 1,
          parentsOffsetX: 0,
          parentsOffsetY: 0,
          text: 'Text2A\nText2B\nText2C',
        },
        {
          x: 0,
          y: 1,
          parentsOffsetX: 3,
          parentsOffsetY: 2,
          text: 'Text3\n',
        },
      ];

      const expectedOutput = [
        'Text1A',
        'TeText2A',
        '  Text2B',
        '  TText3',
        '   ',
      ].join('\n');

      const layout = new Layout(elements);
      const output = layout.build();

      expect(output).toEqual(expectedOutput);
    });
  });
});
