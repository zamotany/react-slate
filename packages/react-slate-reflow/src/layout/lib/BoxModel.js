/* @flow */

import type { Bounds, Position, Size } from '../../types';

// Model for holding bounds, dimensions and position aka placement.
// Is a representation of box model using in layout and rendering engines.

type Variant = 'init' | 'current-line' | 'next-line';
export default class BoxModel {
  _insetBounds: Bounds = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  };
  _outsetBounds: Bounds = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  };
  _position: Position = {
    x: 0,
    y: 0,
    z: 0,
  };
  _dimensions = {
    width: {
      measured: 0,
      max: -1,
      fixed: -1,
    },
    height: {
      measured: 0,
      max: -1,
      fixed: -1,
    },
  };

  // Bounds and constrains

  setBounds({
    insetBounds,
    outsetBounds,
  }: {
    insetBounds?: Bounds,
    outsetBounds?: Bounds,
  }) {
    if (insetBounds) {
      this._insetBounds = insetBounds;
    }
    if (outsetBounds) {
      this._outsetBounds = outsetBounds;
    }
  }

  setWidthConstrain({
    value,
    parentBox,
  }: {
    value: number,
    parentBox?: BoxModel,
  }) {
    this._dimensions.width.fixed = getMinValue(
      parentBox ? parentBox._dimensions.width.fixed : -1,
      parentBox ? parentBox._dimensions.width.max : -1,
      value - (this._insetBounds.left + this._insetBounds.right)
    );
  }

  setHeightConstrain({
    value,
    parentBox,
  }: {
    value: number,
    parentBox?: BoxModel,
  }) {
    this._dimensions.height.fixed = getMinValue(
      parentBox ? parentBox._dimensions.height.fixed : -1,
      parentBox ? parentBox._dimensions.height.max : -1,
      value - (this._insetBounds.top + this._insetBounds.bottom)
    );
  }

  setMaxDimensions({
    parentBox,
    siblingBox,
    variant,
    isSwitching,
  }: {
    parentBox: BoxModel,
    siblingBox?: BoxModel,
    variant: Variant,
    isSwitching: boolean,
  }) {
    // If parent has fixed width/height or max value is set
    // (because other parent has fixed width/height), set max value to current
    // element, subtract inset bounds and space already taken from parent
    // only if the current element is inline and it's not switching between
    // either inline -> block or block -> inline.

    const { width: parentWidth, height: parentHeight } = parentBox._dimensions;
    const calculateUsedSpace = variant === 'current-line' && !isSwitching;

    if (getValue(parentWidth.fixed, parentWidth.max) > -1) {
      let usedSpace = 0;
      if (siblingBox) {
        const siblingPosition = siblingBox.getPosition('for-sibling');
        const parentPosition = parentBox.getPosition('for-child');
        const xDiff = siblingPosition.x - parentPosition.x;
        usedSpace = calculateUsedSpace ? xDiff + siblingBox.getSize().width : 0;
      }

      this._dimensions.width.max =
        getValue(parentWidth.fixed, parentWidth.max) -
        (this._insetBounds.left + this._insetBounds.right + usedSpace);
    }

    if (getValue(parentHeight.fixed, parentHeight.max) > -1) {
      let usedSpace = 0;
      if (siblingBox) {
        const siblingPosition = siblingBox.getPosition('for-sibling');
        const parentPosition = parentBox.getPosition('for-child');
        const yDiff = siblingPosition.y - parentPosition.y;
        usedSpace = calculateUsedSpace
          ? 0
          : yDiff + siblingBox.getSize().height;
      }

      this._dimensions.height.max =
        getValue(parentHeight.fixed, parentHeight.max) -
        (this._insetBounds.top + this._insetBounds.bottom + usedSpace);
    }
  }

  // Position

  getPosition(variant?: 'for-parent' | 'for-child' | 'for-sibling') {
    switch (variant) {
      case 'for-parent':
      case 'for-child':
      case 'for-sibling':
      default: {
        return {
          x: this._position.x,
          y: this._position.y,
          z: this._position.z,
        };
      }
    }
  }

  setPosition({
    parentBox,
    siblingBox,
    variant,
  }: {
    parentBox: BoxModel,
    siblingBox?: BoxModel,
    variant: Variant,
  }) {
    const parentPosition = parentBox.getPosition('for-child');
    this._position.z = parentPosition.z;
    if (variant === 'init') {
      this._position.x =
        parentPosition.x +
        parentBox._insetBounds.left +
        this._outsetBounds.left;
      this._position.y =
        parentPosition.y + parentBox._insetBounds.top + this._outsetBounds.top;
    } else if (variant === 'next-line') {
      if (!siblingBox) {
        throw new Error("Sibling's box must be provided");
      }
      const siblingPosition = siblingBox.getPosition('for-sibling');
      this._position.x =
        parentPosition.x +
        parentBox._insetBounds.left +
        this._outsetBounds.left;
      this._position.y =
        siblingPosition.y +
        siblingBox.getSize().height +
        siblingBox._outsetBounds.bottom +
        this._outsetBounds.top;
    } else if (variant === 'current-line') {
      if (!siblingBox) {
        throw new Error("Sibling's box must be provided");
      }
      const siblingPosition = siblingBox.getPosition('for-sibling');
      this._position.x =
        siblingPosition.x +
        siblingBox.getSize().width +
        siblingBox._outsetBounds.right +
        this._outsetBounds.left;
      this._position.y =
        siblingPosition.y -
        siblingBox._outsetBounds.top +
        this._outsetBounds.top;
    }
  }

  setOutOfTreePosition({ x, y, z }: Position) {
    this._position.x = x;
    this._position.y = y;
    this._position.z = z;
  }

  // Size

  getSize(): Size {
    return withBounds(
      {
        width: getValue(
          this._dimensions.width.fixed,
          this._dimensions.width.measured
        ),
        height: getValue(
          this._dimensions.height.fixed,
          this._dimensions.height.measured
        ),
      },
      this._insetBounds
    );
  }

  contains({ childBox }: { childBox: BoxModel }) {
    const childPosition = childBox.getPosition('for-parent');
    // Vertical check
    if (
      childPosition.x +
        childBox.getSize().width +
        childBox._outsetBounds.right >
      this._position.x +
        this._insetBounds.left +
        this._dimensions.width.measured
    ) {
      return false;
    }
    // Horizontal check
    if (
      childPosition.y +
        childBox.getSize().height +
        childBox._outsetBounds.bottom >
      this._position.y +
        this._insetBounds.top +
        this._dimensions.height.measured
    ) {
      return false;
    }

    return true;
  }

  resize({ width, height }: Size) {
    this._dimensions.width.measured = getMinValue(
      this._dimensions.width.fixed,
      this._dimensions.width.max,
      Math.max(this._dimensions.width.measured, width)
    );
    this._dimensions.height.measured = getMinValue(
      this._dimensions.height.fixed,
      this._dimensions.height.max,
      Math.max(this._dimensions.height.measured, height)
    );
  }

  resizeToContain({ childBox }: { childBox: BoxModel }) {
    const { width, height } = childBox.getSize();
    const childPosition = childBox.getPosition('for-parent');
    // NOTE: left and top inset bounds have to be subtracted, since
    // they were added in child's placement.
    const xDiff = childPosition.x - this._position.x - this._insetBounds.left;
    const yDiff = childPosition.y - this._position.y - this._insetBounds.top;
    this.resize({
      width: xDiff + width + childBox._outsetBounds.right,
      height: yDiff + height + childBox._outsetBounds.bottom,
    });
  }

  getDrawableItemWidth() {
    return getValue(this._dimensions.width.fixed, this._dimensions.width.max);
  }

  /**
   * Determines if the content inside the box will be visible, so rendering it can be skipped.
   */
  isVisible() {
    return (
      getValue(this._dimensions.height.fixed, this._dimensions.height.max) !== 0
    );
  }
}

function getValue(...values: number[]) {
  const result = values.find(value => value > -1);
  return typeof result === 'undefined' ? -1 : result;
}

function getMinValue(...values: number[]) {
  return Math.min(...values.filter(value => value > -1));
}

function withBounds({ width, height }: Size, ...bounds: Bounds[]) {
  return {
    width: bounds.reduce((acc, { left, right }) => acc + left + right, width),
    height: bounds.reduce((acc, { top, bottom }) => acc + top + bottom, height),
  };
}
