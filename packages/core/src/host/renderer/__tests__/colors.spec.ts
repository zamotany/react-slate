import colorette from 'colorette';
import {
  reset,
  applyAnsiColor,
  applyHexColor,
  applyRgbColor,
  applyKeywordColor,
  applyRgbBackgroundColor,
  applyHexBackgroundColor,
  applyKeywordBackgroundColor,
} from '../colors';

colorette.options.enabled = true;

describe('color module', () => {
  it('reset function should wrap text with reset ANSI codes', () => {
    expect(JSON.stringify(reset('hello'))).toMatch(/0mhello.+0m/);
    expect(JSON.stringify(reset(''))).toMatch('');
  });

  it('applyAnsiColor should apply regular ANSI colors', () => {
    expect(JSON.stringify(applyAnsiColor('red', 'hello'))).toMatch(
      /".+hello.+"/
    );
    expect(JSON.stringify(applyAnsiColor('abc', 'hello'))).toMatch(/^"hello"$/);
  });

  it('applyRgbColor should apply hex colors', () => {
    expect(JSON.stringify(applyRgbColor([128, 128, 128], 'hello', 0))).toMatch(
      /"hello"/
    );
    expect(JSON.stringify(applyRgbColor([128, 128, 128], 'hello', 1))).toMatch(
      /".+hello.+"/
    );
    expect(JSON.stringify(applyRgbColor([128, 128, 128], 'hello', 2))).toMatch(
      /".+hello.+"/
    );
    expect(JSON.stringify(applyRgbColor([128, 128, 128], 'hello', 3))).toMatch(
      /".+hello.+"/
    );
    expect(JSON.stringify(applyRgbColor([128, 128, 128], 'hello'))).toMatch(
      /".+hello.+"/
    );
  });

  it('applyRgbBackgroundColor should apply hex colors', () => {
    expect(
      JSON.stringify(applyRgbBackgroundColor([128, 128, 128], 'hello', 0))
    ).toMatch(/"hello"/);
    expect(
      JSON.stringify(applyRgbBackgroundColor([128, 128, 128], 'hello', 1))
    ).toMatch(/".+hello.+"/);
    expect(
      JSON.stringify(applyRgbBackgroundColor([128, 128, 128], 'hello', 2))
    ).toMatch(/".+hello.+"/);
    expect(
      JSON.stringify(applyRgbBackgroundColor([128, 128, 128], 'hello', 3))
    ).toMatch(/".+hello.+"/);
    expect(
      JSON.stringify(applyRgbBackgroundColor([128, 128, 128], 'hello'))
    ).toMatch(/".+hello.+"/);
  });

  it('applyHexColor should apply hex colors', () => {
    expect(JSON.stringify(applyHexColor('#ffffff', 'hello'))).toMatch(
      /".+hello.+"/
    );
  });

  it('applyHexBackgroundColor should apply hex colors', () => {
    expect(JSON.stringify(applyHexBackgroundColor('#ffffff', 'hello'))).toMatch(
      /".+hello.+"/
    );
  });

  it('applyKeywordColor should apply hex colors', () => {
    expect(JSON.stringify(applyKeywordColor('orange', 'hello'))).toMatch(
      /".+hello.+"/
    );
    expect(JSON.stringify(applyKeywordColor('whops', 'hello'))).toMatch(
      /"hello"/
    );
  });

  it('applyKeywordBackgroundColor should apply hex colors', () => {
    expect(
      JSON.stringify(applyKeywordBackgroundColor('orange', 'hello'))
    ).toMatch(/".+hello.+"/);
    expect(
      JSON.stringify(applyKeywordBackgroundColor('whops', 'hello'))
    ).toMatch(/"hello"/);
  });
});
