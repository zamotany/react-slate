/* @flow */
/* eslint-disable class-methods-use-this */

import fs from 'fs';
import path from 'path';

import BaseAdapter from './BaseAdapter';

export default function makeDevtoolAdapter() {
  const OUT_DIR = path.resolve('.frames');
  let frame = 0;

  return new class extends BaseAdapter {
    constructor() {
      super({ forceFullPrint: true });
    }

    getSize() {
      return {
        height: 60,
        width: 40,
      };
    }

    print(data: string) {
      if (!fs.existsSync(OUT_DIR)) {
        fs.mkdir(OUT_DIR);
      }
      fs.writeFileSync(path.join(OUT_DIR, `frame${frame++}.log`), data);
    }

    clear() {}
    setCursorPosition() {}
  }();
}
