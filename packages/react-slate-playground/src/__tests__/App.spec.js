import React from 'react';
import { renderToString } from 'react-slate';
import stripAnsi from 'strip-ansi';
import App from '../App';

test('App should render', () => {
  expect(stripAnsi(renderToString(<App />, { width: 60 }))).toMatchSnapshot();
});
