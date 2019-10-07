import React from 'react';
import Reconciler from 'react-reconciler';
import createReconcilerConfig from '../../reconcilerConfig';
import View from '../View';
import Paragraph from '../Paragraph';
import ViewJsx from '../../../components/View';
import TextJsx from '../../../components/Text';
import { PositionType } from '../../../layout';
import { EventManager, EventTypes } from '../../../events';
import { MouseEvent } from '../../../types';

describe('View node', () => {
  it('should add child at the end', () => {
    const view = new View();
    const child1 = new View();
    const child2 = new View();

    view.appendChild(child1);
    view.appendChild(child2);
    expect(view.findChild(child1)).toBe(0);
    expect(view.findChild(child2)).toBe(1);
  });

  it('should add child after given position', () => {
    const view = new View();
    const child1 = new View();
    const child2 = new View();
    const child3 = new View();

    view.appendChild(child1);
    view.appendChild(child2);
    view.appendChild(child3, 0);
    expect(view.findChild(child1)).toBe(0);
    expect(view.findChild(child2)).toBe(2);
    expect(view.findChild(child3)).toBe(1);
  });

  it('should add child at the beginning', () => {
    const view = new View();
    const child1 = new View();
    const child2 = new View();

    view.appendChild(child1);
    view.prependChild(child2);
    expect(view.findChild(child1)).toBe(1);
    expect(view.findChild(child2)).toBe(0);
  });

  it('should add child before given position', () => {
    const view = new View();
    const child1 = new View();
    const child2 = new View();
    const child3 = new View();

    view.prependChild(child1);
    view.prependChild(child2);
    view.prependChild(child3, 1);
    expect(view.findChild(child1)).toBe(2);
    expect(view.findChild(child2)).toBe(0);
    expect(view.findChild(child3)).toBe(1);
  });

  it('should remove child', () => {
    const view = new View();
    const child = new View();

    view.appendChild(child);
    expect(view.findChild(child)).toBe(0);
    view.removeChild(child);
    expect(view.findChild(child)).toBe(-1);
  });

  it('should propagate layout info', () => {
    const view = new View();
    const child = new View();

    view.onLayoutHook = jest.fn();
    view.setLayoutStyle({ paddingStart: 1, paddingTop: 1 });
    view.appendChild(child);
    child.onLayoutHook = jest.fn();
    child.setLayoutStyle({ width: 10, height: 1 });

    const layout = view.layoutNode.computeLayout({ width: null, height: null });
    view.notifyOnLayoutHook(layout, { offsetX: 0, offsetY: 0 });
    expect(view.onLayoutHook).toHaveBeenCalledWith({
      x: 0,
      y: 0,
      z: 0,
      absolute: false,
      relativeX: 0,
      relativeY: 0,
      width: 11,
      height: 2,
    });
    expect(child.onLayoutHook).toHaveBeenCalledWith({
      x: 1,
      y: 1,
      z: 0,
      absolute: false,
      relativeX: 1,
      relativeY: 1,
      width: 10,
      height: 1,
    });
  });

  it('should bubble mouse click events', () => {
    const root = new View();
    const view = new View();
    const child1 = new View();
    const child2 = new View();
    const eventManager = new EventManager<MouseEvent>();

    const rootOnClick = jest.fn();
    const viewOnClick = jest.fn(() => true);
    const child1OnClick = jest.fn();
    const child2OnClick = jest.fn();

    root.eventListener.setOnClickListener(rootOnClick);
    view.eventListener.setOnClickListener(viewOnClick);
    child1.eventListener.setOnClickListener(child1OnClick);
    child1.setLayoutStyle({ width: 10, height: 1 });
    child2.eventListener.setOnClickListener(child2OnClick);
    child2.setLayoutStyle({ width: 10, height: 1 });

    root.appendChild(view);
    view.appendChild(child1);
    view.appendChild(child2);

    const layout = root.layoutNode.computeLayout({ width: null, height: null });
    root.notifyOnLayoutHook(layout, { offsetX: 0, offsetY: 0 });
    eventManager.propagateEvent(
      EventTypes.MOUSE_LEFT_BUTTON_PRESSED,
      {
        ctrl: false,
        alt: false,
        shift: false,
        code: 0,
        x: 4,
        y: 1,
      },
      root.eventListener
    );
    // expect(rootOnClick).not.toHaveBeenCalled();
    expect(viewOnClick).toHaveBeenCalled();
    expect(child1OnClick).toHaveBeenCalled();
    expect(child2OnClick).not.toHaveBeenCalled();
  });

  it("should set mark node and it's children  as absolute", () => {
    const view = new View();
    const child1 = new View();
    const child2 = new View();

    view.appendChild(child1);
    view.prependChild(child2);
    view.setLayoutStyle({
      positionType: PositionType.Absolute,
    });
    expect(view.isAbsolute).toBe(true);
    expect(view.zIndex).toBe(1);

    view.setLayoutStyle({
      positionType: PositionType.Absolute,
      zIndex: 2,
    });
    expect(view.isAbsolute).toBe(true);
    expect(view.zIndex).toBe(2);

    view.setLayoutStyle({
      positionType: PositionType.Relative,
      zIndex: 2,
    });
    expect(view.isAbsolute).toBe(false);
    expect(view.zIndex).toBe(0);
  });

  it('should have absolute properties set when created with reconciler', () => {
    const container = new View();
    const element = (
      <ViewJsx>
        <ViewJsx position="absolute" left={2} top={0}>
          <TextJsx>Absolute</TextJsx>
        </ViewJsx>
      </ViewJsx>
    );

    const reconciler = Reconciler(createReconcilerConfig(container, () => {}));
    const node = reconciler.createContainer(container, false, false);
    reconciler.updateContainer(element, node, null, () => undefined);

    expect(container.children[0].children[0].isAbsolute).toBe(true);
    expect(container.children[0].children[0].zIndex).toBe(1);
    expect(container.children[0].children[0].children[0]).toBeInstanceOf(
      Paragraph
    );
  });
});
