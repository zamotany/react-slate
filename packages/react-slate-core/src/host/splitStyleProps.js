/* @flow */

import memoize from 'fast-memoize';

const splitOffsets = memoize((name: string, value: string) => {
  const offsets = value.match(/\d+/g);
  if (!offsets) {
    return null;
  }

  const output = {
    [`${name}Top`]: Number(offsets[0]),
    [`${name}Right`]: Number(offsets[1]),
    [`${name}Bottom`]: Number(offsets[2]),
    [`${name}Left`]: Number(offsets[3]),
  };

  if (offsets.length === 3) {
    output[`${name}Left`] = output[`${name}Right`];
  } else if (offsets.length === 2) {
    output[`${name}Left`] = output[`${name}Right`];
    output[`${name}Bottom`] = output[`${name}Top`];
  } else if (offsets.length === 1) {
    // eslint-disable-next-line no-multi-assign
    output[`${name}Left`] = output[`${name}Right`] = output[`${name}Bottom`] =
      output[`${name}Top`];
  }

  return output;
});

const getBorderProps = memoize(
  ({ border, borderStyle, borderColor, borderBackgroundColor }) => {
    const [, style, color, backgroundColor] =
      /(solid|double) (rgb\(\d+,\s?\d+,\s?\d+\)|\w+|#[0-9abcdef]+) ?(rgb\(\d+,\s?\d+,\s?\d+\)|\w+|#[0-9abcdef]+)?/.exec(
        border
      ) || [];
    const finalProps = {
      style: borderStyle || style,
      color: borderColor || color,
      backgroundColor: borderBackgroundColor || backgroundColor,
    };

    if (finalProps.style !== 'solid' && finalProps.style !== 'double') {
      return null;
    }

    let thickness;
    switch (finalProps.style) {
      case 'solid': {
        thickness = 'single-line';
        break;
      }
      case 'double': {
        thickness = 'double-line';
        break;
      }
      default:
        break;
    }

    return normalize({
      thickness,
      color: finalProps.color,
      backgroundColor: finalProps.backgroundColor,
    });
  }
);

function normalize(value: { [key: string]: * }, alternativeValue = null) {
  const keys = Object.keys(value);
  return keys.length
    ? keys.reduce(
        (acc, key) =>
          value[key] !== null && typeof value[key] !== 'undefined'
            ? { ...acc, [key]: value[key] }
            : acc,
        null
      )
    : alternativeValue;
}

export default function splitStyleProps(
  props?: ?{ [key: string]: * } | Array<?{ [key: string]: * }>
) {
  if (
    typeof props === 'boolean' ||
    typeof props === 'undefined' ||
    props === null
  ) {
    return {
      layoutProps: null,
      styleProps: null,
      borderProps: null,
    };
  }

  if (Array.isArray(props)) {
    return props.reduce(
      (acc, item) => {
        const { layoutProps, styleProps, borderProps } = splitStyleProps(item);
        return {
          layoutProps: normalize({
            ...acc.layoutProps,
            ...layoutProps,
          }),
          styleProps: normalize({
            ...acc.styleProps,
            ...styleProps,
          }),
          borderProps: normalize({
            ...acc.borderProps,
            ...borderProps,
          }),
        };
      },
      {
        layoutProps: null,
        styleProps: null,
        borderProps: null,
      }
    );
  }

  const {
    display,
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    height,
    width,
    backgroundColor,
    color,
    fontWeight,
    fontStyle,
    textDecoration,
    textTransform,
    // textAlign,
    border,
    borderStyle,
    borderColor,
    borderBackgroundColor,
    position,
    left,
    top,
  } = props;

  return {
    layoutProps: normalize({
      ...(splitOffsets('margin', margin || '') || {
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
      }),
      ...(splitOffsets('padding', padding || '') || {
        paddingTop,
        paddingBottom,
        paddingLeft,
        paddingRight,
      }),
      display,
      width,
      height,
      position,
      left,
      top,
    }),
    styleProps: normalize({
      backgroundColor,
      color,
      fontWeight,
      fontStyle,
      textDecoration,
      textTransform,
      // textAlign,
    }),
    borderProps: getBorderProps({
      border,
      borderStyle,
      borderColor,
      borderBackgroundColor,
    }),
  };
}
