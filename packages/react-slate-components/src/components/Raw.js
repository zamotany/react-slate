/* @flow */

import React from 'react';
import { View } from '@react-slate/core';
import { getAnsiTreeFromText, getStyleFromAnsiCode } from '@react-slate/reflow';

type Props = {
  children: string | string[],
  style?: any,
};

function mapAnsiTreeToViews(node, isTopLevel = false) {
  if (node.text) {
    return (
      <View style={{ display: isTopLevel ? 'block' : 'inline' }}>
        {node.text}
      </View>
    );
  } else if (node.children) {
    const style = getStyleFromAnsiCode(node.code);
    return (
      <View
        style={[
          { display: isTopLevel ? 'block' : 'inline' },
          style && { [style.key]: style.value },
        ]}
      >
        {node.children.map(child => mapAnsiTreeToViews(child))}
      </View>
    );
  }
  return null;
}

export default function Raw(props: Props) {
  const children = Array.isArray(props.children)
    ? props.children
    : props.children.split('\n');
  const body = children
    .map(getAnsiTreeFromText)
    .map(tree => mapAnsiTreeToViews(tree, true));
  return <View style={props.style}>{body}</View>;
}
