/* @flow */

import ChunkNode from './nodes/ChunkNode';
import AbsoluteCanvas from './utils/AbsoluteCanvas';
import RelativeCanvas from './utils/RelativeCanvas';

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

export type AbsoluteProps = {
  fixed: boolean,
  x: number,
  y: number,
  z: number,
};

export type Style = {|
  color?: string,
  backgroundColor?: string,
  fontWeight?: 'bold' | 'normal',
  fontStyle?: 'italic' | 'normal',
  textDecoration?: 'underline' | 'line-through' | 'normal',
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase',
  visibility?: 'visible' | 'hidden',
  margin?: string,
  marginTop?: number,
  marginBottom?: number,
  marginLeft?: number,
  marginRight?: number,
  padding?: string,
  paddingTop?: number,
  paddingBottom?: number,
  paddingLeft?: number,
  paddingRight?: number,
  height?: number,
  width?: number,
  display?: 'block' | 'inline',
  border?: string,
  borderStyle?: 'none' | 'solid' | 'double',
  borderColor?: string,
  textAlign?: 'left' | 'center' | 'right',
|};

export type CustomRender = (
  instance: ChunkNode,
  relativeCanvas: RelativeCanvas,
  absoluteCanvas: AbsoluteCanvas
) => RelativeCanvas;
