import { getStyleProps } from '../style';

describe('utils/style', () => {
  describe('getStyleProps', () => {
    it('should split margin to separate properties', () => {
      function test(margin, top, right, bottom, left) {
        const {
          marginTop,
          marginBottom,
          marginLeft,
          marginRight,
        } = getStyleProps({
          margin,
        });

        expect(marginTop).toEqual(top);
        expect(marginBottom).toEqual(bottom);
        expect(marginLeft).toEqual(left);
        expect(marginRight).toEqual(right);
      }

      test('2 5 4 4', 2, 5, 4, 4);
      test('2 5 4', 2, 5, 4, 5);
      test('2 5', 2, 5, 2, 5);
      test('2', 2, 2, 2, 2);
      test('', 0, 0, 0, 0);
    });

    it('should split border to separate properties', () => {
      function test(border, style, color) {
        const { stylizeArgs: { borderStyle, borderColor } } = getStyleProps({
          border,
        });

        expect(borderStyle).toEqual(style);
        expect(borderColor).toEqual(color);
      }

      test('solid black', 'solid', 'black');
      test('solid rgb(0, 0, 0)', 'solid', 'rgb(0, 0, 0)');
      test('double #ffffff', 'double', '#ffffff');
      test('solid #ffffff', 'solid', '#ffffff');
      test('invalid #ffffff', 'none', '');
      test('invalid', 'none', '');
      test('', 'none', '');
    });
  });
});
