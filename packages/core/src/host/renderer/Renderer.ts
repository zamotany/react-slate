import shallowequal from 'shallowequal';
import applyStyle from './applyStyle';
import View from '../nodes/View';
import Text from '../nodes/Text';
import { Style } from '../../types';
import { Layout } from '../../layout';
import Paragraph from '../nodes/Paragraph';

type Cell = {
  char: string;
  style?: Style;
  zIndex: number;
};

export type RenderDiff = Array<{ line: number; text: string }>;

export default class Renderer {
  canvasHeight: number = 0;
  canvasWidth: number = 0;
  maxHeight: number = Number.MAX_SAFE_INTEGER;
  maxWidth: number = Number.MAX_SAFE_INTEGER;

  canvas: Cell[][] = [];
  private memoizedRows: string[] = [];

  resize(width: number, height: number): void {
    if (width < this.canvasWidth && height < this.canvasHeight) {
      return;
    }

    const safeHeight = Math.min(
      Math.max(height, this.canvasHeight),
      this.maxHeight
    );
    const safeWidth = Math.min(
      Math.max(width, this.canvasWidth),
      this.maxWidth
    );

    for (let y = 0; y < safeHeight; y += 1) {
      if (!this.canvas[y]) {
        this.canvas[y] = [];
      }
      for (let x = 0; x < safeWidth; x += 1) {
        if (!this.canvas[y][x]) {
          this.canvas[y][x] = {
            char: '',
            zIndex: -Number.MAX_VALUE,
          };
        }
      }
    }

    this.canvasHeight = safeHeight;
    this.canvasWidth = safeWidth;
  }

  reset(maxWidth?: number, maxHeight?: number): void {
    this.canvas = [];
    this.canvasHeight = 0;
    this.canvasWidth = 0;
    this.maxWidth =
      maxWidth && maxWidth >= 0 ? maxWidth : Number.MAX_SAFE_INTEGER;
    this.maxHeight =
      maxHeight && maxHeight >= 0 ? maxHeight : Number.MAX_SAFE_INTEGER;
  }

  renderToString = (
    rootNode: View,
    layout: Layout,
    { maxWidth, maxHeight }: { maxWidth?: number; maxHeight?: number } = {}
  ): string => {
    return this.render(rootNode, layout, { maxHeight, maxWidth }).join('\n');
  };

  renderDiff = (
    rootNode: View,
    layout: Layout,
    { maxWidth, maxHeight }: { maxWidth?: number; maxHeight?: number } = {}
  ): RenderDiff => {
    const rows = this.render(rootNode, layout, { maxWidth, maxHeight });
    const diff = [];
    for (
      let y = 0;
      y < Math.max(rows.length, this.memoizedRows.length);
      y += 1
    ) {
      if (this.memoizedRows[y] !== rows[y]) {
        diff[diff.length] = { line: y, text: rows[y] || '' };
      }
    }
    this.memoizedRows = rows;

    return diff;
  };

  private render(
    rootNode: View,
    layout: Layout,
    { maxWidth, maxHeight }: { maxWidth?: number; maxHeight?: number } = {}
  ): string[] {
    this.reset(maxWidth, maxHeight);
    this.resize(layout.width, layout.height);
    this.rasterize(rootNode, layout, 0, 0, 0);
    return this.getAnsiRows();
  }

  private shouldRasterize(style?: Style): boolean {
    return Boolean(style && (style.color || style.bgColor || style.modifiers));
  }

  private assignBodyCell(
    x: number,
    y: number,
    z: number,
    char: string | undefined,
    style?: Style
  ) {
    if (z < this.canvas[y][x].zIndex) {
      return;
    }

    if (char) {
      this.canvas[y][x].char = char;
    }

    if (this.canvas[y][x].zIndex === z) {
      if (style) {
        this.canvas[y][x].style = {
          color:
            style.color ||
            (this.canvas[y][x].style && this.canvas[y][x].style!.color),
          bgColor:
            style.bgColor ||
            (this.canvas[y][x].style && this.canvas[y][x].style!.bgColor),
          modifiers:
            style.modifiers ||
            (this.canvas[y][x].style && this.canvas[y][x].style!.modifiers),
        };
      }
    } else {
      this.canvas[y][x].style = {
        color: style ? style.color : undefined,
        bgColor: style ? style.bgColor : undefined,
        modifiers: style ? style.modifiers : undefined,
      };
    }

    this.canvas[y][x].zIndex = z;
  }

  private rasterize(
    node: View | Text | Paragraph,
    layout: Layout,
    accX: number,
    accY: number,
    zIndex: number
  ) {
    const body = node instanceof Text && node.getBody();
    if (
      this.shouldRasterize(node.style) ||
      (node instanceof Text && node.getBody())
    ) {
      for (
        let y = layout.y + accY;
        y < layout.y + layout.height + accY && y < this.maxHeight;
        y += 1
      ) {
        if (y < 0) {
          continue;
        }

        let bodyIndex = 0;
        for (
          let x = layout.x + accX;
          x < layout.x + layout.width + accX && x < this.maxWidth;
          x += 1
        ) {
          if (x < 0) {
            if (body) {
              bodyIndex += 1;
            }
            continue;
          }

          if (body) {
            this.assignBodyCell(x, y, zIndex, body[bodyIndex], node.style);
            bodyIndex += 1;
          } else {
            this.assignBodyCell(x, y, zIndex, undefined, node.style);
          }
        }
      }
    }

    if ((node instanceof View || node instanceof Paragraph) && node.children) {
      for (let i = 0; i < node.children.length; i++) {
        this.rasterize(
          node.children[i],
          layout.child(i),
          layout.x + accX,
          layout.y + accY,
          node.isAbsolute ? node.zIndex : zIndex
        );
      }
    }
  }

  private getAnsiRows(): string[] {
    const rows: string[] = [];
    for (let y = 0; y < this.canvasHeight; y += 1) {
      let line = '';
      let groupText = '';
      let groupAttributes: Style | undefined;
      for (let x = 0; x < this.canvasWidth; x += 1) {
        if (shallowequal(groupAttributes, this.canvas[y][x].style)) {
          groupText += this.canvas[y][x].char || ' ';
        } else {
          line += groupAttributes
            ? applyStyle(groupAttributes, groupText)
            : groupText;
          groupAttributes = this.canvas[y][x].style;
          groupText = this.canvas[y][x].char || ' ';
        }
      }

      rows[y] =
        line +
        (groupAttributes ? applyStyle(groupAttributes, groupText) : groupText);
    }

    return rows;
  }
}
