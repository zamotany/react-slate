import Base from '../Base';
import { Layout } from '../../../layout';

describe('Base node', () => {
  it('should call onLayout hook', () => {
    const base = new Base();
    const layout: Layout = {
      x: 1,
      y: 1,
      z: 0,
      absolute: false,
      width: 10,
      height: 2,
    } as any;

    base.onLayoutHook = jest.fn(rect => {
      expect(rect).toEqual({
        ...layout,
        relativeX: layout.x,
        relativeY: layout.y,
      });
    });

    base.notifyOnLayoutHook(layout, { offsetX: 0, offsetY: 0 });
    expect(base.onLayoutHook).toHaveBeenCalled();
  });

  it('should not call onLayout if the layout has not changed', () => {
    const base = new Base();
    const layout: Layout = {
      x: 1,
      y: 1,
      z: 0,
      absolute: false,
      width: 10,
      height: 2,
    } as any;

    base.onLayoutHook = jest.fn(rect => {
      expect(rect).toEqual({
        ...layout,
        relativeX: layout.x,
        relativeY: layout.y,
      });
    });

    base.notifyOnLayoutHook(layout, { offsetX: 0, offsetY: 0 });
    base.notifyOnLayoutHook(layout, { offsetX: 0, offsetY: 0 });
    expect(base.onLayoutHook).toHaveBeenCalledTimes(1);
  });

  it('should not call onLayout if it was not set', () => {
    const base = new Base();
    const layout: Layout = {
      x: 1,
      y: 1,
      z: 0,
      absolute: false,
      width: 10,
      height: 2,
    } as any;

    base.notifyOnLayoutHook(layout, { offsetX: 0, offsetY: 0 });
    expect(base.rect).toEqual({
      ...layout,
      relativeX: layout.x,
      relativeY: layout.y,
    });
  });

  it('should call onClick if mouse click is within bounds', () => {
    const base = new Base();
    base.rect = {
      x: 1,
      y: 1,
      z: 0,
      absolute: false,
      relativeX: 0,
      relativeY: 0,
      width: 10,
      height: 2,
    };
    base.onClickHook = jest.fn(event => {
      expect(event).toBeDefined();
      return true;
    });
    expect(
      base.notifyOnClickHook({
        code: 0,
        ctrl: false,
        shift: false,
        alt: false,
        x: 2,
        y: 2,
      })
    ).toBeTruthy();
    expect(base.onClickHook).toHaveBeenCalled();
  });

  it('should not call onClick if mouse click is outside of bounds', () => {
    const base = new Base();
    base.rect = {
      x: 1,
      y: 1,
      z: 0,
      absolute: false,
      relativeX: 0,
      relativeY: 0,
      width: 10,
      height: 2,
    };
    base.onClickHook = jest.fn(() => {
      throw new Error('should not been called');
    });
    expect(
      base.notifyOnClickHook({
        code: 0,
        ctrl: false,
        shift: false,
        alt: false,
        x: 3,
        y: 4,
      })
    ).toBeFalsy();
  });

  it('should not call if onClick was not set', () => {
    const base = new Base();
    base.rect = {
      x: 1,
      y: 1,
      z: 0,
      absolute: false,
      relativeX: 0,
      relativeY: 0,
      width: 10,
      height: 2,
    };
    expect(
      base.notifyOnClickHook({
        code: 0,
        ctrl: false,
        shift: false,
        alt: false,
        x: 2,
        y: 1,
      })
    ).toBeFalsy();
  });
});
