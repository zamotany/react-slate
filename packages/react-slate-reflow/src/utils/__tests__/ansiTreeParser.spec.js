/* @flow */

import chalk from 'chalk';
import ansiStyles from 'ansi-styles';
import { getAnsiTreeFromText, getStyleFromAnsiCode } from '../ansiTreeParser';

chalk.enabled = process.env.CI ? true : chalk.enabled;
chalk.level = 3;

function stripTreeFromInternals(node: Object) {
  const { children, code, text } = node;
  if (code) {
    return {
      code,
      children: children.map(stripTreeFromInternals),
    };
  } else if (text) {
    return {
      text,
    };
  }
  return {
    children: children.map(stripTreeFromInternals),
  };
}

describe('ansiTreeParser', () => {
  describe('getAnsiTreeFromText should parse', () => {
    it("'{chalk.red('Hello')} {chalk.blue('World')}'", () => {
      const text = `${chalk.red('Hello')} ${chalk.blue('World')}`;
      const tree = getAnsiTreeFromText(text);
      expect(stripTreeFromInternals(tree)).toEqual({
        children: [
          { code: ansiStyles.red.open, children: [{ text: 'Hello' }] },
          { text: ' ' },
          { code: ansiStyles.blue.open, children: [{ text: 'World' }] },
        ],
      });
    });

    it("'chalk.bgBlue.red('Hello World')'", () => {
      const text = chalk.bgBlue.red('Hello World');
      const tree = getAnsiTreeFromText(text);
      expect(stripTreeFromInternals(tree)).toEqual({
        children: [
          {
            code: ansiStyles.bgBlue.open,
            children: [
              {
                code: ansiStyles.red.open,
                children: [{ text: 'Hello World' }],
              },
            ],
          },
        ],
      });
    });

    it("'chalk.italic.bold.red('Hello World')'", () => {
      const text = chalk.italic.bold.red('Hello World');
      const tree = getAnsiTreeFromText(text);
      expect(stripTreeFromInternals(tree)).toEqual({
        children: [
          {
            code: ansiStyles.italic.open,
            children: [
              {
                code: ansiStyles.bold.open,
                children: [
                  {
                    code: ansiStyles.red.open,
                    children: [{ text: 'Hello World' }],
                  },
                ],
              },
            ],
          },
        ],
      });
    });

    it("chalk.bgGreen('{chalk.red('Hello')} {chalk.blue('World')}')", () => {
      const text = chalk.bgGreen(
        `${chalk.red('Hello')} ${chalk.blue('World')}`
      );
      const tree = getAnsiTreeFromText(text);
      expect(stripTreeFromInternals(tree)).toEqual({
        children: [
          {
            code: ansiStyles.bgGreen.open,
            children: [
              { code: ansiStyles.red.open, children: [{ text: 'Hello' }] },
              { text: ' ' },
              { code: ansiStyles.blue.open, children: [{ text: 'World' }] },
            ],
          },
        ],
      });
    });

    it("'Hello World'", () => {
      const text = 'Hello World';
      const tree = getAnsiTreeFromText(text);
      expect(stripTreeFromInternals(tree)).toEqual({
        children: [{ text: 'Hello World' }],
      });
    });

    it("'{chalk.red('Hello')} World", () => {
      const text = `${chalk.red('Hello')} World`;
      const tree = getAnsiTreeFromText(text);
      expect(stripTreeFromInternals(tree)).toEqual({
        children: [
          { code: ansiStyles.red.open, children: [{ text: 'Hello' }] },
          { text: ' World' },
        ],
      });
    });

    it("'chalk.bgKeyword('orange').rgb(45, 89, 99)('Hello World')'", () => {
      const text = chalk.bgKeyword('orange').rgb(45, 89, 99)('Hello World');
      const tree = getAnsiTreeFromText(text);
      expect(stripTreeFromInternals(tree)).toEqual({
        children: [
          {
            // $FlowFixMe
            code: chalk.bgKeyword('orange')._styles[0].open,
            children: [
              {
                // $FlowFixMe
                code: chalk.rgb(45, 89, 99)._styles[0].open,
                children: [{ text: 'Hello World' }],
              },
            ],
          },
        ],
      });
    });
  });

  it('getStyleFromAnsiCode should detect styles', () => {
    expect(getStyleFromAnsiCode(ansiStyles.bold.open)).toEqual({
      key: 'fontWeight',
      value: 'bold',
    });
    expect(getStyleFromAnsiCode(ansiStyles.italic.open)).toEqual({
      key: 'fontStyle',
      value: 'italic',
    });
    expect(getStyleFromAnsiCode(ansiStyles.underline.open)).toEqual({
      key: 'textDecoration',
      value: 'underline',
    });
    expect(getStyleFromAnsiCode(ansiStyles.strikethrough.open)).toEqual({
      key: 'textDecoration',
      value: 'line-through',
    });
    expect(getStyleFromAnsiCode(ansiStyles.reset.open)).toEqual(null);
    expect(getStyleFromAnsiCode(ansiStyles.red.open)).toEqual({
      key: 'color',
      value: 'red',
    });
    expect(
      getStyleFromAnsiCode(ansiStyles.color.ansi256.rgb(0, 154, 28))
    ).toEqual({
      key: 'color',
      value: 'raw(5;35)',
    });
    expect(
      getStyleFromAnsiCode(ansiStyles.color.ansi16m.rgb(0, 154, 28))
    ).toEqual({
      key: 'color',
      value: 'raw(2;0;154;28)',
    });
    expect(getStyleFromAnsiCode(ansiStyles.bgRed.open)).toEqual({
      key: 'backgroundColor',
      value: 'red',
    });
    expect(
      // $FlowFixMe
      getStyleFromAnsiCode(chalk.bgKeyword('orange')._styles[0].open)
    ).toEqual({
      key: 'backgroundColor',
      value: 'raw(2;255;165;0)',
    });
    expect(
      // $FlowFixMe
      getStyleFromAnsiCode(chalk.bgRgb(45, 89, 128)._styles[0].open)
    ).toEqual({
      key: 'backgroundColor',
      value: 'raw(2;45;89;128)',
    });
  });
});
