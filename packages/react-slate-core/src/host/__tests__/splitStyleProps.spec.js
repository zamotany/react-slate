import splitStyleProps from '../splitStyleProps';

describe('splitStyleProps', () => {
  describe('getStyleProps', () => {
    it('should split margin to separate properties', () => {
      function test(margin, top, right, bottom, left) {
        const {
          layoutProps: { marginTop, marginBottom, marginLeft, marginRight },
        } = splitStyleProps({
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
      expect(splitStyleProps({ margin: '' }).layoutProps).toBeNull();
    });

    it('should split border to separate properties', () => {
      function test(border, style, expectedColor, bgColor) {
        const {
          borderProps: { thickness, color, backgroundColor },
        } = splitStyleProps({
          border,
        });

        expect(thickness).toEqual(style);
        expect(color).toEqual(expectedColor);
        expect(backgroundColor).toEqual(bgColor);
      }

      test('solid black red', 'single-line', 'black', 'red');
      test('solid rgb(0, 0, 0)', 'single-line', 'rgb(0, 0, 0)', undefined);
      test('solid rgb(0,0,0)', 'single-line', 'rgb(0,0,0)', undefined);
      test('double #ffffff', 'double-line', '#ffffff', undefined);
      test(
        'solid #ffffff rgb(255, 255, 255)',
        'single-line',
        '#ffffff',
        'rgb(255, 255, 255)'
      );
      expect(
        splitStyleProps({ border: 'invalid #ffffff' }).layoutProps
      ).toBeNull();
      expect(splitStyleProps({ border: 'invalid' }).layoutProps).toBeNull();
    });

    it('should prioritize borderColor property if border property exist', () => {
      function test(border, color, result) {
        const { borderProps } = splitStyleProps({
          border,
          borderColor: color,
        });

        expect(borderProps).toEqual(result);
      }

      test('solid #ffffff', '#000', {
        thickness: 'single-line',
        color: '#000',
      });

      test('double #000', 'rgb(0, 0, 0)', {
        thickness: 'double-line',
        color: 'rgb(0, 0, 0)',
      });
    });

    it('should prioritize borderStyle property if border property exist', () => {
      function test(border, style, result) {
        const { borderProps } = splitStyleProps({
          border,
          borderStyle: style,
        });

        expect(borderProps).toEqual(result);
      }

      test('solid #ffffff', 'double', {
        thickness: 'double-line',
        color: '#ffffff',
      });
    });

    it('should prioritize borderBackgroundColor property if border property exist', () => {
      function test(border, bgColor, result) {
        const { borderProps } = splitStyleProps({
          border,
          borderBackgroundColor: bgColor,
        });

        expect(borderProps).toEqual(result);
      }

      test('solid #ffffff #ffffff', '#000000', {
        thickness: 'single-line',
        backgroundColor: '#000000',
        color: '#ffffff',
      });
    });
  });

  it('should correctly parse an array', () => {
    expect(splitStyleProps([{ color: 'red' }])).toEqual(
      splitStyleProps({ color: 'red' })
    );

    expect(splitStyleProps([{ color: 'red' }, { color: 'blue' }])).toEqual(
      splitStyleProps({ color: 'blue' })
    );

    expect(
      splitStyleProps([
        { color: 'red' },
        { color: 'blue', backgroundColor: 'pink' },
        true && { marginBottom: 2 },
        undefined,
        null,
        false,
      ])
    ).toEqual(
      splitStyleProps({
        color: 'blue',
        backgroundColor: 'pink',
        marginBottom: 2,
      })
    );
  });
});
