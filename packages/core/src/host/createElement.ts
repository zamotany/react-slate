import View from './nodes/View';
import Text from './nodes/Text';

export default function createElement(type: Function | string, props: any) {
  if (typeof type === 'function') {
    return type;
  }

  switch (type) {
    case View.TAG: {
      const instance = new View();
      if (props.style) {
        instance.style = props.style;
      }
      if (props.layoutStyle) {
        instance.setLayoutStyle(props.layoutStyle);
      }
      if (props.onLayout) {
        instance.onLayoutHook = props.onLayout;
      }
      if (props.onClick) {
        instance.onClickHook = props.onClick;
      }
      return instance;
    }
    case Text.TAG: {
      const instance = new Text();
      if (props.style) {
        instance.style = props.style;
      }
      instance.setBody(props.children);
      if (props.onLayout) {
        instance.onLayoutHook = props.onLayout;
      }
      if (props.onClick) {
        instance.onClickHook = props.onClick;
      }
      return instance;
    }
    default: {
      return undefined;
    }
  }
}
