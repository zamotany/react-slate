/* @flow */

import childProcess from 'child_process';

function runFixture(fixtureName: string) {
  return childProcess.execSync(
    `node -r @babel/register ${require.resolve(
      `./__fixtures__/${fixtureName}`
    )}`
  );
}

describe('App', () => {
  it('should run onExit listeners on normal exit', () => {
    const stdout = runFixture('normalExit.js').toString();
    expect(stdout).toEqual(
      'called onExit Normal listener\ncalled onExit High listener\n'
    );
  });

  it('should run onExit listeners on process.exit(0)', () => {
    const stdout = runFixture('processExit0.js').toString();
    expect(stdout).toEqual('called onExit listener\n');
  });

  it('should run onExit listeners on SIGINT', () => {
    const stdout = runFixture('sigintExit.js').toString();
    expect(stdout).toEqual('called onExit listener\n');
  });

  it('should run onError listeners on sync error throw', () => {
    try {
      runFixture('syncError.js').toString();
    } catch (error) {
      expect(error.stdout.toString()).toEqual(
        'called onError listener TEST_ERROR\n'
      );
    }
  });

  it('should run onError listeners on process.exit(1)', () => {
    try {
      runFixture('processExit1.js').toString();
    } catch (error) {
      expect(error.stdout.toString()).toEqual('called onError listener 1\n');
    }
  });

  it('should run onError listeners on async error throw', () => {
    try {
      runFixture('asyncError.js').toString();
    } catch (error) {
      expect(error.stdout.toString()).toEqual(
        'called onError listener TEST_ERROR\n'
      );
    }
  });

  it('should run onError listeners on async error throw', () => {
    try {
      runFixture('assertError.js').toString();
    } catch (error) {
      expect(error.stdout.toString()).toEqual('called onError listener TEST\n');
    }
  });
});
