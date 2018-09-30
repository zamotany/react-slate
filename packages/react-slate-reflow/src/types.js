/* @flow */

import type Text from './nodes/Text';
import type View from './nodes/View';
import type Root from './nodes/Root';
import type BoxModel from './layout/lib/BoxModel';

export type LayoutProps = {
  marginLeft?: number,
  marginRight?: number,
  marginTop?: number,
  marginBottom?: number,
  paddingLeft?: number,
  paddingRight?: number,
  paddingTop?: number,
  paddingBottom?: number,
  display?: 'block' | 'inline',
  width?: number | string,
  height?: number | string,
  position?: 'relative' | 'absolute',
  zIndex?: number,
  left?: number,
  top?: number,
};

export type GetConstrain = number => number;
export type NormalizedLayoutProps = {
  insetBounds: Bounds,
  outsetBounds: Bounds,
  isInline: boolean,
  isAbsolute: boolean,
  placement: Position,
  getWidthConstrain: ?GetConstrain,
  getHeightConstrain: ?GetConstrain,
};

export type Bounds = {
  top: number,
  right: number,
  bottom: number,
  left: number,
};

export type BoxStyle = {
  backgroundColor?: string,
};

export type BodyStyle = {
  color?: string,
  fontWeight?: string,
  fontStyle?: string,
  textDecoration?: string,
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase',
  textAlign?: 'left' | 'center' | 'right',
};

export type StyleProps = BoxStyle & BodyStyle;

export type BorderProps = {
  thickness: 'single-line' | 'double-line',
  color?: string,
  backgroundColor?: string,
};

export type Box = {
  style: ?BoxStyle,
  x: number,
  y: number,
  width: number,
  height: number,
};

export type Body = {
  value: string,
  x: number,
  y: number,
  style: ?BodyStyle,
};

export type Drawable = {
  box?: Box,
  body?: Body,
};

export type Position = {
  x: number,
  y: number,
  z: number,
};

export type Size = {
  width: number,
  height: number,
};

type JsonLayoutTree = {
  type: string,
  dimensions: Size,
  placement: Position,
  body?: string,
  children?: JsonLayoutTree[],
};

export interface LayoutElement {
  node: any;
  parent: LayoutElement;
  children: Array<LayoutElement>;
  lastChild: ?LayoutElement;

  boxModel: BoxModel;
  isInline: boolean;
  isAbsolute: boolean;

  reset(): void;
  init(): void;
  updateDimensions(LayoutElement): void;
  isDrawable(): boolean;
  getDrawableItems(): Drawable[];
  getLayoutTree(): JsonLayoutTree;
}

export type ChildNode = View | Text;
export type ParentNode = Root | View;

export interface Node {
  parent: ?(Root | View);
  children: Array<View | Text>;
  layout: LayoutElement;
}
