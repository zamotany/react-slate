/* @flow */

import chalk from 'chalk';
import { create } from '../hex';

describe('withHexColor', () => {
  it('should produce same output as chalk in level 3', () => {
    chalk.enabled = true;
    chalk.level = 3;
    const { withHexColor } = create(3);

    const text = 'Hello';
    const hex = '#fa45be';
    expect(withHexColor(hex, text)).toEqual(chalk.hex(hex)(text));
  });

  it('should produce same output as chalk in level 2', () => {
    chalk.enabled = true;
    chalk.level = 2;
    const { withHexColor } = create(2);

    const text = 'Hello';
    const hex = '#fa45be';
    expect(withHexColor(hex, text)).toEqual(chalk.hex(hex)(text));
  });

  it('should produce same output as chalk in level 1', () => {
    chalk.enabled = true;
    chalk.level = 1;
    const { withHexColor } = create(1);

    const text = 'Hello';
    const hex = '#fa45be';
    expect(withHexColor(hex, text)).toEqual(chalk.hex(hex)(text));
  });
});

describe('withHexBackgroundColor', () => {
  it('should produce same output as chalk in level 3', () => {
    chalk.enabled = true;
    chalk.level = 3;
    const { withHexBackgroundColor } = create(3);

    const text = 'Hello';
    const hex = '#fa45be';
    expect(withHexBackgroundColor(hex, text)).toEqual(chalk.bgHex(hex)(text));
  });

  it('should produce same output as chalk in level 2', () => {
    chalk.enabled = true;
    chalk.level = 2;
    const { withHexBackgroundColor } = create(2);

    const text = 'Hello';
    const hex = '#fa45be';
    expect(withHexBackgroundColor(hex, text)).toEqual(chalk.bgHex(hex)(text));
  });

  it('should produce same output as chalk in level 1', () => {
    chalk.enabled = true;
    chalk.level = 1;
    const { withHexBackgroundColor } = create(1);

    const text = 'Hello';
    const hex = '#fa45be';
    expect(withHexBackgroundColor(hex, text)).toEqual(chalk.bgHex(hex)(text));
  });
});
