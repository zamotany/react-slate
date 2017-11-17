/* @flow */

import TextNode from './nodes/TextNode';
import ChunkNode from './nodes/ChunkNode';
import Canvas from './utils/Canvas';

export type Props = { [key: string]: any };

export type LayoutProps = {
  marginTop: number,
  marginRight: number,
  marginBottom: number,
  marginLeft: number,
  paddingTop: number,
  paddingRight: number,
  paddingBottom: number,
  paddingLeft: number,
  height: number,
  width: number,
  inline: boolean,
};

export type Style = {|
  color?: string,
  backgroundColor?: string,
  fontWeight?: 'bold' | 'normal',
  fontStyle?: 'italic' | 'normal',
  textDecoration?: 'underline' | 'line-through' | 'normal',
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase',
  visibility?: 'visible' | 'hidden',
  marginTop?: number,
  marginBottom?: number,
  marginLeft?: number,
  marginRight?: number,
  paddingTop?: number,
  paddingBottom?: number,
  paddingLeft?: number,
  paddingRight?: number,
  height?: number,
  width?: number,
  display?: 'block' | 'inline',
|};

export type CustomRender = (
  children: (ChunkNode | TextNode)[],
  props: any,
  canvas: Canvas
) => string[];
