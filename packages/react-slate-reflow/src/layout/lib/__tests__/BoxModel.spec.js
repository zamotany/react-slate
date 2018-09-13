/* @flow */

import BoxModel from '../BoxModel';

describe('BoxModel', () => {
  describe('should set position', () => {
    it('for first child', () => {
      const parent = new BoxModel();
      parent._position.x = 1;
      parent._position.y = 2;
      // Outset bounds are already in position
      parent._outsetBounds.top = 1;
      parent._outsetBounds.left = 2;
      parent._insetBounds.top = 1;
      parent._insetBounds.left = 3;

      const child = new BoxModel();
      child.setPosition({
        parentBox: parent,
        variant: 'init',
      });

      expect(child._position.x).toBe(4);
      expect(child._position.y).toBe(3);
      expect(child._position.z).toBe(0);
    });

    it('for current-line child', () => {
      const parent = new BoxModel();
      parent._position.x = 1;
      parent._position.y = 2;
      // Outset bounds are already in position
      parent._outsetBounds.top = 1;
      parent._outsetBounds.left = 2;
      parent._insetBounds.top = 1;
      parent._insetBounds.left = 3;

      const sibling = new BoxModel();
      sibling.setPosition({
        parentBox: parent,
        variant: 'init',
      });
      sibling._dimensions.width.measured = 5;
      sibling._dimensions.height.measured = 1;
      sibling._insetBounds.left = 1;
      sibling._insetBounds.right = 2;
      sibling._outsetBounds.right = 3;

      const child = new BoxModel();
      child._outsetBounds.left = 1;
      child.setPosition({
        parentBox: parent,
        siblingBox: sibling,
        variant: 'current-line',
      });

      expect(child._position.x).toBe(16);
      expect(child._position.y).toBe(3);
    });

    it('for next-line child', () => {
      const parent = new BoxModel();
      parent._position.x = 1;
      parent._position.y = 2;
      // Outset bounds are already in position
      parent._outsetBounds.top = 1;
      parent._outsetBounds.left = 2;
      parent._insetBounds.top = 1;
      parent._insetBounds.left = 3;

      const sibling = new BoxModel();
      sibling.setPosition({
        parentBox: parent,
        variant: 'init',
      });
      sibling._dimensions.width.measured = 5;
      sibling._dimensions.height.measured = 2;
      sibling._insetBounds.top = 1;
      sibling._insetBounds.bottom = 2;
      sibling._outsetBounds.bottom = 1;

      const child = new BoxModel();
      child._outsetBounds.top = 1;
      child._outsetBounds.left = 1;
      child.setPosition({
        parentBox: parent,
        siblingBox: sibling,
        variant: 'next-line',
      });

      expect(child._position.x).toBe(5);
      expect(child._position.y).toBe(10);
    });
  });

  describe('should set max dimensions', () => {
    it('for next-line child', () => {
      const parent = new BoxModel();
      parent.setWidthConstrain({ value: 5 });
      parent.setHeightConstrain({ value: 3 });
      const sibling = new BoxModel();
      sibling._dimensions.height.measured = 2;
      sibling._dimensions.width.measured = 2;

      const child = new BoxModel();
      child.setMaxDimensions({
        parentBox: parent,
        siblingBox: sibling,
        variant: 'next-line',
        isSwitching: false,
      });

      expect(child._dimensions.width.max).toBe(5);
      expect(child._dimensions.height.max).toBe(1);
    });

    it('for next-line child when switching', () => {
      const parent = new BoxModel();
      parent.setWidthConstrain({ value: 5 });
      parent.setHeightConstrain({ value: 3 });
      const sibling = new BoxModel();
      sibling._dimensions.height.measured = 2;
      sibling._dimensions.width.measured = 2;

      const child = new BoxModel();
      child.setMaxDimensions({
        parentBox: parent,
        siblingBox: sibling,
        variant: 'next-line',
        isSwitching: true,
      });

      expect(child._dimensions.width.max).toBe(5);
      expect(child._dimensions.height.max).toBe(1);
    });

    it('for current-line child', () => {
      const parent = new BoxModel();
      parent.setWidthConstrain({ value: 8 });
      const sibling = new BoxModel();
      sibling._dimensions.height.measured = 1;
      sibling._dimensions.width.measured = 5;

      const child = new BoxModel();
      child.setMaxDimensions({
        parentBox: parent,
        siblingBox: sibling,
        variant: 'current-line',
        isSwitching: false,
      });

      expect(child._dimensions.width.max).toBe(3);
      expect(child._dimensions.height.max).toBe(-1);
    });

    it('for current-line child when switching', () => {
      const parent = new BoxModel();
      parent.setWidthConstrain({ value: 8 });
      parent.setHeightConstrain({ value: 3 });
      const sibling = new BoxModel();
      sibling._dimensions.height.measured = 1;
      sibling._dimensions.width.measured = 5;

      const child = new BoxModel();
      child.setMaxDimensions({
        parentBox: parent,
        siblingBox: sibling,
        variant: 'current-line',
        isSwitching: true,
      });

      expect(child._dimensions.width.max).toBe(8);
      expect(child._dimensions.height.max).toBe(2);
    });
  });

  describe('should check if the child is contained', () => {
    it('with fully contained child', () => {
      const parent = new BoxModel();
      parent.setOutOfTreePosition({ x: 1, y: 1, z: 0 });
      parent._dimensions.width.measured = 10;
      parent._dimensions.height.measured = 1;

      const child = new BoxModel();
      child.setOutOfTreePosition({ x: 2, y: 1, z: 0 });
      child._dimensions.width.measured = 5;
      child._dimensions.height.measured = 1;
      child._outsetBounds.right = 1;

      expect(parent.contains({ childBox: child })).toBeTruthy();
    });

    it('with vertically overflowing child', () => {
      const parent = new BoxModel();
      parent.setOutOfTreePosition({ x: 1, y: 1, z: 0 });
      parent._dimensions.width.measured = 10;
      parent._dimensions.height.measured = 1;

      const child1 = new BoxModel();
      child1.setOutOfTreePosition({ x: 2, y: 2, z: 0 });
      child1._dimensions.width.measured = 5;
      child1._dimensions.height.measured = 1;

      expect(parent.contains({ childBox: child1 })).toBeFalsy();

      const child2 = new BoxModel();
      child2.setOutOfTreePosition({ x: 2, y: 1, z: 0 });
      child2._dimensions.width.measured = 5;
      child2._dimensions.height.measured = 2;

      expect(parent.contains({ childBox: child2 })).toBeFalsy();
    });

    it('with horizontally overflowing child', () => {
      const parent = new BoxModel();
      parent.setOutOfTreePosition({ x: 1, y: 1, z: 0 });
      parent._dimensions.width.measured = 5;
      parent._dimensions.height.measured = 1;

      const child1 = new BoxModel();
      child1.setOutOfTreePosition({ x: 3, y: 1, z: 0 });
      child1._dimensions.width.measured = 5;
      child1._dimensions.height.measured = 1;

      expect(parent.contains({ childBox: child1 })).toBeFalsy();

      const child2 = new BoxModel();
      child2.setOutOfTreePosition({ x: 1, y: 1, z: 0 });
      child2._dimensions.width.measured = 10;
      child2._dimensions.height.measured = 1;

      expect(parent.contains({ childBox: child2 })).toBeFalsy();
    });
  });

  it('should resize to contain a child', () => {
    const parent = new BoxModel();
    parent.setOutOfTreePosition({ x: 2, y: 1, z: 0 });

    const child = new BoxModel();
    child.setOutOfTreePosition({ x: 4, y: 2, z: 0 });
    child._dimensions.width.measured = 10;
    child._dimensions.height.measured = 2;
    child._outsetBounds.right = 1;
    child._outsetBounds.bottom = 1;

    parent.resizeToContain({ childBox: child });

    expect(parent._dimensions.width.measured).toBe(13);
    expect(parent._dimensions.height.measured).toBe(4);
  });
});
