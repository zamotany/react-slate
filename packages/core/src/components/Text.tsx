import React from 'react';
import { default as HostText } from '../host/nodes/Text';
import { capitalize } from '../utils';
import { OnLayoutHook, OnClickHook } from '../types';

export type TextTransform = 'none' | 'capitalize' | 'uppercase' | 'lowercase';
export type Props = {
  children: number | string | string[];
  color?: string;
  bgColor?: string;
  textTransform?: TextTransform;
  dim?: boolean;
  underline?: boolean;
  lineThrough?: boolean;
  bold?: boolean;
  italic?: boolean;
  onLayout?: OnLayoutHook;
  onClick?: OnClickHook;
};

export default function View(props: Props) {
  const children = Array.isArray(props.children)
    ? props.children.join('')
    : props.children.toString();
  let text: string;
  switch (props.textTransform) {
    case 'capitalize': {
      text = capitalize(children);
      break;
    }
    case 'lowercase': {
      text = children.toLowerCase();
      break;
    }
    case 'uppercase': {
      text = children.toUpperCase();
      break;
    }
    case 'none':
    default:
      text = children;
  }

  return (
    // @ts-ignore
    <HostText.TAG
      onLayout={props.onLayout}
      onClick={props.onClick}
      style={{
        color: props.color,
        bgColor: props.bgColor,
        modifiers: reduceModifiers(props),
      }}
    >
      {text}
    </HostText.TAG>
  );
}

function reduceModifiers(props: Props) {
  const modifiers = [];
  if (props.bold) {
    modifiers.push('bold');
  }
  if (props.italic) {
    modifiers.push('italic');
  }
  if (props.dim) {
    modifiers.push('dim');
  }
  if (props.underline) {
    modifiers.push('underline');
  }
  if (props.lineThrough) {
    modifiers.push('strikethrough');
  }
  return modifiers.length ? modifiers : undefined;
}
