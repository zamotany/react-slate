/* @flow */
/* eslint-disable no-control-regex */
/* eslint-disable no-continue */

import ansiStyles from 'ansi-styles';

type CodeNode = {
  code: string,
  children: Array<CodeNode | TextNode>,
  parent: CodeNode | RootNode,
};

type TextNode = {
  text: string,
  parent: CodeNode | RootNode,
};

type RootNode = {
  children: Array<CodeNode | TextNode>,
};

const CLOSING_CODES = {
  [ansiStyles.reset.close]: ansiStyles.reset.open,
  [ansiStyles.bold.close]: ansiStyles.bold.open,
  [ansiStyles.dim.close]: ansiStyles.dim.open,
  [ansiStyles.italic.close]: ansiStyles.italic.open,
  [ansiStyles.underline.close]: ansiStyles.underline.open,
  [ansiStyles.inverse.close]: ansiStyles.inverse.open,
  [ansiStyles.hidden.close]: ansiStyles.hidden.open,
  [ansiStyles.strikethrough.close]: ansiStyles.strikethrough.open,
  [ansiStyles.color.close]: true,
  '\u001b[49m': true,
};

function isClosingCode(code: string) {
  return Boolean(CLOSING_CODES[code]);
}

function makeCodeNode(code: string, parent: TextNode | CodeNode | RootNode) {
  if (typeof parent.children === 'undefined') {
    throw new Error('TextNode cannot have children');
  }

  const node = {
    code,
    children: [],
    parent,
  };
  // $FlowFixMe
  parent.children.push(node);
  return node;
}

function makeTextNode(text: string, parent: CodeNode | RootNode) {
  const node = {
    text,
    parent,
  };
  parent.children.push(node);
  return node;
}

export function getAnsiTreeFromText(input: string) {
  const root = { children: [] };
  let currentNode;
  let index = 0;
  let mode: 'code' | 'text' | 'none' = 'none';
  let accumulator = '';

  while (index < input.length) {
    // If first character is a control sequence, then the next characters will be a part
    // of ANSI escape code.
    if (/\u001b/.test(input[index])) {
      // If previous mode was `text`, then there is some text in accumulator.
      if (mode === 'text') {
        makeTextNode(accumulator, currentNode || root);
        accumulator = '';
      }

      mode = 'code';
      accumulator += '\u001b';
      index++;
      continue;
    }

    if (mode === 'code') {
      accumulator += input[index];
      // If character is `m` then the escape code is complete.
      // In that case either it will make a new code node or
      // if it's a closing code, it need to "complete"/"close" the tree.
      if (input[index] === 'm') {
        if (isClosingCode(accumulator) && currentNode) {
          currentNode = currentNode.parent;
        } else {
          currentNode = makeCodeNode(accumulator, currentNode || root);
        }
        mode = 'none';
        accumulator = '';
      }
      index++;
      continue;
    }

    accumulator += input[index];
    mode = 'text';
    index++;
  }

  // There might be some text left in accumulator. If that's the case
  // make a new text node.
  if (mode === 'text' && accumulator.length) {
    makeTextNode(accumulator, currentNode || root);
  }

  return root;
}

export function getStyleFromAnsiCode(code: string) {
  switch (code) {
    // Modifiers
    case ansiStyles.reset.open:
      return null;
    case ansiStyles.bold.open:
      return { key: 'fontWeight', value: 'bold' };
    case ansiStyles.italic.open:
      return { key: 'fontStyle', value: 'italic' };
    case ansiStyles.underline.open:
      return { key: 'textDecoration', value: 'underline' };
    case ansiStyles.strikethrough.open:
      return { key: 'textDecoration', value: 'line-through' };
    default: {
      const match = Object.keys(ansiStyles).find(
        styleKey => ansiStyles[styleKey].open === code
      );

      if (match && /bg/.test(match)) {
        return {
          key: 'backgroundColor',
          value: `${match[2].toLowerCase()}${match.slice(3)}`,
        };
      } else if (match) {
        return {
          key: 'color',
          value: match,
        };
      }

      const extendedColorMatch = /\u001b\[38;(\d;(\d+);?(\d+)?;?(\d+)?)m/.exec(
        code
      );
      if (extendedColorMatch) {
        return {
          key: 'color',
          value: `raw(${extendedColorMatch[1]})`,
        };
      }

      const extendedBgColorMatch = /\u001b\[48;(\d;(\d+);?(\d+)?;?(\d+)?)m/.exec(
        code
      );
      if (extendedBgColorMatch) {
        return {
          key: 'backgroundColor',
          value: `raw(${extendedBgColorMatch[1]})`,
        };
      }

      return null;
    }
  }
}
