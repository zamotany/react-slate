/* @flow */

import React from 'react';
import { View } from '../../components';
import renderToTerminal from '../renderToTerminal';

describe('renderToTerminal', () => {
  it('should render hello world to mocked TTY stream', done => {
    let buffer = '';
    const ttyStream = (({
      write(data) {
        buffer += data;
      },
      columns: 20,
      rows: 5,
      isTTY: true,
    }: any): tty$WriteStream);

    renderToTerminal(<View>Hello World</View>, ttyStream, undefined, done);
    expect(buffer).toMatch('Hello World');
  });

  it('should render hello world to non-TTY stream', done => {
    let buffer = '';
    const stream = (({
      write(data) {
        buffer += data;
      },
    }: any): stream$Writable);

    renderToTerminal(
      <View>Hello World</View>,
      stream,
      { width: 30, height: 5 },
      done
    );
    expect(buffer).toMatch('Hello World');
  });
});
