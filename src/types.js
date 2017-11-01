// @flow

export type Props = { [key: string]: any };

export type Element = {
  x: number,
  y: number,
  parentsOffsetX: number,
  parentsOffsetY: number,
  text: string,
};

export type Margins = {
  marginTop: number,
  marginRight: number,
  marginBottom: number,
  marginLeft: number,
};

export type Position = {
  x: number,
  y: number,
};
