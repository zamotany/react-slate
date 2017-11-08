// @flow

export type Props = { [key: string]: any };

export type Element = {
  x: number,
  y: number,
  parentsOffsetX: number,
  parentsOffsetY: number,
  text: string,
};

export type StyleProps = {
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

export type Position = {
  x: number,
  y: number,
};
