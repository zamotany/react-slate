/* tslint:disable */

export type Dimension = string | number; // '100%', '100', 100, or 'auto'
 
export type Style = {
  display?: Display,
  positionType?: PositionType,
  direction?: Direction,
  flexDirection?: FlexDirection,
  flexWrap?: FlexWrap,
  overflow?: Overflow,
  alignItems?: AlignItems,
  alignSelf?: AlignSelf,
  alignContent?: AlignContent,
  justifyContent?: JustifyContent,

  start?: Dimension,
  end?: Dimension,
  top?: Dimension,
  bottom?: Dimension,

  marginStart?: Dimension,
  marginEnd?: Dimension,
  marginTop?: Dimension,
  marginBottom?: Dimension,

  paddingStart?: Dimension,
  paddingEnd?: Dimension,
  paddingTop?: Dimension,
  paddingBottom?: Dimension,

  boarderStart?: Dimension,
  boarderEnd?: Dimension,
  boarderTop?: Dimension,
  boarderBottom?: Dimension,

  flexGrow?: number,
  flexShrink?: number,
  flexBasis?: Dimension,

  width?: Dimension,
  height?: Dimension,

  minWidth?: Dimension,
  minHeight?: Dimension,

  maxWidth?: Dimension,
  maxHeight?: Dimension,

  aspectRatio?: number,
}

export enum AlignItems {
  FlexStart,
  FlexEnd,
  Center,
  Baseline,
  Stretch,
}
/**
*/
export enum AlignSelf {
  Auto,
  FlexStart,
  FlexEnd,
  Center,
  Baseline,
  Stretch,
}
/**
*/
export enum AlignContent {
  FlexStart,
  FlexEnd,
  Center,
  Stretch,
  SpaceBetween,
  SpaceAround,
}
/**
*/
export enum Direction {
  Inherit,
  LTR,
  RTL,
}
/**
*/
export enum Display {
  Flex,
  None,
}
/**
*/
export enum FlexDirection {
  Row,
  Column,
  RowReverse,
  ColumnReverse,
}
/**
*/
export enum JustifyContent {
  FlexStart,
  FlexEnd,
  Center,
  SpaceBetween,
  SpaceAround,
  SpaceEvenly,
}
/**
*/
export enum Overflow {
  Visible,
  Hidden,
  Scroll,
}
/**
*/
export enum PositionType {
  Relative,
  Absolute,
}
/**
*/
export enum FlexWrap {
  NoWrap,
  Wrap,
  WrapReverse,
}
/**
*/
/**
*/
export class Allocator {
  free(): void;
/**
* @returns {Allocator} 
*/
  constructor();
}
/**
*/
export class Layout {
  free(): void;
/**
* @param {number} at 
* @returns {Layout} 
*/
  child(at: number): Layout;
  readonly childCount: number;
  readonly height: number;
  readonly width: number;
  readonly x: number;
  readonly y: number;
}
/**
*/
export class Node {
  free(): void;
/**
* @param {Allocator} allocator 
* @param {any} style 
* @returns {Node} 
*/
  constructor(allocator: Allocator, style: any);
/**
* @param {any} measure 
*/
  setMeasure(measure: any): void;
/**
* @param {Node} child 
*/
  addChild(child: Node): void;
/**
* @param {Node} child 
*/
  removeChild(child: Node): void;
/**
* @param {number} index 
* @param {Node} child 
*/
  replaceChildAtIndex(index: number, child: Node): void;
/**
* @param {number} index 
*/
  removeChildAtIndex(index: number): void;
/**
* @returns {any} 
*/
  getStyle(): any;
/**
* @param {any} style 
*/
  setStyle(style: any): void;
/**
*/
  markDirty(): void;
/**
* @returns {boolean} 
*/
  isDirty(): boolean;
/**
* @param {any} size 
* @returns {Layout} 
*/
  computeLayout(size: any): Layout;
  readonly childCount: number;
}
