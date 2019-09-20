import React from 'react';
import Paragraph from '../host/nodes/Paragraph';
import { capitalize } from '../utils';
import {
  SingleOrMulti,
  TextTransform,
  OnLayoutHook,
  MouseEventHandler,
} from '../types';

export type Props = {
  children: SingleOrMulti<number | string | JSX.Element>;
  color?: string;
  bgColor?: string;
  textTransform?: TextTransform;
  dim?: boolean;
  underline?: boolean;
  lineThrough?: boolean;
  bold?: boolean;
  italic?: boolean;
  onLayout?: OnLayoutHook;
  onClick?: MouseEventHandler;
  onWheel?: MouseEventHandler;
};

export default function View(props: Props) {
  return (
    // @ts-ignore
    <Paragraph.TAG
      onLayout={props.onLayout}
      onClick={props.onClick}
      onWheel={props.onWheel}
      style={{
        color: props.color,
        bgColor: props.bgColor,
        modifiers: reduceModifiers(props),
      }}
    >
      {React.Children.map(props.children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            textTransform: props.textTransform,
          } as any);
        }

        switch (props.textTransform) {
          case 'capitalize': {
            return capitalize(child.toString());
          }
          case 'lowercase': {
            return child.toString().toLowerCase();
          }
          case 'uppercase': {
            return child.toString().toUpperCase();
          }
          case 'none':
          default:
            return child;
        }
      })}
    </Paragraph.TAG>
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
