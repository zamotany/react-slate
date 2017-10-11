/* eslint-env jest */

const stdoutReactRenderer = require('../');

describe('stdoutReactRenderer', () => {
  it('should return argument', () => {
    expect(stdoutReactRenderer('test')).toBe('test');
  });
});
