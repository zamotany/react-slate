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
        const {
          stylizeArgs: { borderStyle, borderColor },
        } = getStyleProps({
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

    it('should prioritize borderColor property if border property exist', () => {
      function test(border, color, result) {
        const {
          stylizeArgs: { borderStyle, borderColor },
        } = getStyleProps({
          border,
          borderColor: color,
        });

        expect({ borderColor, borderStyle }).toEqual(result);
      }

      test('solid #ffffff', '#000', {
        borderStyle: 'solid',
        borderColor: '#000',
      });

      test('double #000', 'rgb(0, 0, 0)', {
        borderStyle: 'double',
        borderColor: 'rgb(0, 0, 0)',
      });
    });

    it('should prioritize borderStyle property if border property exist', () => {
      function test(border, style, result) {
        const {
          stylizeArgs: { borderStyle, borderColor },
        } = getStyleProps({
          border,
          borderStyle: style,
        });

        expect({ borderColor, borderStyle }).toEqual(result);
      }

      test('solid #ffffff', 'double', {
        borderStyle: 'double',
        borderColor: '#ffffff',
      });
    });
  });

  it('should correctly parse an array', () => {
    expect(getStyleProps([{ color: 'red' }])).toEqual(
      getStyleProps({ color: 'red' })
    );

    expect(getStyleProps([{ color: 'red' }, { color: 'blue' }])).toEqual(
      getStyleProps({ color: 'blue' })
    );

    expect(
      getStyleProps([
        { color: 'red' },
        { color: 'blue', backgroundColor: 'pink' },
        true && { marginBottom: 2 },
        undefined,
        null,
        false,
      ])
    ).toEqual(
      getStyleProps({ color: 'blue', backgroundColor: 'pink', marginBottom: 2 })
    );
  });
});
