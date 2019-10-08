let wasm;
const { TextDecoder } = require('util');

function _assertClass(instance, klass) {
  if (!(instance instanceof klass)) {
    throw new Error(`expected instance of ${klass.name}`);
  }
  return instance.ptr;
}

const heap = new Array(32);

heap.fill(undefined);

heap.push(undefined, null, true, false);

let stack_pointer = 32;

function addBorrowedObject(obj) {
  if (stack_pointer == 1) throw new Error('out of js stack');
  heap[--stack_pointer] = obj;
  return stack_pointer;
}

function getObject(idx) {
  return heap[idx];
}

let heap_next = heap.length;

function dropObject(idx) {
  if (idx < 36) return;
  heap[idx] = heap_next;
  heap_next = idx;
}

function takeObject(idx) {
  const ret = getObject(idx);
  dropObject(idx);
  return ret;
}

let cachedTextDecoder = new TextDecoder('utf-8', {
  ignoreBOM: true,
  fatal: true,
});

let cachegetUint8Memory = null;
function getUint8Memory() {
  if (
    cachegetUint8Memory === null ||
    cachegetUint8Memory.buffer !== wasm.memory.buffer
  ) {
    cachegetUint8Memory = new Uint8Array(wasm.memory.buffer);
  }
  return cachegetUint8Memory;
}

function getStringFromWasm(ptr, len) {
  return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
}

function addHeapObject(obj) {
  if (heap_next === heap.length) heap.push(heap.length + 1);
  const idx = heap_next;
  heap_next = heap[idx];

  heap[idx] = obj;
  return idx;
}

function handleError(e) {
  wasm.__wbindgen_exn_store(addHeapObject(e));
}

let WASM_VECTOR_LEN = 0;

let cachegetNodeBufferMemory = null;
function getNodeBufferMemory() {
  if (
    cachegetNodeBufferMemory === null ||
    cachegetNodeBufferMemory.buffer !== wasm.memory.buffer
  ) {
    cachegetNodeBufferMemory = Buffer.from(wasm.memory.buffer);
  }
  return cachegetNodeBufferMemory;
}

function passStringToWasm(arg) {
  const len = Buffer.byteLength(arg);
  const ptr = wasm.__wbindgen_malloc(len);
  getNodeBufferMemory().write(arg, ptr, len);
  WASM_VECTOR_LEN = len;
  return ptr;
}

let cachegetUint32Memory = null;
function getUint32Memory() {
  if (
    cachegetUint32Memory === null ||
    cachegetUint32Memory.buffer !== wasm.memory.buffer
  ) {
    cachegetUint32Memory = new Uint32Array(wasm.memory.buffer);
  }
  return cachegetUint32Memory;
}
/**
 */
module.exports.AlignItems = Object.freeze({
  FlexStart: 0,
  FlexEnd: 1,
  Center: 2,
  Baseline: 3,
  Stretch: 4,
});
/**
 */
module.exports.AlignSelf = Object.freeze({
  Auto: 0,
  FlexStart: 1,
  FlexEnd: 2,
  Center: 3,
  Baseline: 4,
  Stretch: 5,
});
/**
 */
module.exports.AlignContent = Object.freeze({
  FlexStart: 0,
  FlexEnd: 1,
  Center: 2,
  Stretch: 3,
  SpaceBetween: 4,
  SpaceAround: 5,
});
/**
 */
module.exports.Direction = Object.freeze({ Inherit: 0, LTR: 1, RTL: 2 });
/**
 */
module.exports.Display = Object.freeze({ Flex: 0, None: 1 });
/**
 */
module.exports.FlexDirection = Object.freeze({
  Row: 0,
  Column: 1,
  RowReverse: 2,
  ColumnReverse: 3,
});
/**
 */
module.exports.JustifyContent = Object.freeze({
  FlexStart: 0,
  FlexEnd: 1,
  Center: 2,
  SpaceBetween: 3,
  SpaceAround: 4,
  SpaceEvenly: 5,
});
/**
 */
module.exports.Overflow = Object.freeze({ Visible: 0, Hidden: 1, Scroll: 2 });
/**
 */
module.exports.PositionType = Object.freeze({ Relative: 0, Absolute: 1 });
/**
 */
module.exports.FlexWrap = Object.freeze({ NoWrap: 0, Wrap: 1, WrapReverse: 2 });
/**
 */
class Allocator {
  static __wrap(ptr) {
    const obj = Object.create(Allocator.prototype);
    obj.ptr = ptr;

    return obj;
  }

  free() {
    const ptr = this.ptr;
    this.ptr = 0;

    wasm.__wbg_allocator_free(ptr);
  }
  /**
   * @returns {Allocator}
   */
  constructor() {
    const ret = wasm.allocator_new();
    return Allocator.__wrap(ret);
  }
}
module.exports.Allocator = Allocator;
/**
 */
class Layout {
  static __wrap(ptr) {
    const obj = Object.create(Layout.prototype);
    obj.ptr = ptr;

    return obj;
  }

  free() {
    const ptr = this.ptr;
    this.ptr = 0;

    wasm.__wbg_layout_free(ptr);
  }
  /**
   * @returns {number}
   */
  get width() {
    const ret = wasm.__wbg_get_layout_width(this.ptr);
    return ret;
  }
  /**
   * @returns {number}
   */
  get height() {
    const ret = wasm.__wbg_get_layout_height(this.ptr);
    return ret;
  }
  /**
   * @returns {number}
   */
  get x() {
    const ret = wasm.__wbg_get_layout_x(this.ptr);
    return ret;
  }
  /**
   * @returns {number}
   */
  get y() {
    const ret = wasm.__wbg_get_layout_y(this.ptr);
    return ret;
  }
  /**
   * @returns {number}
   */
  get childCount() {
    const ret = wasm.__wbg_get_layout_childCount(this.ptr);
    return ret >>> 0;
  }
  /**
   * @param {number} at
   * @returns {Layout}
   */
  child(at) {
    const ret = wasm.layout_child(this.ptr, at);
    return Layout.__wrap(ret);
  }
}
module.exports.Layout = Layout;
/**
 */
class Node {
  static __wrap(ptr) {
    const obj = Object.create(Node.prototype);
    obj.ptr = ptr;

    return obj;
  }

  free() {
    const ptr = this.ptr;
    this.ptr = 0;

    wasm.__wbg_node_free(ptr);
  }
  /**
   * @returns {number}
   */
  get childCount() {
    const ret = wasm.__wbg_get_node_childCount(this.ptr);
    return ret >>> 0;
  }
  /**
   * @param {Allocator} allocator
   * @param {any} style
   * @returns {Node}
   */
  constructor(allocator, style) {
    _assertClass(allocator, Allocator);
    try {
      const ret = wasm.node_new(allocator.ptr, addBorrowedObject(style));
      return Node.__wrap(ret);
    } finally {
      heap[stack_pointer++] = undefined;
    }
  }
  /**
   * @param {any} measure
   */
  setMeasure(measure) {
    try {
      wasm.node_setMeasure(this.ptr, addBorrowedObject(measure));
    } finally {
      heap[stack_pointer++] = undefined;
    }
  }
  /**
   * @param {Node} child
   */
  addChild(child) {
    _assertClass(child, Node);
    wasm.node_addChild(this.ptr, child.ptr);
  }
  /**
   * @param {Node} child
   */
  removeChild(child) {
    _assertClass(child, Node);
    wasm.node_removeChild(this.ptr, child.ptr);
  }
  /**
   * @param {number} index
   * @param {Node} child
   */
  replaceChildAtIndex(index, child) {
    _assertClass(child, Node);
    wasm.node_replaceChildAtIndex(this.ptr, index, child.ptr);
  }
  /**
   * @param {number} index
   */
  removeChildAtIndex(index) {
    wasm.node_removeChildAtIndex(this.ptr, index);
  }
  /**
   * @returns {any}
   */
  getStyle() {
    const ret = wasm.node_getStyle(this.ptr);
    return takeObject(ret);
  }
  /**
   * @param {any} style
   */
  setStyle(style) {
    try {
      wasm.node_setStyle(this.ptr, addBorrowedObject(style));
    } finally {
      heap[stack_pointer++] = undefined;
    }
  }
  /**
   */
  markDirty() {
    wasm.node_markDirty(this.ptr);
  }
  /**
   * @returns {boolean}
   */
  isDirty() {
    const ret = wasm.node_isDirty(this.ptr);
    return ret !== 0;
  }
  /**
   * @param {any} size
   * @returns {Layout}
   */
  computeLayout(size) {
    try {
      const ret = wasm.node_computeLayout(this.ptr, addBorrowedObject(size));
      return Layout.__wrap(ret);
    } finally {
      heap[stack_pointer++] = undefined;
    }
  }
}
module.exports.Node = Node;

module.exports.__wbindgen_object_drop_ref = function(arg0) {
  takeObject(arg0);
};

module.exports.__wbindgen_string_new = function(arg0, arg1) {
  const ret = getStringFromWasm(arg0, arg1);
  return addHeapObject(ret);
};

module.exports.__wbindgen_object_clone_ref = function(arg0) {
  const ret = getObject(arg0);
  return addHeapObject(ret);
};

module.exports.__wbindgen_number_new = function(arg0) {
  const ret = arg0;
  return addHeapObject(ret);
};

module.exports.__wbg_call_98582f5ce3d4c1ab = function(arg0, arg1, arg2, arg3) {
  try {
    const ret = getObject(arg0).call(
      getObject(arg1),
      getObject(arg2),
      getObject(arg3)
    );
    return addHeapObject(ret);
  } catch (e) {
    handleError(e);
  }
};

module.exports.__wbg_get_a7395f826d52f42a = function(arg0, arg1) {
  try {
    const ret = Reflect.get(getObject(arg0), getObject(arg1));
    return addHeapObject(ret);
  } catch (e) {
    handleError(e);
  }
};

module.exports.__wbg_has_27f12e65cef14759 = function(arg0, arg1) {
  try {
    const ret = Reflect.has(getObject(arg0), getObject(arg1));
    return ret;
  } catch (e) {
    handleError(e);
  }
};

module.exports.__wbindgen_number_get = function(arg0, arg1) {
  const obj = getObject(arg0);
  if (typeof obj === 'number') return obj;
  getUint8Memory()[arg1] = 1;
  const ret = 0;
  return ret;
};

module.exports.__wbindgen_string_get = function(arg0, arg1) {
  const obj = getObject(arg0);
  if (typeof obj !== 'string') return 0;
  const ptr = passStringToWasm(obj);
  getUint32Memory()[arg1 / 4] = WASM_VECTOR_LEN;
  const ret = ptr;
  return ret;
};

module.exports.__wbindgen_throw = function(arg0, arg1) {
  throw new Error(getStringFromWasm(arg0, arg1));
};
wasm = require('./stretch_layout_bg');
