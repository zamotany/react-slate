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
    }: any): tty$WriteStream);

    renderToTerminal(<View>Hello World</View>, ttyStream, done);
    expect(buffer).toMatch('Hello World');
  });
});
