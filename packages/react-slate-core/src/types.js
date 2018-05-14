/* @flow */

import ChunkNode from './nodes/ChunkNode';
import AbsoluteCanvas from './host/AbsoluteCanvas';
import RelativeCanvas from './host/RelativeCanvas';

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

type StyleObject =
  | boolean
  | ?{|
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
      top?: number,
      left?: number,
      position?: 'relative' | 'fixed',
    |};

export type Style = StyleObject | Array<StyleObject>;

export type CustomRender = (
  instance: ChunkNode,
  relativeCanvas: RelativeCanvas,
  absoluteCanvas: AbsoluteCanvas
) => RelativeCanvas;

export type NodeStream = {
  write(data: string): void,
};

export type Target = {
  forceFullPrint: boolean,
  setCursorPosition(x: number, y: number): void,
  print(data: string): void,
  clear(): void,
  getSize(): { width: number, height: number },
};
