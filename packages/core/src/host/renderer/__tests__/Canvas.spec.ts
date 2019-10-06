import Canvas from '../Canvas';
import View from '../../nodes/View';
import Text from '../../nodes/Text';
import { Layout } from '../../../layout';

describe('Canvas', () => {
  it('should fill pixels', () => {
    let canvas = new Canvas();
    let layout: Layout;

    const emptyView = new View();
    emptyView.setLayoutStyle({ width: 0, height: 0 });
    layout = emptyView.layoutNode.computeLayout({
      width: null,
      height: null,
    });

    canvas.resize(layout);
    canvas.fill(emptyView, layout, { z: 0 });
    expect(canvas.width).toBe(0);
    expect(canvas.height).toBe(0);
    expect(canvas.pixels).toEqual([]);

    canvas = new Canvas();
    const viewStyleless = new View();
    viewStyleless.setLayoutStyle({ width: 5, height: 2 });
    layout = viewStyleless.layoutNode.computeLayout({
      width: null,
      height: null,
    });

    canvas.resize(layout);
    canvas.fill(viewStyleless, layout, { z: 0 });
    expect(canvas.width).toBe(5);
    expect(canvas.height).toBe(2);
    const rowStyleless = new Array(5).fill(null).map(() => ({
      char: '',
      z: 0,
      style: {
        bgColor: undefined,
        color: undefined,
        modifiers: undefined,
      },
    }));
    expect(canvas.pixels).toEqual([rowStyleless, rowStyleless]);

    canvas = new Canvas();
    const viewStyled = new View();
    viewStyled.setLayoutStyle({ width: 5, height: 2 });
    viewStyled.style = { bgColor: 'red' };
    layout = viewStyled.layoutNode.computeLayout({
      width: null,
      height: null,
    });

    canvas.resize(layout);
    canvas.fill(viewStyled, layout, { z: 0 });
    expect(canvas.width).toBe(5);
    expect(canvas.height).toBe(2);
    const rowStyled = new Array(5).fill(null).map(() => ({
      char: '',
      z: 0,
      style: {
        color: undefined,
        bgColor: 'red',
        modifiers: undefined,
      },
    }));
    expect(canvas.pixels).toEqual([rowStyled, rowStyled]);
  });

  it('should fill pixels with body', () => {
    const canvas = new Canvas();
    const text = new Text();
    text.setBody('Hello World');
    text.style = { color: 'green' };
    const layout = text.layoutNode.computeLayout({
      width: null,
      height: null,
    });

    canvas.resize(layout);
    canvas.fill(text, layout, { z: 0 });
    expect(canvas.width).toBe(11);
    expect(canvas.height).toBe(1);
    expect(canvas.pixels).toEqual([
      new Array(11).fill(null).map((_, i) => ({
        char: 'Hello World'[i],
        z: 0,
        style: {
          color: 'green',
          bgColor: undefined,
          modifiers: undefined,
        },
      })),
    ]);
  });

  it('should fill pixels and trim on top-edge', () => {
    const canvas = new Canvas();
    const view = new View();
    const child = new View();
    view.setLayoutStyle({ paddingTop: -1 });
    child.setLayoutStyle({ width: 1, height: 2 });
    view.appendChild(child);
    const layout = view.layoutNode.computeLayout({
      width: null,
      height: null,
    });

    canvas.resize(layout.child(0));
    canvas.fill(child, layout.child(0), { z: 0 });
    expect(canvas.width).toBe(1);
    expect(canvas.height).toBe(1);
    expect(canvas.pixels).toEqual([
      [
        {
          char: '',
          z: 0,
          style: {
            color: undefined,
            bgColor: undefined,
            modifiers: undefined,
          },
        },
      ],
    ]);
  });

  it('should fill pixels and trim on left-edge', () => {
    const canvas = new Canvas();
    const view = new View();
    const child = new View();
    view.setLayoutStyle({ paddingStart: -1 });
    child.setLayoutStyle({ width: 2, height: 1 });
    view.appendChild(child);
    const layout = view.layoutNode.computeLayout({
      width: null,
      height: null,
    });

    canvas.resize(layout.child(0));
    canvas.fill(child, layout.child(0), { z: 0 });
    expect(canvas.width).toBe(1);
    expect(canvas.height).toBe(1);
    expect(canvas.pixels).toEqual([
      [
        {
          char: '',
          z: 0,
          style: {
            color: undefined,
            bgColor: undefined,
            modifiers: undefined,
          },
        },
      ],
    ]);
  });
});
