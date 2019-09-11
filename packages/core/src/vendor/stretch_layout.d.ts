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
export class Allocator {
  free(): void;
  constructor();
}
/**
*/
export class Layout {
  free(): void;
  readonly width: number;
  readonly height: number;
  readonly x: number;
  readonly y: number;
  readonly childCount: number;
  child(at: number): Layout;
}
/**
*/
export class Node {
  free(): void;
  readonly childCount: number;
  constructor(allocator: Allocator, style: Style);
  setMeasure(measure: any): void;
  addChild(child: Node): void;
  removeChild(child: Node): void;
  replaceChildAtIndex(index: number, child: Node): void;
  removeChildAtIndex(index: number): void;
  getStyle(): Style;
  setStyle(style: Style): void;
  markDirty(): void;
  isDirty(): boolean;
  computeLayout(size: { width: number | null, height: number | null }): Layout;
}
