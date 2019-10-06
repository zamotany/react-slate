import View from './nodes/View';
import Text from './nodes/Text';
import Paragraph from './nodes/Paragraph';

export default function createElement(type: Function | string, props: any) {
  if (typeof type === 'function') {
    return type;
  }

  let instance;
  switch (type) {
    case View.TAG: {
      instance = new View();
      if (props.layoutStyle) {
        instance.setLayoutStyle(props.layoutStyle);
      }
      break;
    }
    case Paragraph.TAG: {
      instance = new Paragraph();
      break;
    }
    case Text.TAG: {
      instance = new Text();
      instance.setBody(props.children);
      break;
    }
    default: {
      break;
    }
  }

  if (instance) {
    instance.testID = props.testID;
    if (props.style) {
      instance.style = props.style;
    }
    if (props.onLayout) {
      instance.onLayoutHook = props.onLayout;
    }
    if (props.onClick) {
      instance.eventListener.setOnClickListener(props.onClick);
    }
    if (props.onWheel) {
      instance.eventListener.setOnWheelListener(props.onWheel);
    }
  }

  return instance;
}
