const { transformSync } = require('@babel/core');

module.exports = {
  canInstrument: true,
  process(src, filename) {
    return transformSync(src, {
      filename,
      sourceMaps: 'inline',
    }) || src;
  }
}
