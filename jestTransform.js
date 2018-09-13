const { transformSync } = require('@babel/core');

module.exports = {
  canInstrument: true,
  process(src) {
    return transformSync(src) || src;
  }
}
