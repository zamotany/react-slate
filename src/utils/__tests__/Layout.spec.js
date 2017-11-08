import { appendOffsets, normalize } from '../layout';

describe('utils/layout', () => {
  it('should append offsets', () => {
    const canvas = ['Text1', 'Text2'];

    appendOffsets(canvas, {
      top: 2,
      bottom: 1,
      left: 3,
      right: 5,
    });

    expect(canvas).toEqual(['', '', '   Text1     ', '   Text2     ', '']);
  });

  it('should normalize strings', () => {
    const canvas = [' Text1', 'T e x t 2'];

    normalize(canvas, {
      width: 8,
    });

    expect(canvas).toEqual([' Text1  ', 'T e x t ']);

    normalize(canvas, {
      height: 4,
      width: 8,
    });

    expect(canvas).toEqual([
      ' Text1  ',
      'T e x t ',
      ' '.repeat(8),
      ' '.repeat(8),
    ]);

    normalize(canvas, {
      height: 3,
      width: 7,
    });

    expect(canvas).toEqual([' Text1 ', 'T e x t', ' '.repeat(7)]);
  });
});
