export type Style = {
  color?: string;
  bgColor?: string;
  modifiers?: string[];
};

export type RectData = {
  absolute: boolean;
  x: number;
  y: number;
  z: number;
  relativeX: number;
  relativeY: number;
  width: number;
  height: number;
};

export type OnLayoutHook = (layout: RectData) => void;

export type MouseEvent = {
  x: number;
  y: number;
  code: number;
  shift: boolean;
  alt: boolean;
  ctrl: boolean;
};

export type OnClickHook = (event: MouseEvent) => boolean | void;

export type JsonText = {
  node: 'Text';
  body: string;
  width: number;
  height: number;
  x: number;
  y: number;
  style?: Style;
};

export type JsonView = {
  node: 'View';
  children: Array<JsonView | JsonText>;
  width: number;
  height: number;
  x: number;
  y: number;
  style?: Style;
};
