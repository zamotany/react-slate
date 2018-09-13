import React from 'react';
import { renderToString } from '@react-slate/core';
import stripAnsi from 'strip-ansi';
import App from '../App';

xtest('App should render', () => {
  expect(stripAnsi(renderToString(<App />, { width: 60 }))).toMatchSnapshot();
});
