/* @flow */

import type { LayoutProps, Bounds, Position } from '../../types';

type GetConstrain = number => number;
type NormalizedLayoutProps = {
  insetBounds: Bounds,
  outsetBounds: Bounds,
  isInline: boolean,
  isAbsolute: boolean,
  placement: Position,
  getWidthConstrain: ?GetConstrain,
  getHeightConstrain: ?GetConstrain,
};

export default function normalizeLayoutProps(
  layoutProps: LayoutProps
): NormalizedLayoutProps {
  return {
    insetBounds: {
      top: Math.max(layoutProps.paddingTop || 0, 0),
      right: Math.max(layoutProps.paddingRight || 0, 0),
      bottom: Math.max(layoutProps.paddingBottom || 0, 0),
      left: Math.max(layoutProps.paddingLeft || 0, 0),
    },
    outsetBounds: {
      top: Math.max(layoutProps.marginTop || 0, 0),
      right: Math.max(layoutProps.marginRight || 0, 0),
      bottom: Math.max(layoutProps.marginBottom || 0, 0),
      left: Math.max(layoutProps.marginLeft || 0, 0),
    },
    isInline: layoutProps.display === 'inline',
    isAbsolute: layoutProps.position === 'absolute',
    placement: {
      x: layoutProps.left || 0,
      y: layoutProps.top || 0,
      z: layoutProps.zIndex || 1,
    },
    getWidthConstrain:
      typeof layoutProps.width !== 'undefined' &&
      hasValidConstrain(layoutProps.width)
        ? makeConstrainFactory(layoutProps.width)
        : null,
    getHeightConstrain:
      typeof layoutProps.height !== 'undefined' &&
      hasValidConstrain(layoutProps.height)
        ? makeConstrainFactory(layoutProps.height)
        : null,
  };
}

function hasValidConstrain(value: number | string) {
  return (
    (typeof value === 'number' && value >= 0) ||
    (typeof value === 'string' && /^\d+%?$/.test(value))
  );
}

function makeConstrainFactory(value: number | string) {
  return (parentValue: number) => {
    if (typeof value === 'number') {
      return value;
    }

    if (/^\d+$/.test(value)) {
      return parseInt(value, 10);
    }

    if (/^\d+%$/.test(value)) {
      const percentage = parseInt(/^(\d+)%$/.exec(value)[1], 10);
      return Math.floor(percentage / 100 * parentValue);
    }

    return 0;
  };
}
