import React from 'react';
import Reconciler from 'react-reconciler';
import Renderer from '../Renderer';
import HostView from '../../nodes/View';
import Text from '../../../components/Text';
import View from '../../../components/View';
import createReconcilerConfig from '../../reconcilerConfig';

function render(
  element: JSX.Element,
  renderer: Renderer,
  { width, height }: { width: number; height: number }
) {
  const container = new HostView();

  const reconciler = Reconciler(
    createReconcilerConfig(container, () => {
      container.setLayoutStyle({ width, height });
      const layout = container.layoutNode.computeLayout({
        width,
        height,
      });
      container.notifyOnLayoutHook(layout, { offsetX: 0, offsetY: 0 });
      return renderer.renderDiff(container, layout);
    })
  );
  const node = reconciler.createContainer(container, false, false);
  reconciler.updateContainer(element, node, null, () => undefined);

  return container;
}

describe('Renderer', () => {
  it('should properly colorize cells with nested <Text>', () => {
    const renderer = new Renderer();
    render(
      <Text bold color="white">
        Hello <Text color="green">World</Text>
      </Text>,
      renderer,
      { width: 11, height: 1 }
    );

    renderer.pixels[0].slice(0, 6).forEach(cell => {
      expect(cell.style).toEqual({
        color: 'white',
        bgColor: undefined,
        modifiers: ['bold'],
        textTransform: undefined,
      });
    });
    renderer.pixels[0].slice(6).forEach(cell => {
      expect(cell.style).toEqual({
        color: 'green',
        bgColor: undefined,
        modifiers: ['bold'],
        textTransform: undefined,
      });
    });
  });

  it('should properly colorize cells with nested <View> and <Text>', () => {
    const renderer = new Renderer();
    render(
      <View bgColor="blue">
        <Text color="white">Hello</Text>
      </View>,
      renderer,
      { width: 5, height: 1 }
    );

    renderer.pixels[0].slice(0, 5).forEach(cell => {
      expect(cell.style).toEqual({
        color: 'white',
        bgColor: 'blue',
        modifiers: undefined,
        textTransform: undefined,
      });
    });
  });

  it('should properly colorize cells and overwrite styles with nested <Text>', () => {
    const renderer = new Renderer();
    render(
      <Text color="green">
        Hello <Text bold>World</Text>
      </Text>,
      renderer,
      { width: 11, height: 1 }
    );

    renderer.pixels[0].slice(0, 6).forEach(cell => {
      expect(cell.style).toEqual({
        color: 'green',
        bgColor: undefined,
        modifiers: undefined,
        textTransform: undefined,
      });
    });
    renderer.pixels[0].slice(6).forEach(cell => {
      expect(cell.style).toEqual({
        color: 'green',
        bgColor: undefined,
        modifiers: ['bold'],
        textTransform: undefined,
      });
    });
  });

  it('should properly colorize cells and overwrite styles with absolute View', () => {
    const renderer = new Renderer();
    render(
      <View>
        <View position="absolute" left={2} top={0}>
          <Text>Absolute</Text>
        </View>
        <Text color="green">
          Hello <Text bold>World</Text>
        </Text>
      </View>,
      renderer,
      { width: 11, height: 1 }
    );

    expect(renderer.pixels[0].map(cell => cell.char).join('')).toEqual(
      'HeAbsoluted'
    );
    renderer.pixels[0].slice(0, 2).forEach(cell => {
      expect(cell.style).toEqual({
        color: 'green',
        bgColor: undefined,
        modifiers: undefined,
        textTransform: undefined,
      });
    });
    renderer.pixels[0].slice(2, 10).forEach(cell => {
      expect(cell.style).toEqual({
        color: undefined,
        bgColor: undefined,
        modifiers: undefined,
        textTransform: undefined,
      });
    });
    renderer.pixels[0].slice(11).forEach(cell => {
      expect(cell.style).toEqual({
        color: 'green',
        bgColor: undefined,
        modifiers: ['bold'],
        textTransform: undefined,
      });
    });
  });

  it('should trim content', () => {
    const renderer = new Renderer();
    render(
      <View position="absolute" left={-2} top={-1} flexDirection="column">
        <Text>Top</Text>
        <Text>Middle</Text>
        <Text>Bottom</Text>
      </View>,
      renderer,
      { width: 6, height: 3 }
    );

    expect(renderer.pixels[0].map(cell => cell.char || ' ').join('')).toEqual(
      'ddle  '
    );
    expect(renderer.pixels[1].map(cell => cell.char || ' ').join('')).toEqual(
      'ttom  '
    );

    render(
      <View position="absolute" left={2} top={1} flexDirection="column">
        <Text>Top</Text>
        <Text>Middle</Text>
        <Text>Bottom</Text>
      </View>,
      renderer,
      { width: 6, height: 3 }
    );

    expect(renderer.pixels[0].map(cell => cell.char || ' ').join('')).toEqual(
      ' '.repeat(6)
    );
    expect(renderer.pixels[1].map(cell => cell.char || ' ').join('')).toEqual(
      '  Top '
    );
    expect(renderer.pixels[2].map(cell => cell.char || ' ').join('')).toEqual(
      '  Midd'
    );
  });
});
