const { Suite } = require('benchmark'); // eslint-disable-line
const RenderingPipeline = require('../build/render/RenderingPipeline').default;

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

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const pipeline1 = new RenderingPipeline();
const pipeline2 = new RenderingPipeline();

const suite = new Suite();
suite
  .add('full render', () => {
    fixture[5].box.width = random(5, 20);
    fixture[5].box.height = random(1, 5);
    fixture[5].box.x = random(1, 10);
    fixture[5].box.y = random(1, 10);
    pipeline1.render(fixture);
  })
  .add('diff render', () => {
    fixture[5].box.width = random(5, 20);
    fixture[5].box.height = random(1, 5);
    fixture[5].box.x = random(1, 10);
    fixture[5].box.y = random(1, 10);
    pipeline2.renderDiff(fixture);
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
