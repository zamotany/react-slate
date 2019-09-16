import assert from 'assert';
import Base from './Base';
import { Layout } from '../../layout';

export default class ContainerBase<C extends Base<any>> extends Base<C> {
  findChild(child: C) {
    return this.children.indexOf(child);
  }

  private updateLayoutNode() {
    // Remove all previous children layout nodes.
    // After each removal `childCount` will return a new value - if greater than 0,
    // the next child to remove will be moved to the top, at index 0.
    while (this.layoutNode.childCount) {
      this.layoutNode.removeChildAtIndex(0);
    }
    for (let i = 0; i < this.children.length; i++) {
      this.children[i].isAbsolute = this.isAbsolute;
      this.children[i].zIndex = this.zIndex;
      this.layoutNode.addChild(this.children[i].layoutNode);
    }
  }

  prependChild(child: C, position?: number) {
    child.parent = this;
    this.eventListener.addChild(child.eventListener);
    if (position !== undefined) {
      assert(
        position >= 0 && position <= this.children.length - 1,
        `child position out of bounds: ${position}`
      );
      this.children.splice(position, 0, child);
    } else {
      this.children.unshift(child);
    }

    this.updateLayoutNode();
  }

  appendChild(child: C, position?: number) {
    child.parent = this;
    this.eventListener.addChild(child.eventListener);
    if (position !== undefined) {
      assert(
        position >= 0 && position <= this.children.length,
        `child position out of bounds: ${position}`
      );

      this.children.splice(position + 1, 0, child);
    } else {
      this.children.push(child);
    }

    this.updateLayoutNode();
  }

  removeChild(child: C) {
    const nodeIndex = this.children.indexOf(child);
    assert(nodeIndex >= 0, 'child not found');
    delete child.parent;
    delete child.layoutNode;
    this.eventListener.removeChild(child.eventListener);
    this.children.splice(nodeIndex, 1);
    this.layoutNode.removeChildAtIndex(nodeIndex);
  }

  notifyOnLayoutHook(
    layout: Layout,
    { offsetX, offsetY }: { offsetX: number; offsetY: number }
  ) {
    super.notifyOnLayoutHook(layout, { offsetX, offsetY });
    for (let i = 0; i < this.children.length; i++) {
      this.children[i].notifyOnLayoutHook(layout.child(i), {
        offsetX: offsetX + layout.x,
        offsetY: offsetY + layout.y,
      });
    }
  }
}
