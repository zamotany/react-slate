/* @flow */

import Canvas from '../Canvas';

fdescribe('utils/Canvas', () => {
  it('should return layer canvas and generate it if needed', () => {
    const canvas = new Canvas({ width: 10, height: 3 });

    expect(canvas.atLayer(1)).toEqual([
      '\0'.repeat(10),
      '\0'.repeat(10),
      '\0'.repeat(10),
    ]);

    expect(canvas.atLayer(-2)).toEqual([
      '\0'.repeat(10),
      '\0'.repeat(10),
      '\0'.repeat(10),
    ]);

    canvas.atLayer(1)[1] = `Test${'\0'.repeat(6)}`;
    canvas.atLayer(-2)[1] = `Test${'\0'.repeat(6)}`;

    expect(canvas.atLayer(1)).toEqual([
      '\0'.repeat(10),
      `Test${'\0'.repeat(6)}`,
      '\0'.repeat(10),
    ]);

    expect(canvas.atLayer(-2)).toEqual([
      '\0'.repeat(10),
      `Test${'\0'.repeat(6)}`,
      '\0'.repeat(10),
    ]);
  });

  it('should flatten positive layers, negative layers and relative canvas', () => {
    const canvas = new Canvas({ width: 10, height: 4 });

    const relativeCanvas = ['', '\0Test\0', '\0'.repeat(10)];

    canvas.atLayer(-1)[0] = 'Text at -1';
    canvas.atLayer(-1)[1] = '.'.repeat(10);

    canvas.atLayer(1)[2] = 'Absolute  ';
    canvas.atLayer(2)[2] = '\0\0Absolute';

    expect(canvas.flatten(relativeCanvas)).toEqual([
      'Text at -1',
      '.Test.....',
      'AbAbsolute',
      ' '.repeat(10),
    ]);
  });
});
