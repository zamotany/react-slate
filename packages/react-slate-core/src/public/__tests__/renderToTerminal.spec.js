/* @flow */

import React from 'react';
import { View, renderToTerminal } from '../../';

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

  it('should render to the same stream', () => {
    let buffer1 = '';
    let buffer2 = '';

    const ttyStream1 = (({
      write(data) {
        buffer1 += data;
      },
      columns: 30,
      rows: 1,
      isTTY: true,
    }: any): tty$WriteStream);

    const ttyStream2 = (({
      write(data) {
        buffer2 += data;
      },
      columns: 30,
      rows: 1,
      isTTY: true,
    }: any): tty$WriteStream);

    renderToTerminal(<View>Hello World</View>, ttyStream1);
    renderToTerminal(<View>Hello World</View>, ttyStream2);
    expect(buffer1).toMatch('Hello World');
    expect(buffer2).toMatch('Hello World');
    renderToTerminal(<View>Hello World Again</View>, ttyStream1);
    expect(buffer1).toMatch(/Hello World.*Hello World Again/);
    expect(buffer2).not.toMatch(/Hello World.*Hello World Again/);
  });

  it('should force render', done => {
    let buffer = '';
    const ttyStream = (({
      write(data) {
        buffer += data;
      },
      columns: 40,
      rows: 1,
      isTTY: true,
    }: any): tty$WriteStream);

    class Element extends React.Component<*, { count: number }> {
      state = {
        count: 0,
      };

      componentWillReceiveProps() {
        this.setState(state => ({ count: state.count + 1 }));
      }

      render() {
        return <View>Hello World {this.state.count}</View>;
      }
    }

    renderToTerminal(<Element />, ttyStream);
    setTimeout(() => {
      renderToTerminal(<Element />, ttyStream, undefined, () => {
        try {
          expect(buffer).toMatch(/Hello World 0.*Hello World 1/);
          done();
        } catch (error) {
          done.fail(error);
        }
      });
    }, 100);
  });
});
