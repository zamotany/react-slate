/* @flow */

import React from 'react';
import { View } from '@react-slate/core';
import { getAnsiTreeFromText, getStyleFromAnsiCode } from '@react-slate/reflow';

type Props = {
  children: string | string[],
  style?: any,
};

function mapAnsiTreeToViews(node) {
  if (node.text) {
    return <View>{node.text}</View>;
  } else if (node.children) {
    const style = getStyleFromAnsiCode(node.code);
    return (
      <View style={style && { [style.key]: style.value }}>
        {node.children.map(mapAnsiTreeToViews)}
      </View>
    );
  }
  return null;
}

export default function Raw(props: Props) {
  const children = Array.isArray(props.children)
    ? props.children
    : props.children.split('\n');
  const body = children.map(getAnsiTreeFromText).map(mapAnsiTreeToViews);
  return <View style={props.style}>{body}</View>;
}
