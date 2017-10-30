/* @flow */
/* eslint-disable global-require */

import * as React from 'react';
import dedent from 'dedent';

jest.mock('readline');
jest.mock('../effects/clearCallbacksOnExit');
jest.mock('../effects/enhanceConsole');
jest.mock('../effects/terminal');

describe('index', () => {
  let render;
  let Text;

  beforeEach(() => {
    jest.resetModules();

    render = require('../index').render;
    /* $FlowFixMe */
    Text = require('../index').Text;
  });

  it('should render text', () => {
    const stream = { write: jest.fn() };

    render(<Text>Hello world</Text>, stream);

    expect(stream.write).toBeCalledWith('Hello world\n');
  });

  it('should render nested text', () => {
    const stream = { write: jest.fn() };

    render(
      <Text>
        <Text>abc</Text>
        <Text>12</Text>
      </Text>,
      stream
    );

    expect(stream.write).toBeCalledWith('12c\n');
  });

  it('should render arrays', () => {
    const stream = { write: jest.fn() };

    render(<Text>{['abcde', '1234', <Text key={1}>o m</Text>]}</Text>, stream);

    expect(stream.write).toBeCalledWith('o m4e\n');
  });

  it('should render interpolations', () => {
    const stream = { write: jest.fn() };

    render(
      <Text>
        {'abc'}
        {'12'}
      </Text>,
      stream
    );

    expect(stream.write).toBeCalledWith('12c\n');
  });

  it('should render with position', () => {
    const stream = { write: jest.fn() };

    render(
      <Text>
        <Text x={0} y={0}>
          abc
        </Text>
        <Text x={3} y={2}>
          12
        </Text>
        <Text x={1} y={0}>
          0
        </Text>
      </Text>,
      stream
    );

    expect(stream.write).toBeCalledWith(dedent`
      a0c

         12\n
    `);
  });
});
