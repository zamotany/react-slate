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

    expect(canvas).toEqual([
      '',
      '',
      '\0\0\0Text1\0\0\0\0\0',
      '\0\0\0Text2\0\0\0\0\0',
      '',
    ]);
  });

  it('should normalize strings', () => {
    const canvas = ['\0Text1', 'T e x t 2'];

    normalize(canvas, {
      width: 8,
    });

    expect(canvas).toEqual(['\0Text1\0\0', 'T e x t ']);

    normalize(canvas, {
      height: 4,
      width: 8,
    });

    expect(canvas).toEqual([
      '\0Text1\0\0',
      'T e x t ',
      '\0'.repeat(8),
      '\0'.repeat(8),
    ]);

    normalize(canvas, {
      height: 3,
      width: 7,
    });

    expect(canvas).toEqual(['\0Text1\0', 'T e x t', '\0'.repeat(7)]);
  });
});
