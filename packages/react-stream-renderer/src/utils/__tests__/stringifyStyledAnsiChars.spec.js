import AnsiParser from 'ansi-parser';
import chalk from 'chalk';
import styles from 'ansi-styles';
import stringifyStyledAnsiChars from '../stringifyStyledAnsiChars';

function makeAssertion(input, expectedOutput) {
  console.log(JSON.stringify(input), JSON.stringify(expectedOutput));
  const stringifiedInput = stringifyStyledAnsiChars(AnsiParser.parse(input));
  console.log(JSON.stringify(stringifiedInput));
  expect(stringifiedInput).toEqual(expectedOutput);
}

describe('utils/stringifyStyledAnsiChars', () => {
  it('should return original string', () => {
    // makeAssertion('test string', 'test string');
  });

  xit('with full text color', () => {
    makeAssertion(
      chalk.red('test string'),
      `${styles.red.open}test string${styles.reset.close}`
    );
  });

  xit('with full text background color', () => {
    makeAssertion(
      chalk.bgRed('test string'),
      `${styles.bgRed.open}test string${styles.reset.close}`
    );
  });

  xit('with non-overlapping color and background color', () => {
    makeAssertion(
      `${chalk.red('test')} ${chalk.bgRed('string')}`,
      `${styles.red.open}test${styles.reset.close} ${styles.bgRed.open}string${
        styles.reset.close
      }`
    );
  });

  // with full test bg color
  // with not-overlapping color and bg color
  // with overlapping color and bg color
});
