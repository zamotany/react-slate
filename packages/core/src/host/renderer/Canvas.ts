import Paragraph from '../nodes/Paragraph';
import View from '../nodes/View';
import Text from '../nodes/Text';
import { Layout } from '../../layout';
import { Style } from '../../types';

export type Pixel = {
  char: string;
  style?: Style;
  z: number;
};

export default class Canvas {
  pixels: Pixel[][] = [];
  width: number = 0;
  height: number = 0;
  x: number = 0;
  y: number = 0;

  private resize(layout: Layout) {
    for (let y = 0; y < layout.height; y += 1) {
      this.pixels[y] = [];
      for (let x = 0; x < layout.width; x += 1) {
        this.pixels[y][x] = {
          char: '',
          z: -Number.MAX_VALUE,
        };
      }
    }

    this.width = layout.width;
    this.height = layout.height;
    this.x = layout.x;
    this.y = layout.y;
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

  fill(
    node: View | Text | Paragraph,
    layout: Layout,
    { parentZ }: { parentZ: number }
  ) {
    this.resize(layout);

    const body = node instanceof Text && node.getBody();

    for (let y = 0; y < layout.height; y++) {
      // Body X index
      let bx = 0;
      for (let x = 0; x < layout.width; x += 1) {
        this.fillPixel(
          { x, y, z: node.isAbsolute ? node.zIndex : parentZ },
          body ? body[bx] : undefined,
          node.style
        );
        bx += 1;
      }
    }
  }

  mergeChildCanvas(childCanvas: Canvas) {
    for (
      let cy = childCanvas.y, y = 0;
      cy < childCanvas.y + childCanvas.height && cy < this.height;
      cy += 1, y += 1
    ) {
      if (cy < 0) {
        continue;
      }

      for (
        let cx = childCanvas.x, x = 0;
        cx < childCanvas.x + childCanvas.width && cx < this.width;
        cx += 1, x += 1
      ) {
        if (cx < 0) {
          continue;
        }

        const pixel = childCanvas.pixels[y][x];
        this.fillPixel({ x: cx, y: cy, z: pixel.z }, pixel.char, pixel.style);
      }
    }
  }
}
