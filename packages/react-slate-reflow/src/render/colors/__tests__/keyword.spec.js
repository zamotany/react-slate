/* @flow */

import chalk from 'chalk';
import { create } from '../keyword';

describe('withKeywordColor', () => {
  it('should produce same output as chalk in level 3', () => {
    chalk.enabled = true;
    chalk.level = 3;
    const { withKeywordColor } = create(3);

    const text = 'Hello';
    const keyword = 'orange';
    expect(withKeywordColor(keyword, text)).toEqual(
      chalk.keyword(keyword)(text)
    );
  });

  it('should produce same output as chalk in level 2', () => {
    chalk.enabled = true;
    chalk.level = 2;
    const { withKeywordColor } = create(2);

    const text = 'Hello';
    const keyword = 'orange';
    expect(withKeywordColor(keyword, text)).toEqual(
      chalk.keyword(keyword)(text)
    );
  });

  it('should produce same output as chalk in level 1', () => {
    chalk.enabled = true;
    chalk.level = 1;
    const { withKeywordColor } = create(1);

    const text = 'Hello';
    const keyword = 'orange';
    expect(withKeywordColor(keyword, text)).toEqual(
      chalk.keyword(keyword)(text)
    );
  });
});

describe('withKeywordBackgroundColor', () => {
  it('should produce same output as chalk in level 3', () => {
    chalk.enabled = true;
    chalk.level = 3;
    const { withKeywordBackgroundColor } = create(3);

    const text = 'Hello';
    const keyword = 'orange';
    expect(withKeywordBackgroundColor(keyword, text)).toEqual(
      chalk.bgKeyword(keyword)(text)
    );
  });

  it('should produce same output as chalk in level 2', () => {
    chalk.enabled = true;
    chalk.level = 2;
    const { withKeywordBackgroundColor } = create(2);

    const text = 'Hello';
    const keyword = 'orange';
    expect(withKeywordBackgroundColor(keyword, text)).toEqual(
      chalk.bgKeyword(keyword)(text)
    );
  });

  it('should produce same output as chalk in level 1', () => {
    chalk.enabled = true;
    chalk.level = 1;
    const { withKeywordBackgroundColor } = create(1);

    const text = 'Hello';
    const keyword = 'orange';
    expect(withKeywordBackgroundColor(keyword, text)).toEqual(
      chalk.bgKeyword(keyword)(text)
    );
  });
});
