
const path = require('path').join(__dirname, 'stretch_layout_bg.wasm');
const bytes = require('fs').readFileSync(path);
let imports = {};
imports['./stretch_layout.js'] = require('./stretch_layout.js');

const wasmModule = new WebAssembly.Module(bytes);
const wasmInstance = new WebAssembly.Instance(wasmModule, imports);
module.exports = wasmInstance.exports;
