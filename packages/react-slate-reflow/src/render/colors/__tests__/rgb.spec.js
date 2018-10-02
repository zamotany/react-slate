/* @flow */

import chalk from 'chalk';
import { create } from '../rgb';

describe('withRgbColor', () => {
  it('should produce same output as chalk in level 3', () => {
    chalk.enabled = true;
    chalk.level = 3;
    const { withRgbColor } = create(3);

    const text = 'Hello';
    const rgb = [120, 32, 79];
    expect(withRgbColor(rgb, text)).toEqual(chalk.rgb(...rgb)(text));
  });

  it('should produce same output as chalk in level 2', () => {
    chalk.enabled = true;
    chalk.level = 2;
    const { withRgbColor } = create(2);

    const text = 'Hello';
    const rgb = [120, 32, 79];
    expect(withRgbColor(rgb, text)).toEqual(chalk.rgb(...rgb)(text));
  });

  it('should produce same output as chalk in level 1', () => {
    chalk.enabled = true;
    chalk.level = 1;
    const { withRgbColor } = create(1);

    const text = 'Hello';
    const rgb = [120, 32, 79];
    expect(withRgbColor(rgb, text)).toEqual(chalk.rgb(...rgb)(text));
  });
});

describe('withRgbBackgroundColor', () => {
  it('should produce same output as chalk in level 3', () => {
    chalk.enabled = true;
    chalk.level = 3;
    const { withRgbBackgroundColor } = create(3);

    const text = 'Hello';
    const rgb = [120, 32, 79];
    expect(withRgbBackgroundColor(rgb, text)).toEqual(
      chalk.bgRgb(...rgb)(text)
    );
  });

  it('should produce same output as chalk in level 2', () => {
    chalk.enabled = true;
    chalk.level = 2;
    const { withRgbBackgroundColor } = create(2);

    const text = 'Hello';
    const rgb = [120, 32, 79];
    expect(withRgbBackgroundColor(rgb, text)).toEqual(
      chalk.bgRgb(...rgb)(text)
    );
  });

  it('should produce same output as chalk in level 1', () => {
    chalk.enabled = true;
    chalk.level = 1;
    const { withRgbBackgroundColor } = create(1);

    const text = 'Hello';
    const rgb = [120, 32, 79];
    expect(withRgbBackgroundColor(rgb, text)).toEqual(
      chalk.bgRgb(...rgb)(text)
    );
  });
});
