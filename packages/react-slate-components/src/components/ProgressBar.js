/* @flow */

import React from 'react';
import { View } from '@react-slate/core';

type CharProps = {
  char?: string,
  style?: any,
};

type Props = {
  value: number,
  barWidth: number,
  chars?: {
    open?: CharProps,
    close?: CharProps,
    bar?: CharProps,
    fill?: CharProps,
  },
  style?: any,
};

export default function ProgressBar(props: Props) {
  const { open = {}, close = {}, bar = {}, fill = {} } = props.chars || {};
  const value = Math.min(props.value, 1);
  const width = props.barWidth - 2;
  const progress = Math.round(value * width);

  return (
    <View
      style={[
        { display: 'inline' },
        ...(Array.isArray(props.style) ? props.style : [props.style]),
      ]}
    >
      <View
        style={[
          { display: 'inline' },
          ...(Array.isArray(open.style) ? open.style : [open.style]),
        ]}
      >
        {open.char || '['}
      </View>
      <View
        style={[
          { display: 'inline' },
          ...(Array.isArray(bar.style) ? bar.style : [bar.style]),
        ]}
      >
        {(bar.char || '=').repeat(progress)}
      </View>
      <View
        style={[
          {
            display: 'inline',
          },
          ...(Array.isArray(fill.style) ? fill.style : [fill.style]),
        ]}
      >
        {(fill.char || ' ').repeat(width - progress)}
      </View>
      <View
        style={[
          { display: 'inline' },
          ...(Array.isArray(close.style) ? close.style : [close.style]),
        ]}
      >
        {close.char || ']'}
      </View>
    </View>
  );
}
