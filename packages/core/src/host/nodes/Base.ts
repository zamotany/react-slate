import shallowEqual from 'shallowequal';
import ContainerBase from './ContainerBase';
import View from './View';
import Paragraph from './Paragraph';
import { allocator, Node as LayoutNode, Layout } from '../../layout';
import { EventListener } from '../../events';
import { Style, OnLayoutHook, RectData, MouseEvent } from '../../types';

export default class Base<C> {
  parent?: ContainerBase<any> | View | Paragraph;
  children: C[] = [];
  layoutNode = new LayoutNode(allocator, {});
  eventListener = new EventListener<MouseEvent>();
  style?: Style;
  onLayoutHook?: OnLayoutHook;
  rect?: RectData;
  isAbsolute = false;
  zIndex = 0;

  constructor() {
    this.eventListener.setValidator((_eventName, eventData: MouseEvent) => {
      return this.isWithinRect(eventData);
    });
  }

  private isWithinRect({ x, y }: { x: number; y: number }) {
    return Boolean(
      this.rect &&
        x - 1 >= this.rect.x &&
        x - 1 < this.rect.x + this.rect.width &&
        y - 1 >= this.rect.y &&
        y - 1 < this.rect.y + this.rect.height
    );
  }

  notifyOnLayoutHook(
    layout: Layout,
    { offsetX, offsetY }: { offsetX: number; offsetY: number }
  ) {
    const rect = {
      absolute: this.isAbsolute,
      z: this.zIndex,
      x: layout.x + offsetX,
      y: layout.y + offsetY,
      relativeX: layout.x,
      relativeY: layout.y,
      width: layout.width,
      height: layout.height,
    };

    if (!shallowEqual(this.rect, rect)) {
      this.rect = rect;
      if (this.onLayoutHook) {
        this.onLayoutHook(rect);
      }
    }
  }
}
