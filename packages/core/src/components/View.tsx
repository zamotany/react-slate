import React from 'react';
import { default as HostView } from '../host/nodes/View';
import {
  Style as LayoutStyle,
  Display,
  PositionType,
  FlexDirection,
  FlexWrap,
  Overflow,
  AlignItems,
  AlignContent,
  AlignSelf,
  JustifyContent,
} from '../layout';
import { SingleOrMulti, OnLayoutHook, MouseEventHandler } from '../types';

export type Props = {
  children?: SingleOrMulti<0 | false | null | undefined | JSX.Element>;
  bgColor?: string;
  /** Layout props */
  display?: 'flex' | 'none';
  position?: 'relative' | 'absolute';
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  flexWrap?: 'no-wrap' | 'wrap' | 'wrap-reverse';
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: number | string;
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  alignSelf?:
    | 'auto'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'baseline'
    | 'stretch';
  alignContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'space-between'
    | 'space-around';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  top?: number | string;
  right?: number | string;
  bottom?: number | string;
  left?: number | string;
  zIndex?: number;
  marginTop?: number | string;
  marginRight?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
  paddingTop?: number | string;
  paddingRight?: number | string;
  paddingBottom?: number | string;
  paddingLeft?: number | string;
  width?: number | string;
  height?: number | string;
  minWidth?: number | string;
  minHeight?: number | string;
  maxWidth?: number | string;
  maxHeight?: number | string;
  /** Hooks & handlers */
  onLayout?: OnLayoutHook;
  onClick?: MouseEventHandler;
  onWheel?: MouseEventHandler;
};

export default function View(props: Props) {
  const { children, onLayout, bgColor } = props;
  return (
    // @ts-ignore
    <HostView.TAG
      onLayout={onLayout}
      onClick={props.onClick}
      onWheel={props.onWheel}
      layoutStyle={reduceLayoutStyle(props)}
      style={{ bgColor }}
    >
      {children}
    </HostView.TAG>
  );
}

export function reduceLayoutStyle(
  props: Props
): LayoutStyle & { zIndex: number } {
  return {
    display: props.display === 'none' ? Display.None : Display.Flex,
    positionType:
      props.position === 'absolute'
        ? PositionType.Absolute
        : PositionType.Relative,
    flexDirection: {
      row: FlexDirection.Row,
      'row-reverse': FlexDirection.RowReverse,
      column: FlexDirection.Column,
      'column-reverse': FlexDirection.ColumnReverse,
    }[props.flexDirection || 'row'],
    flexWrap:
      props.flexWrap &&
      {
        'no-wrap': FlexWrap.NoWrap,
        wrap: FlexWrap.Wrap,
        'wrap-reverse': FlexWrap.WrapReverse,
      }[props.flexWrap],
    overflow: Overflow.Hidden,
    alignItems:
      props.alignItems &&
      {
        'flex-start': AlignItems.FlexStart,
        'flex-end': AlignItems.FlexEnd,
        center: AlignItems.Center,
        baseline: AlignItems.Baseline,
        stretch: AlignItems.Stretch,
      }[props.alignItems],
    alignSelf:
      props.alignSelf &&
      {
        auto: AlignSelf.Auto,
        'flex-start': AlignSelf.FlexStart,
        'flex-end': AlignSelf.FlexEnd,
        center: AlignSelf.Center,
        baseline: AlignSelf.Baseline,
        stretch: AlignSelf.Stretch,
      }[props.alignSelf],
    alignContent:
      props.alignContent &&
      {
        'flex-start': AlignContent.FlexStart,
        'flex-end': AlignContent.FlexEnd,
        center: AlignContent.Center,
        stretch: AlignContent.Stretch,
        'space-between': AlignContent.SpaceBetween,
        'space-around': AlignContent.SpaceAround,
      }[props.alignContent],
    justifyContent:
      props.justifyContent &&
      {
        'flex-start': JustifyContent.FlexStart,
        'flex-end': JustifyContent.FlexEnd,
        center: JustifyContent.Center,
        'space-between': JustifyContent.SpaceBetween,
        'space-around': JustifyContent.SpaceAround,
        'space-evenly': JustifyContent.SpaceEvenly,
      }[props.justifyContent],
    start: props.left,
    end: props.right,
    top: props.top,
    bottom: props.bottom,
    marginStart: props.marginLeft,
    marginEnd: props.marginRight,
    marginTop: props.marginTop,
    marginBottom: props.marginBottom,
    paddingStart: props.paddingLeft,
    paddingEnd: props.paddingRight,
    paddingTop: props.paddingTop,
    paddingBottom: props.paddingBottom,
    flexGrow: props.flexGrow,
    flexShrink: props.flexShrink,
    flexBasis: props.flexBasis,
    width: props.width,
    height: props.height,
    minWidth: props.minWidth,
    minHeight: props.minHeight,
    maxWidth: props.maxWidth,
    maxHeight: props.maxHeight,
    zIndex: props.position === 'absolute' ? props.zIndex || 1 : 0,
  };
}
