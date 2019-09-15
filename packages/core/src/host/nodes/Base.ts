import shallowEqual from 'shallowequal';
import View from './View';
import { allocator, Node as LayoutNode } from '../../layout';
import {
  Style,
  OnLayoutHook,
  RectData,
  MouseEvent,
  OnClickHook,
} from '../../types';
import { Layout } from '../../layout';
import Paragraph from './Paragraph';
import ContainerBase from './ContainerBase';

export default class Base<C> {
  parent?: ContainerBase<any> | View | Paragraph;
  children: C[] = [];
  layoutNode = new LayoutNode(allocator, {});
  style?: Style;
  onLayoutHook?: OnLayoutHook;
  rect?: RectData;
  onClickHook?: OnClickHook;
  isAbsolute = false;
  zIndex = 0;

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

  notifyOnClickHook(event: MouseEvent) {
    if (
      this.onClickHook &&
      this.rect &&
      event.x - 1 >= this.rect.x &&
      event.x - 1 < this.rect.x + this.rect.width &&
      event.y - 1 >= this.rect.y &&
      event.y - 1 < this.rect.y + this.rect.height
    ) {
      return Boolean(this.onClickHook(event));
    }
    return false;
  }
}
