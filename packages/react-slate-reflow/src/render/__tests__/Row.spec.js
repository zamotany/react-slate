/* @flow */

import chalk from 'chalk';
import Row from '../Row';

describe('Row', () => {
  describe('should set text', () => {
    describe('with maxLength', () => {
      it('with equal lengths', () => {
        const row = new Row(5);
        const style = {
          color: 'green',
        };

        row.setText({
          value: 'Hello',
          start: 0,
          length: 5,
          style,
        });
        expect(row.cells).toEqual([
          { style, char: 'H' },
          { style, char: 'e' },
          { style, char: 'l' },
          { style, char: 'l' },
          { style, char: 'o' },
        ]);
      });

      it('with text length greater than row length', () => {
        const row = new Row(4);
        const style = {
          color: 'green',
        };

        row.setText({
          value: 'Hello',
          start: 0,
          length: 5,
          style,
        });
        expect(row.cells).toEqual([
          { style, char: 'H' },
          { style, char: 'e' },
          { style, char: 'l' },
          { style, char: 'l' },
        ]);
      });

      it('with text length lesser than row length', () => {
        const row = new Row(7);
        const style = {
          color: 'green',
        };

        row.setText({
          value: 'Hello',
          start: 1,
          length: 5,
          style,
        });
        expect(row.cells).toEqual([
          { style: null, char: ' ' },
          { style, char: 'H' },
          { style, char: 'e' },
          { style, char: 'l' },
          { style, char: 'l' },
          { style, char: 'o' },
          { style: null, char: ' ' },
        ]);
      });
    });

    describe('without maxLength', () => {
      it('with equal lengths', () => {
        const row = new Row(-1);
        const style = {
          color: 'green',
        };

        row.setText({
          value: 'Hello',
          start: 0,
          length: 5,
          style,
        });
        expect(row.cells).toEqual([
          { style, char: 'H' },
          { style, char: 'e' },
          { style, char: 'l' },
          { style, char: 'l' },
          { style, char: 'o' },
        ]);
      });

      it('with text length greater than row length', () => {
        const row = new Row(4);
        const style = {
          color: 'green',
        };

        row.setText({
          value: 'Hello',
          start: 0,
          length: 5,
          style,
        });
        expect(row.cells).toEqual([
          { style, char: 'H' },
          { style, char: 'e' },
          { style, char: 'l' },
          { style, char: 'l' },
        ]);
      });
    });
  });

  it('should style text with maxLength', () => {
    const row = new Row(5);
    const style = {
      color: 'green',
    };

    row.applyStyle({
      start: 1,
      length: 3,
      style,
    });

    expect(row.cells).toEqual([
      { style: null, char: ' ' },
      { style, char: ' ' },
      { style, char: ' ' },
      { style, char: ' ' },
      { style: null, char: ' ' },
    ]);

    const newStyle = {
      color: 'red',
      backgroundColor: 'blue',
    };

    row.applyStyle({
      start: 3,
      length: 2,
      style: newStyle,
    });
    expect(row.cells).toEqual([
      { style: null, char: ' ' },
      { style, char: ' ' },
      { style, char: ' ' },
      { style: newStyle, char: ' ' },
      { style: newStyle, char: ' ' },
    ]);
  });

  it('should creat ansi string', () => {
    const row = new Row(11);

    row.setText({
      value: 'Hello',
      start: 0,
      length: 5,
      style: {
        color: 'blue',
      },
    });

    row.setText({
      value: 'World',
      start: 6,
      length: 5,
      style: {
        color: 'red',
      },
    });

    row.applyStyle({
      start: 0,
      length: 11,
      style: {
        backgroundColor: 'magenta',
      },
    });

    row.applyStyle({
      start: 4,
      length: 3,
      style: {
        color: 'green',
      },
    });

    expect(row.toString()).toEqual(
      chalk.reset.bgMagenta.blue('Hell') +
        chalk.reset.bgMagenta.green('o W') +
        chalk.reset.bgMagenta.red('orld')
    );
  });
});
