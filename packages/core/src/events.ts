export enum EventTypes {
  MOUSE_LEFT_BUTTON_PRESSED = 'MOUSE_LEFT_BUTTON_PRESSED',
  MOUSE_RIGHT_BUTTON_PRESSED = 'MOUSE_RIGHT_BUTTON_PRESSED',
  MOUSE_WHEEL = 'MOUSE_WHEEL',
  MOUSE_MOTION = 'MOUSE_MOTION',
}

export class EventManager<E> {
  private propagate = (
    name: EventTypes,
    eventData: E,
    rootListener: EventListener<E>
  ): boolean => {
    if (rootListener.listenerCount <= 0) {
      return false;
    }

    const handled = rootListener.children.some(child =>
      this.propagate(name, eventData, child)
    );
    if (handled) {
      return true;
    }

    const handler = rootListener.listeners[name];
    const validator = rootListener.validators[name];
    if (typeof handler === 'function' && (!validator || validator(eventData))) {
      return Boolean(handler(eventData));
    }

    return false;
  };

  propagateEvent(
    name: EventTypes,
    eventData: E,
    rootListener: EventListener<E>
  ) {
    return this.propagate(name, eventData, rootListener);
  }
}

export type EventHandler<E> = (eventData: E) => boolean;

export class EventListener<E> {
  parent?: EventListener<E>;
  children: EventListener<E>[] = [];
  listeners: {
    [eventName: string]: EventHandler<E> | undefined;
  } = {};
  validators: {
    [eventName: string]: EventHandler<E> | undefined;
  } = {};
  listenerCount: number = 0;

  private updateListenerCount(value: number) {
    this.listenerCount += value;
    if (this.parent) {
      this.parent.updateListenerCount(value);
    }
  }

  addChild(child: EventListener<E>) {
    child.parent = this;
    this.children.push(child);
    this.updateListenerCount(child.listenerCount);
  }

  findChild(child: EventListener<E>) {
    return this.children.indexOf(child);
  }

  removeChild(child: EventListener<E>) {
    child.parent = undefined;
    const index = this.findChild(child);
    this.children.splice(index, 1);
    this.updateListenerCount(-child.listenerCount);
  }

  private setListener(eventName: EventTypes, listener?: EventHandler<E>) {
    // If both values are undefined or the same, do nothing.
    if (this.listeners[eventName] === listener) {
      return;
    }

    // If both values are not undefined, swap for new listener without changing the count.
    if (this.listeners[eventName] && listener) {
      this.listeners[eventName] = listener;
    } else {
      // If initial listener is added or listener is removed, update the count.
      this.updateListenerCount(listener ? 1 : -1);
      this.listeners[eventName] = listener;
    }
  }

  setOnClickListener(listener?: EventHandler<E>): void {
    this.setListener(EventTypes.MOUSE_LEFT_BUTTON_PRESSED, listener);
  }

  setOnClickValidator(validator?: EventHandler<E>): void {
    this.validators[EventTypes.MOUSE_LEFT_BUTTON_PRESSED] = validator;
  }

  setOnContextMenuListener(listener?: EventHandler<E>): void {
    this.setListener(EventTypes.MOUSE_RIGHT_BUTTON_PRESSED, listener);
  }

  setOnWheelListener(listener?: EventHandler<E>): void {
    this.setListener(EventTypes.MOUSE_WHEEL, listener);
  }

  setOnMouseMoveListener(listener?: EventHandler<E>): void {
    this.setListener(EventTypes.MOUSE_MOTION, listener);
  }
}
