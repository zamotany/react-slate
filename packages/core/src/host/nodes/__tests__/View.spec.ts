import View from '../View';

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
      relativeX: 0,
      relativeY: 0,
      width: 11,
      height: 2,
    });
    expect(child.onLayoutHook).toHaveBeenCalledWith({
      x: 1,
      y: 1,
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

    root.onClickHook = jest.fn();
    view.onClickHook = jest.fn(() => true);
    child1.onClickHook = jest.fn();
    child1.setLayoutStyle({ width: 10, height: 1 });
    child2.onClickHook = jest.fn();
    child2.setLayoutStyle({ width: 10, height: 1 });

    root.appendChild(view);
    view.appendChild(child1);
    view.appendChild(child2);

    const layout = root.layoutNode.computeLayout({ width: null, height: null });
    root.notifyOnLayoutHook(layout, { offsetX: 0, offsetY: 0 });
    root.notifyOnClickHook({
      ctrl: false,
      alt: false,
      shift: false,
      code: 0,
      x: 4,
      y: 1,
    });
    expect(root.onClickHook).not.toHaveBeenCalled();
    expect(view.onClickHook).toHaveBeenCalled();
    expect(child1.onClickHook).toHaveBeenCalled();
    expect(child2.onClickHook).not.toHaveBeenCalled();
  });
});
