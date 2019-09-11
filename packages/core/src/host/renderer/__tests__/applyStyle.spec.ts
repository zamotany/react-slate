import colorette from 'colorette';
import applyStyle from '../applyStyle';

colorette.options.enabled = true;

describe('applyStyle', () => {
  it('should reset if color is initial', () => {
    expect(JSON.stringify(applyStyle({ color: 'initial' }, 'hello'))).toMatch(
      /"\\u001b\[0m\\u001b\[0mhello\\u001b\[0m\\u001b\[0m"/
    );
  });

  it('should apply background ANSI color', () => {
    expect(JSON.stringify(applyStyle({ bgColor: 'blue' }, 'hello'))).toMatch(
      /\\u001b\[44mhello\\u001b\[49m/
    );
  });

  it('should should apply raw color', () => {
    expect(JSON.stringify(applyStyle({ color: 'raw(abc)' }, 'hello'))).toMatch(
      /\\u001b\[38;abcmhello\\u001b\[39m/
    );
    expect(
      JSON.stringify(applyStyle({ bgColor: 'raw(abc)' }, 'hello'))
    ).toMatch(/\\u001b\[48;abcmhello\\u001b\[49m/);
  });

  it('should should apply hex color', () => {
    expect(JSON.stringify(applyStyle({ color: '#000000' }, 'hello'))).toMatch(
      /\\u001b\[38;2;0;0;0mhello\\u001b\[39m/
    );
    expect(JSON.stringify(applyStyle({ bgColor: '#000000' }, 'hello'))).toMatch(
      /\\u001b\[48;2;0;0;0mhello\\u001b\[49m/
    );
  });

  it('should should apply rgb color', () => {
    expect(
      JSON.stringify(applyStyle({ color: 'rgb(128, 0, 128)' }, 'hello'))
    ).toMatch(/\\u001b\[38;2;128;0;128mhello\\u001b\[39m/);
    expect(
      JSON.stringify(applyStyle({ bgColor: 'rgb(128, 0, 128)' }, 'hello'))
    ).toMatch(/\\u001b\[48;2;128;0;128mhello\\u001b\[49m/);
  });

  it('should should apply keyword color', () => {
    expect(
      JSON.stringify(applyStyle({ color: 'rgb(orange)' }, 'hello'))
    ).toMatch(/\\u001b\[38;2;255;165;0mhello\\u001b\[39m/);
    expect(
      JSON.stringify(applyStyle({ bgColor: 'rgb(orange)' }, 'hello'))
    ).toMatch(/\\u001b\[48;2;255;165;0mhello\\u001b\[49m/);
  });

  it('should should apply modifier', () => {
    expect(
      JSON.stringify(applyStyle({ modifiers: ['bold'] }, 'hello'))
    ).toMatch(/"\\u001b\[0m\\u001b\[1mhello\\u001b\[22m\\u001b\[0m"/);
    expect(JSON.stringify(applyStyle({ modifiers: ['abc'] }, 'hello'))).toMatch(
      /"\\u001b\[0mhello\\u001b\[0m"/
    );
  });

  it('should properly apply initial color and bgColor', () => {
    expect(
      JSON.stringify(applyStyle({ color: 'initial', bgColor: 'red' }, 'hello'))
    ).toMatch(
      /"\\u001b\[0m\\u001b\[0m\\u001b\[41mhello\\u001b\[49m\\u001b\[0m\\u001b\[0m"/
    );
    expect(
      JSON.stringify(applyStyle({ color: 'red', bgColor: 'initial' }, 'hello'))
    ).toMatch(
      /"\\u001b\[0m\\u001b\[0m\\u001b\[31mhello\\u001b\[39m\\u001b\[0m\\u001b\[0m"/
    );
    expect(
      JSON.stringify(applyStyle({ color: 'red', bgColor: 'blue' }, 'hello'))
    ).toMatch(
      /"\\u001b\[0m\\u001b\[44m\\u001b\[31mhello\\u001b\[39m\\u001b\[49m\\u001b\[0m"/
    );
  });

  it('should should not apply anything if NO_COLOR is set', () => {
    delete process.env.NO_COLOR;
    expect(JSON.stringify(applyStyle({ color: 'red' }, 'hello'))).toMatch(
      /".+hello.+"/
    );
    process.env.NO_COLOR = '1';
    expect(JSON.stringify(applyStyle({ color: 'red' }, 'hello'))).toMatch(
      /"hello"/
    );
    delete process.env.NO_COLOR;
  });
});
