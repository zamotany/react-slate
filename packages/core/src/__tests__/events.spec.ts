import { EventListener, EventManager, EventTypes } from '../events';

describe('Event system', () => {
  it('should create lister tree with correct listenerCount', () => {
    const root = new EventListener();
    const child1 = new EventListener();
    const child1_1 = new EventListener();
    const child1_2 = new EventListener();
    const child1_2_1 = new EventListener();
    const child2 = new EventListener();

    child1_2.addChild(child1_2_1);
    child1.addChild(child1_1);
    child1.addChild(child1_2);
    root.addChild(child1);
    root.addChild(child2);

    child1_2_1.setOnClickListener(() => true);
    child1_2_1.setOnContextMenuListener(() => true);
    child1_2.setOnContextMenuListener(() => true);
    child2.setOnWheelListener(() => true);
    child2.setOnMouseMoveListener(() => true);

    expect(child1_2_1.listenerCount).toBe(2);
    expect(child1_2.listenerCount).toBe(3);
    expect(child1.listenerCount).toBe(3);
    expect(child2.listenerCount).toBe(2);
    expect(root.listenerCount).toBe(5);

    child1_2.removeChild(child1_2_1);
    expect(child1_2.findChild(child1_2_1)).toBe(-1);
    expect(child1_2.listenerCount).toBe(1);
    expect(child1.listenerCount).toBe(1);
    expect(root.listenerCount).toBe(3);

    child2.setOnWheelListener(undefined);
    child2.setOnMouseMoveListener(undefined);
    expect(child2.listenerCount).toBe(0);
    expect(root.listenerCount).toBe(1);

    child2.setOnWheelListener(undefined);
    child2.setOnMouseMoveListener(undefined);
    child2.setOnClickListener(undefined);
    child2.setOnContextMenuListener(undefined);
    expect(child2.listenerCount).toBe(0);
    expect(root.listenerCount).toBe(1);
  });

  it('should properly propagate event', () => {
    const root = new EventListener();
    const child1 = new EventListener();
    const child1_1 = new EventListener();
    const child1_2 = new EventListener();
    const child1_2_1 = new EventListener();
    const child2 = new EventListener();

    child1_2.addChild(child1_2_1);
    child1.addChild(child1_1);
    child1.addChild(child1_2);
    root.addChild(child1);
    root.addChild(child2);

    const child1_2_1Handler = jest.fn(() => false);
    const child1Handler = jest.fn(() => true);
    const rootHandler = jest.fn(() => true);

    child1_2_1.setOnClickListener(child1_2_1Handler);
    child1.setOnClickListener(child1Handler);
    root.setOnClickListener(rootHandler);

    const manager = new EventManager();
    manager.propagateEvent(
      EventTypes.MOUSE_LEFT_BUTTON_PRESSED,
      { test: true },
      root
    );

    expect(rootHandler).not.toHaveBeenCalled();
    expect(child1Handler).toHaveBeenCalledWith({ test: true });
    expect(child1_2_1Handler).toHaveBeenCalledWith({ test: true });
  });

  it('should not call onClick listener if validator return false', () => {
    const root = new EventListener();
    const child = new EventListener();

    root.addChild(child);
    const childHandler = jest.fn(() => true);
    child.setOnClickListener(childHandler);
    child.setOnClickValidator(() => false);

    const manager = new EventManager();
    manager.propagateEvent(
      EventTypes.MOUSE_LEFT_BUTTON_PRESSED,
      { test: true },
      root
    );

    expect(childHandler).not.toHaveBeenCalled();

    child.setOnClickValidator(() => true);
    manager.propagateEvent(
      EventTypes.MOUSE_LEFT_BUTTON_PRESSED,
      { test: true },
      root
    );
    expect(childHandler).toHaveBeenCalledTimes(1);
  });

  it('should swap listener without changing the listenerCount', () => {
    const root = new EventListener();
    const child = new EventListener();
    const manager = new EventManager();

    root.addChild(child);
    const childHandler1 = jest.fn(() => true);
    const childHandler2 = jest.fn(() => true);
    child.setOnClickListener(childHandler1);

    manager.propagateEvent(
      EventTypes.MOUSE_LEFT_BUTTON_PRESSED,
      { test: true },
      root
    );

    expect(childHandler1).toHaveBeenCalled();
    expect(root.listenerCount).toBe(1);
    expect(child.listenerCount).toBe(1);

    child.setOnClickListener(childHandler2);
    manager.propagateEvent(
      EventTypes.MOUSE_LEFT_BUTTON_PRESSED,
      { test: true },
      root
    );
    expect(childHandler1).toHaveBeenCalledTimes(1);
    expect(childHandler1).toHaveBeenCalledTimes(1);
    expect(root.listenerCount).toBe(1);
    expect(child.listenerCount).toBe(1);
  });
});
