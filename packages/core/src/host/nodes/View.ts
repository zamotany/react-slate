import Text from './Text';
import { Style as LayoutStyle, PositionType } from '../../layout';
import ContainerBase from './ContainerBase';

export default class View extends ContainerBase<View | Text> {
  static TAG = 'VIEW_NODE';

  setLayoutStyle(style: LayoutStyle & { zIndex?: number }) {
    const isAbsolute = style.positionType === PositionType.Absolute;
    if (this.isAbsolute !== isAbsolute || this.zIndex !== style.zIndex) {
      this.isAbsolute = isAbsolute;
      if (style.zIndex && isAbsolute) {
        this.zIndex = style.zIndex;
      } else {
        this.zIndex = isAbsolute ? 1 : 0;
      }
    }

    this.layoutNode.setStyle({
      ...this.layoutNode.getStyle(),
      ...style,
    });
  }
}
