const { Suite } = require('benchmark');
const { render } = require('../');

const fixture = [];
for (let i = 0; i < 20; i++) {
  fixture.push({
    body: {
      value: `Test ${i}`,
      style: {
        color: 'red',
        backgroundColor: 'blue',
        fontWeight: i % 2 === 0 ? 'bold' : 'normal',
      },
      x: i,
      y: i,
    },
  });
  const colorValue = Math.floor(255 * (i / 20));
  fixture.push({
    box: {
      height: i,
      width: 10,
      style: {
        backgroundColor: `rgb(${colorValue},${colorValue},${colorValue})`,
      },
      x: i,
      y: 0,
    },
  });
}

const suite = new Suite();
suite
  .add('old rendering pipeline', () => {
    render(fixture, { width: -1, height: -1 });
  })
  .on('start', () => {
    console.log('Starting the benchmark...');
  })
  .on('cycle', evt => {
    console.log(
      `${evt.target.name} | ${(evt.target.stats.mean * 1000).toFixed(
        2
      )}ms +/- ${(evt.target.stats.sem * 1000).toFixed(2)} ms (s=${(
        evt.target.stats.deviation * 1000
      ).toFixed(2)}ms)`
    );
  })
  .on('complete', ({ target }) => {
    console.log(`---\n${target.toString()}`);
  })
  .run({ async: false });
