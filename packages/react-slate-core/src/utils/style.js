/* @flow */

import chalk from 'chalk';
import stripAnsi from 'strip-ansi';
import alignText from './alignText';
import sliceAnsi from './sliceAnsi';

chalk.enabled = process.env.CI ? true : chalk.enabled;
chalk.level = process.env.CI ? 1 : chalk.level;

const borderStyleChars = {
  solid: {
    top: '─',
    bottom: '─',
    left: '│',
    right: '│',
    topLeft: '┌',
    topRight: '┐',
    bottomLeft: '└',
    bottomRight: '┘',
  },
  double: {
    top: '═',
    bottom: '═',
    left: '║',
    right: '║',
    topLeft: '╔',
    topRight: '╗',
    bottomLeft: '╚',
    bottomRight: '╝',
  },
};

function splitOffsets(name: string, value: string) {
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
  } else if (offsets.length === 0) {
    return null;
  }
  return output;
}

function getBorderProps(
  border: string = '',
  borderStyle: string,
  borderColor: string
) {
  const match = border.match(/(none|solid|double) (.+)/);
  if (!match) {
    return {
      borderStyle: borderStyle || 'none',
      borderColor: borderColor || '',
    };
  }
  const [, style, color] = match;
  return {
    borderStyle: borderStyle || style,
    borderColor: borderColor || color,
  };
}

export function getStyleProps(style: any = {}) {
  const getStyle = styleObject => {
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
      border,
      borderStyle,
      borderWidth,
      borderColor,
      height,
      width,
      position,
      left,
      top,
      zIndex,
      ...rest
    } = styleObject;
    const inline = display === 'inline';
    return {
      ...(splitOffsets('margin', margin || '') || {
        marginTop: marginTop || 0,
        marginBottom: marginBottom || 0,
        marginLeft: marginLeft || 0,
        marginRight: marginRight || 0,
      }),
      ...(splitOffsets('padding', padding || '') || {
        paddingTop: paddingTop || 0,
        paddingBottom: paddingBottom || 0,
        paddingLeft: paddingLeft || 0,
        paddingRight: paddingRight || 0,
      }),
      height: height || (inline ? 0 : -1),
      width: width || -1,
      inline,
      fixed: position === 'fixed',
      x: left || 0,
      y: top || 0,
      z: typeof zIndex === 'number' ? zIndex : 0,
      stylizeArgs: {
        ...rest,
        ...getBorderProps(border, borderStyle, borderColor),
      },
    };
  };

  if (!Array.isArray(style)) {
    return getStyle(style);
  }

  /**
   * If the style is an array, let's get all properties into one object
   * and then style for that created object.
   */
  return getStyle(style.reduce((a, v) => ({ ...a, ...v }), {}));
}

function capitalize(text: string) {
  return text
    .split(' ')
    .map(t => t.charAt(0).toUpperCase() + t.slice(1))
    .join(' ');
}

function colorize(enhance, bg: boolean, color?: string) {
  if (color) {
    if (color.startsWith('#')) {
      return bg ? enhance.bgHex(color) : enhance.hex(color);
    } else if (color.startsWith('rgb')) {
      const rgb = color
        .replace(/[rgb()]/g, '')
        .split(',')
        .map(i => parseInt(i, 10));
      return bg ? enhance.bgRgb(...rgb) : enhance.rgb(...rgb);
    } else if (color.startsWith('ansi-')) {
      const name = color.replace(/^ansi-/, '');
      // $FlowFixMe
      return bg ? enhance[`bg${capitalize(name)}`] : enhance[name];
    }

    return bg ? enhance.bgKeyword(color) : enhance.keyword(color);
  }
  return enhance;
}

function createBorderLine(
  style: {
    borderStyle: string,
    borderColor?: string,
    backgroundColor?: string,
  },
  position: 'top' | 'bottom',
  width: number
) {
  let enhancer = colorize(chalk, false, style.borderColor);
  enhancer = colorize(enhancer, true, style.backgroundColor);
  return enhancer(
    `${
      borderStyleChars[style.borderStyle][`${position}Left`]
    }${borderStyleChars[style.borderStyle][position].repeat(width - 2)}${
      borderStyleChars[style.borderStyle][`${position}Right`]
    }`
  );
}

export function createStylize(
  style: any,
  { height, width }: { height: number, width: number }
) {
  /* eslint-disable no-param-reassign */

  if (!Object.keys(style || {}).length) {
    // eslint-disable-next-line no-unused-vars
    return (canvas: string[]) => {
      /* NOOP */
    };
  }

  const { color, backgroundColor } = style;

  let enhance = colorize(chalk, false, color);
  enhance = colorize(enhance, true, backgroundColor);

  if (style.fontWeight === 'bold') {
    enhance = enhance.bold;
  }

  if (style.fontStyle === 'italic') {
    enhance = enhance.italic;
  }

  if (style.textDecoration) {
    // eslint-disable-next-line default-case
    switch (style.textDecoration) {
      case 'underline':
        enhance = enhance.underline;
        break;
      case 'line-through':
        enhance = enhance.strikethrough;
        break;
    }
  }

  if (style.visibility === 'hidden') {
    enhance = enhance.hidden;
  }

  let transform = text => text;
  if (style.textTransform) {
    // eslint-disable-next-line default-case
    switch (style.textTransform) {
      case 'uppercase':
        transform = text => text.toUpperCase();
        break;
      case 'lowercase':
        transform = text => text.toLowerCase();
        break;
      case 'capitalize':
        transform = text => capitalize(text);
        break;
    }
  }

  const shouldAddBorder = style.borderStyle && style.borderStyle !== 'none';
  if (style.textAlign) {
    const _transform = transform;
    transform = text =>
      alignText(
        _transform(shouldAddBorder ? text.replace(/\s{2}$/, '') : text),
        { align: style.textAlign }
      );
  }

  if (shouldAddBorder) {
    const _transform = transform;
    transform = text => {
      const transformedText = _transform(text);
      const borderEnhancer = colorize(chalk, false, style.borderColor);
      return `${borderEnhancer(borderStyleChars[style.borderStyle].left)}${
        width > 0 ? sliceAnsi(transformedText, 0, width - 2) : transformedText
      }${borderEnhancer(borderStyleChars[style.borderStyle].right)}`;
    };
  }

  return function stylize(canvas: string[]) {
    for (let i = 0; i < canvas.length; i++) {
      canvas[i] = enhance(transform(canvas[i]));
    }

    if (shouldAddBorder && canvas.length) {
      // At this point canvas should be normalized.
      // If width is not specified we can use any line's length from canvas.
      const lineWidth = width > 0 ? width : stripAnsi(canvas[0]).length;
      canvas.unshift(createBorderLine(style, 'top', lineWidth));
      // Height is specified we need to remove last 2 lines in order for height to be preserved,
      // otherwise we can just push it.
      if (height > 0) {
        canvas.splice(
          canvas.length - 2,
          2,
          createBorderLine(style, 'bottom', lineWidth)
        );
      } else {
        canvas.push(createBorderLine(style, 'bottom', lineWidth));
      }
    }
  };
}
