import Paragraph from '../nodes/Paragraph';
import View from '../nodes/View';
import Text from '../nodes/Text';
import { Layout } from '../../layout';
import { Style } from '../../types';

type Pixel = {
  char: string;
  style?: Style;
  z: number;
};

export default class Canvas {
  pixels: Pixel[][] = [];
  width: number = 0;
  height: number = 0;

  resize(layout: Layout) {
    for (let y = layout.y; y < layout.y + layout.height; y += 1) {
      if (y < 0) {
        continue;
      }

      if (!this.pixels[y]) {
        this.pixels[y] = [];
      }
      for (let x = layout.x; x < layout.x + layout.width; x += 1) {
        if (x >= 0 && !this.pixels[y][x]) {
          this.pixels[y][x] = {
            char: '',
            z: -Number.MAX_VALUE,
          };
        }
      }
    }

    this.width = layout.x + layout.width;
    this.height = layout.y + layout.height;
  }

  private fillPixel(
    { x, y, z }: { x: number; y: number; z: number },
    char: string | undefined,
    style?: Style
  ) {
    // Pixel is below already stored pixel
    if (z < this.pixels[y][x].z) {
      return;
    }

    if (char) {
      this.pixels[y][x].char = char;
    }

    if (this.pixels[y][x].z === z) {
      if (style) {
        this.pixels[y][x].style = {
          color:
            style.color ||
            (this.pixels[y][x].style && this.pixels[y][x].style!.color),
          bgColor:
            style.bgColor ||
            (this.pixels[y][x].style && this.pixels[y][x].style!.bgColor),
          modifiers:
            style.modifiers ||
            (this.pixels[y][x].style && this.pixels[y][x].style!.modifiers),
        };
      }
    } else {
      this.pixels[y][x].style = {
        color: style ? style.color : undefined,
        bgColor: style ? style.bgColor : undefined,
        modifiers: style ? style.modifiers : undefined,
      };
    }

    this.pixels[y][x].z = z;
  }

  fill(node: View | Text | Paragraph, layout: Layout, { z }: { z: number }) {
    const body = node instanceof Text && node.getBody();

    // Y position can be negative, trimming the content on the top edge.
    // Bottom edge trimming is done when merging canvases.
    for (let y = layout.y; y < layout.y + layout.height; y++) {
      if (y < 0) {
        continue;
      }

      // Body X index
      let bx = 0;
      // X position can be negative, trimming the content on the left edge.
      // Right edge trimming is done when merging canvases.
      for (let x = layout.x; x < layout.x + layout.width; x += 1) {
        if (x < 0) {
          // If left edge trimming is needed, increment bx as well.
          bx += 1;
          continue;
        }

        this.fillPixel({ x, y, z }, body ? body[bx] : undefined, node.style);
        bx += 1;
      }
    }
  }

  mergeChildCanvas(_childCanvas: Canvas) {}
}
