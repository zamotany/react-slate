// @flow

export type Props = { [key: string]: any };

export type Element = {
  x: number,
  y: number,
  parentsOffsetX: number,
  parentsOffsetY: number,
  isRelative: boolean,
  text: string,
};
