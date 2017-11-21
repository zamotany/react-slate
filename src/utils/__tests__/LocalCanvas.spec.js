import LocalCanvas from '../LocalCanvas';

describe('utils/LocalCanvas', () => {
  it('should add paddings', () => {
    const localCanvas = new LocalCanvas({ width: 10, height: -1 });
    localCanvas.canvas.push('Text1', 'Text2');

    localCanvas.addPaddings({
      top: 2,
      bottom: 1,
      left: 3,
      right: 5,
    });

    expect(localCanvas.canvas).toEqual([
      ' '.repeat(10),
      ' '.repeat(10),
      '   Text1     ',
      '   Text2     ',
      ' '.repeat(10),
    ]);
  });

  it('should add margins', () => {
    const localCanvas = new LocalCanvas({ width: 10, height: -1 });
    localCanvas.canvas.push('Text1', 'Text2');

    localCanvas.addMargins({
      top: 2,
      bottom: 1,
      left: 3,
      right: 5,
    });

    expect(localCanvas.canvas).toEqual([
      '\0'.repeat(10),
      '\0'.repeat(10),
      '\0\0\0Text1\0\0\0\0\0',
      '\0\0\0Text2\0\0\0\0\0',
      '\0'.repeat(10),
    ]);
  });

  it('should normalize canvas', () => {
    let localCanvas = new LocalCanvas({ width: 8, height: -1 });
    localCanvas.canvas.push('\0Text1', 'T e x t 2');
    localCanvas.normalize();

    expect(localCanvas.canvas).toEqual(['\0Text1\0\0', 'T e x t ']);

    let prev = localCanvas.canvas;

    localCanvas = new LocalCanvas({ width: 8, height: 4 });
    localCanvas.canvas.push(...prev);
    localCanvas.normalize();

    expect(localCanvas.canvas).toEqual([
      '\0Text1\0\0',
      'T e x t ',
      '\0'.repeat(8),
      '\0'.repeat(8),
    ]);

    prev = localCanvas.canvas;
    localCanvas = new LocalCanvas({ width: 7, height: 3 });
    localCanvas.canvas.push(...prev);
    localCanvas.normalize();

    expect(localCanvas.canvas).toEqual([
      '\0Text1\0',
      'T e x t',
      '\0'.repeat(7),
    ]);
  });

  it('should stylize canvas', () => {
    const localCanvas = new LocalCanvas({
      width: -1,
      height: -1,
      style: {
        textTransform: 'uppercase',
      },
    });
    localCanvas.canvas.push('a', 'b');
    localCanvas.stylize();

    expect(localCanvas.canvas).toEqual(['A', 'B']);
  });

  it('should merge 2 LocalCanvases', () => {
    const localCanvas = new LocalCanvas({ width: -1, height: -1 });
    localCanvas.canvas.push('a', 'b', '');
    const nestedCanvas = new LocalCanvas({ width: -1, height: -1 });
    nestedCanvas.canvas.push('c', 'd');
    localCanvas.merge(nestedCanvas, { isInline: false });

    expect(localCanvas.canvas).toEqual(['a', 'b', 'c', 'd', '']);
  });

  it('should append TextNode', () => {
    const localCanvas = new LocalCanvas({ width: -1, height: -1 });
    localCanvas.appendTextNode({
      props: {
        children: 'Text1',
      },
    });
    localCanvas.appendTextNode({
      props: {
        children: 'Text2A\nText2B',
      },
    });

    expect(localCanvas.canvas).toEqual(['Text1Text2A', 'Text2B']);
  });
});
