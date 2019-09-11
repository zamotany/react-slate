import shallowEqual from 'shallowequal';
import ReactReconciler from 'react-reconciler';
import createElement from './createElement';
import Text from './nodes/Text';
import View from './nodes/View';

const NOOP = () => {};
const RETURN_EMPTY_OBJ = () => ({});
const NO = () => false;

export default function createReconcilerConfig(
  containerInstance: View,
  onFlush: () => void
): ReactReconciler.HostConfig<
  any, // TODO: replace with concrete type
  any, // TODO: replace with concrete type
  View,
  View | Text | Function | undefined,
  Text,
  undefined,
  Text | View,
  {},
  any, // TODO: replace with concrete type
  unknown,
  NodeJS.Timeout,
  undefined
> {
  return {
    // Create instance of host environment specific node or instance of a component.
    createInstance(type: string | Function, props: any) {
      return createElement(type, props);
    },

    createTextInstance(text: string) {
      return createElement(Text.TAG, { children: text }) as Text;
    },

    // Container handlers
    insertInContainerBefore(
      container: View,
      child: View | Text,
      childBefore: View | Text
    ) {
      container.prependChild(child, container.findChild(childBefore));
    },

    appendChildToContainer(container: View, child: View | Text) {
      container.appendChild(child);
    },

    removeChildFromContainer(container: View, child: View | Text) {
      container.removeChild(child);
    },

    // Default handlers
    appendInitialChild(parentInstance: View, child: View | Text) {
      parentInstance.appendChild(child);
    },

    appendChild(parentInstance: View, child: View | Text) {
      parentInstance.appendChild(child);
    },

    removeChild(parentInstance: View, child: View | Text) {
      parentInstance.removeChild(child);
    },

    insertBefore(
      parentInstance: View,
      child: View | Text,
      childBefore: View | Text
    ) {
      parentInstance.prependChild(child, parentInstance.findChild(childBefore));
    },

    // Update handlers
    prepareUpdate() {
      return true;
    },

    commitUpdate(
      instance: View | Text,
      _updatePayload: any,
      _type: string,
      oldProps: any,
      newProps: any
    ) {
      if (newProps.onLayout !== instance.onLayoutHook) {
        instance.onLayoutHook = newProps.onLayout;
      }

      if (newProps.onClick !== instance.onClickHook) {
        instance.onClickHook = newProps.onClick;
      }

      if (!shallowEqual(oldProps, newProps)) {
        if (instance instanceof View) {
          instance.setLayoutStyle(newProps.layoutStyle);
        } else if (instance instanceof Text) {
          instance.style = newProps.style;
          instance.setBody(newProps.children);
        }
      }
    },

    commitTextUpdate(textInstance: Text, oldText: string, newText: string) {
      textInstance.setBody(newText);
    },

    resetAfterCommit() {
      onFlush();
    },

    // Misc
    getPublicInstance(inst: any) {
      return inst;
    },

    shouldSetTextContent: (type: string) => {
      if (type === Text.TAG) {
        return true;
      }
      return false;
    },

    commitMount: NOOP,
    getRootHostContext: RETURN_EMPTY_OBJ,
    getChildHostContext: RETURN_EMPTY_OBJ,
    prepareForCommit: NOOP,
    resetTextContent: NOOP,
    finalizeInitialChildren: NO,
    supportsMutation: true,
    shouldDeprioritizeSubtree: NO,
    scheduleDeferredCallback: NOOP,
    cancelDeferredCallback: NOOP,
    setTimeout,
    clearTimeout,
    now: () => Date.now(),
    noTimeout: undefined,
    isPrimaryRenderer: true,
    supportsHydration: false,
    supportsPersistence: false,
  };
}
