/* @flow */

export type Props = { [key: string]: any };

type StyleObject =
  | boolean
  | ?{|
      color?: string,
      backgroundColor?: string,
      fontWeight?: 'bold' | 'normal',
      fontStyle?: 'italic' | 'normal',
      textDecoration?: 'underline' | 'line-through' | 'normal',
      textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase',
      // visibility?: 'visible' | 'hidden',
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
      borderBackgroundColor?: string,
      textAlign?: 'left' | 'center' | 'right',
      top?: number,
      left?: number,
      position?: 'relative' | 'absolute',
    |};

export type Style = StyleObject | Array<Style>;

export type NodeStream = {
  write(data: string): void,
};

export type Target = {
  forceFullPrint: boolean,
  setCursorPosition(x: number, y: number): void,
  print(data: string): void,
  clear(fullScreen: boolean): void,
  getSize(): { width: number, height: number },
  raiseError(error: Error): void,
  measure(
    id:
      | 'layout-start'
      | 'layout-end'
      | 'render-start'
      | 'render-end'
      | 'draw-start'
      | 'draw-end'
  ): void,
};
