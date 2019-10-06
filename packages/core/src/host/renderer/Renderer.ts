import shallowequal from 'shallowequal';
import applyStyle from './applyStyle';
import View from '../nodes/View';
import Text from '../nodes/Text';
import { Style } from '../../types';
import { Layout } from '../../layout';
import Paragraph from '../nodes/Paragraph';
import Canvas, { Pixel } from './Canvas';

export type RenderDiff = Array<{ line: number; text: string }>;

export default class Renderer {
  pixels: Pixel[][] = [];
  private memoizedRows: string[] = [];

  renderToString = (rootNode: View, layout: Layout): string => {
    const canvas = this.render(rootNode, layout);
    this.pixels = canvas.pixels;
    const rows = this.getAnsiRows(canvas);
    return rows.join('\n');
  };

  renderDiff = (rootNode: View, layout: Layout): RenderDiff => {
    const canvas = this.render(rootNode, layout);
    this.pixels = canvas.pixels;
    const rows = this.getAnsiRows(canvas);
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

  private render(rootNode: View | Paragraph | Text, layout: Layout) {
    const canvas = new Canvas();
    canvas.fill(rootNode, layout, { parentZ: rootNode.zIndex });
    rootNode.children.forEach((child, i) => {
      canvas.mergeChildCanvas(this.render(child, layout.child(i)));
    });
    return canvas;
  }

  private getAnsiRows(canvas: Canvas): string[] {
    const rows: string[] = [];
    for (let y = 0; y < canvas.height; y += 1) {
      let line = '';
      let groupText = '';
      let groupAttributes: Style | undefined;
      for (let x = 0; x < canvas.width; x += 1) {
        if (shallowequal(groupAttributes, canvas.pixels[y][x].style)) {
          groupText += canvas.pixels[y][x].char || ' ';
        } else {
          line += groupAttributes
            ? applyStyle(groupAttributes, groupText)
            : groupText;
          groupAttributes = canvas.pixels[y][x].style;
          groupText = canvas.pixels[y][x].char || ' ';
        }
      }
      rows[y] =
        line +
        (groupAttributes ? applyStyle(groupAttributes, groupText) : groupText);
    }
    return rows;
  }
}
