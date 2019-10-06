import Canvas from '../Canvas';
import View from '../../nodes/View';
import Text from '../../nodes/Text';
import { Layout, FlexDirection } from '../../../layout';

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

    canvas.fill(emptyView, layout, { parentZ: 0 });
    expect(canvas.width).toBe(0);
    expect(canvas.height).toBe(0);
    expect(canvas.x).toBe(0);
    expect(canvas.y).toBe(0);
    expect(canvas.pixels).toEqual([]);

    canvas = new Canvas();
    const viewStyleless = new View();
    viewStyleless.setLayoutStyle({ width: 5, height: 2 });
    layout = viewStyleless.layoutNode.computeLayout({
      width: null,
      height: null,
    });

    canvas.fill(viewStyleless, layout, { parentZ: 0 });
    expect(canvas.width).toBe(5);
    expect(canvas.height).toBe(2);
    expect(canvas.x).toBe(0);
    expect(canvas.y).toBe(0);
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

    canvas.fill(viewStyled, layout, { parentZ: 0 });
    expect(canvas.width).toBe(5);
    expect(canvas.height).toBe(2);
    expect(canvas.x).toBe(0);
    expect(canvas.y).toBe(0);
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

    canvas.fill(text, layout, { parentZ: 0 });
    expect(canvas.width).toBe(11);
    expect(canvas.height).toBe(1);
    expect(canvas.x).toBe(0);
    expect(canvas.y).toBe(0);
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
    const canvasView = new Canvas();
    const canvasText1 = new Canvas();
    const canvasText2 = new Canvas();

    const view = new View();
    view.style = { bgColor: 'gray' };
    view.setLayoutStyle({
      paddingTop: -1,
      paddingBottom: 1,
      paddingStart: 2,
      paddingEnd: 2,
      flexDirection: FlexDirection.Column,
    });

    const text1 = new Text();
    text1.setBody('Hello');
    text1.style = { color: 'green' };
    const text2 = new Text();
    text2.setBody('World');
    text2.style = { color: 'red' };

    view.appendChild(text1);
    view.appendChild(text2);
    const layout = view.layoutNode.computeLayout({
      width: null,
      height: null,
    });

    canvasView.fill(view, layout, { parentZ: 0 });
    canvasText1.fill(text1, layout.child(0), { parentZ: 0 });
    canvasText2.fill(text2, layout.child(1), { parentZ: 0 });
    canvasView.mergeChildCanvas(canvasText1);
    canvasView.mergeChildCanvas(canvasText2);

    expect(canvasView.width).toBe(9);
    expect(canvasView.height).toBe(2);
    expect(canvasView.x).toBe(0);
    expect(canvasView.y).toBe(0);
    expect(canvasView.pixels).toMatchSnapshot();
  });

  it('should fill pixels and trim on bottom-edge', () => {
    const canvasView = new Canvas();
    const canvasText1 = new Canvas();
    const canvasText2 = new Canvas();

    const view = new View();
    view.style = { bgColor: 'gray' };
    view.setLayoutStyle({
      height: 1,
      flexDirection: FlexDirection.Column,
    });

    const text1 = new Text();
    text1.setBody('Hello');
    text1.style = { color: 'green' };
    const text2 = new Text();
    text2.setBody('World');
    text2.style = { color: 'red' };

    view.appendChild(text1);
    view.appendChild(text2);
    const layout = view.layoutNode.computeLayout({
      width: null,
      height: null,
    });

    canvasView.fill(view, layout, { parentZ: 0 });
    canvasText1.fill(text1, layout.child(0), { parentZ: 0 });
    canvasText2.fill(text2, layout.child(1), { parentZ: 0 });
    canvasView.mergeChildCanvas(canvasText1);
    canvasView.mergeChildCanvas(canvasText2);

    expect(canvasView.width).toBe(5);
    expect(canvasView.height).toBe(1);
    expect(canvasView.x).toBe(0);
    expect(canvasView.y).toBe(0);
    expect(canvasView.pixels).toMatchSnapshot();
  });

  it('should fill pixels and trim on left-edge', () => {
    const canvasView = new Canvas();
    const canvasText1 = new Canvas();
    const canvasText2 = new Canvas();

    const view = new View();
    view.style = { bgColor: 'gray' };
    view.setLayoutStyle({
      paddingTop: 1,
      paddingBottom: 1,
      paddingStart: -2,
      flexDirection: FlexDirection.Column,
    });

    const text1 = new Text();
    text1.setBody('Hello');
    text1.style = { color: 'green' };
    const text2 = new Text();
    text2.setBody('World');
    text2.style = { color: 'red' };

    view.appendChild(text1);
    view.appendChild(text2);
    const layout = view.layoutNode.computeLayout({
      width: null,
      height: null,
    });

    canvasView.fill(view, layout, { parentZ: 0 });
    canvasText1.fill(text1, layout.child(0), { parentZ: 0 });
    canvasText2.fill(text2, layout.child(1), { parentZ: 0 });
    canvasView.mergeChildCanvas(canvasText1);
    canvasView.mergeChildCanvas(canvasText2);

    expect(canvasView.width).toBe(3);
    expect(canvasView.height).toBe(4);
    expect(canvasView.x).toBe(0);
    expect(canvasView.y).toBe(0);
    expect(canvasView.pixels).toMatchSnapshot();
  });

  it('should fill pixels and trim on right-edge', () => {
    const canvasView = new Canvas();
    const canvasText1 = new Canvas();
    const canvasText2 = new Canvas();

    const view = new View();
    view.style = { bgColor: 'gray' };
    view.setLayoutStyle({
      width: 4,
      flexDirection: FlexDirection.Column,
    });

    const text1 = new Text();
    text1.setBody('Hello');
    text1.style = { color: 'green' };
    const text2 = new Text();
    text2.setBody('World');
    text2.style = { color: 'red' };

    view.appendChild(text1);
    view.appendChild(text2);
    const layout = view.layoutNode.computeLayout({
      width: null,
      height: null,
    });

    canvasView.fill(view, layout, { parentZ: 0 });
    canvasText1.fill(text1, layout.child(0), { parentZ: 0 });
    canvasText2.fill(text2, layout.child(1), { parentZ: 0 });
    canvasView.mergeChildCanvas(canvasText1);
    canvasView.mergeChildCanvas(canvasText2);

    expect(canvasView.width).toBe(4);
    expect(canvasView.height).toBe(2);
    expect(canvasView.x).toBe(0);
    expect(canvasView.y).toBe(0);
    expect(canvasView.pixels).toMatchSnapshot();
  });

  it('should merge canvases', () => {
    const canvasView = new Canvas();
    const canvasText = new Canvas();

    const view = new View();
    view.style = { bgColor: 'gray' };
    view.setLayoutStyle({
      paddingTop: 1,
      paddingBottom: 1,
      paddingStart: 2,
      paddingEnd: 2,
    });

    const text = new Text();
    text.setBody('Hello World');
    text.style = { color: 'green' };

    view.appendChild(text);
    const layout = view.layoutNode.computeLayout({
      width: null,
      height: null,
    });
    canvasView.fill(view, layout, { parentZ: 0 });
    canvasText.fill(text, layout.child(0), { parentZ: 0 });
    canvasView.mergeChildCanvas(canvasText);

    expect(canvasView.width).toBe(15);
    expect(canvasView.height).toBe(3);
    expect(canvasView.x).toBe(0);
    expect(canvasView.y).toBe(0);

    const emptyRow = new Array(15).fill(null).map((_, i) => ({
      char: '',
      z: 0,
      style: {
        color: undefined,
        bgColor: 'gray',
        modifiers: undefined,
      },
    }));
    expect(canvasView.pixels[0]).toEqual(emptyRow);
    expect(canvasView.pixels[1]).toEqual(
      new Array(15).fill(null).map((_, i) => ({
        char: i > 1 && i < 13 ? 'Hello World'[i - 2] : '',
        z: 0,
        style: {
          color: i > 1 && i < 13 ? 'green' : undefined,
          bgColor: 'gray',
          modifiers: undefined,
        },
      }))
    );
    expect(canvasView.pixels[2]).toEqual(emptyRow);
  });
});
