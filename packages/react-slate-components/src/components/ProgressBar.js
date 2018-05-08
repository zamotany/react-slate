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
    <View style={{ display: 'inline', ...(props.style || {}) }}>
      <View style={{ display: 'inline', ...(open.style || {}) }}>
        {open.char || '['}
      </View>
      <View style={{ display: 'inline', ...(bar.style || {}) }}>
        {(bar.char || '=').repeat(progress)}
      </View>
      <View style={{ display: 'inline', ...(fill.style || {}) }}>
        {(fill.char || ' ').repeat(width - progress)}
      </View>
      <View style={{ display: 'inline', ...(close.style || {}) }}>
        {close.char || ']'}
      </View>
    </View>
  );
}
