import shallowEqual from 'shallowequal';
import ReactReconciler from 'react-reconciler';
import createElement from './createElement';
import Text from './nodes/Text';
import Paragraph from './nodes/Paragraph';
import View from './nodes/View';
import ContainerBase from './nodes/ContainerBase';

const NOOP = () => {};
const RETURN_EMPTY_OBJ = () => ({});
const NO = () => false;

export default function createReconcilerConfig(
  containerInstance: View,
  onFlush: () => void
): ReactReconciler.HostConfig<
  any, // TODO: replace with concrete type
  any, // TODO: replace with concrete type
  ContainerBase<any>,
  View | Paragraph | Text | Function | undefined,
  Text,
  undefined,
  Text | Paragraph | View,
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

    appendChildToContainer(
      container: ContainerBase<any>,
      child: View | Text | Paragraph
    ) {
      container.appendChild(child);
    },

    removeChildFromContainer(
      container: ContainerBase<any>,
      child: View | Text | Paragraph
    ) {
      container.removeChild(child);
    },

    // Default handlers
    appendInitialChild(
      parentInstance: ContainerBase<any>,
      child: View | Text | Paragraph
    ) {
      parentInstance.appendChild(child);
    },

    appendChild(
      parentInstance: ContainerBase<any>,
      child: View | Text | Paragraph
    ) {
      parentInstance.appendChild(child);
    },

    removeChild(
      parentInstance: ContainerBase<any>,
      child: View | Text | Paragraph
    ) {
      parentInstance.removeChild(child);
    },

    insertBefore(
      parentInstance: ContainerBase<any>,
      child: View | Text | Paragraph,
      childBefore: View | Text | Paragraph
    ) {
      parentInstance.prependChild(child, parentInstance.findChild(childBefore));
    },

    // Update handlers
    prepareUpdate() {
      return true;
    },

    commitUpdate(
      instance: View | Paragraph | Text,
      _updatePayload: any,
      _type: string,
      oldProps: any,
      newProps: any
    ) {
      if (newProps.onLayout !== instance.onLayoutHook) {
        instance.onLayoutHook = newProps.onLayout;
      }

      instance.eventListener.setOnClickListener(newProps.onClick);
      instance.eventListener.setOnWheelListener(newProps.onWheel);
      instance.testID = newProps.testID;

      if (!shallowEqual(oldProps, newProps)) {
        if (instance instanceof View) {
          instance.setLayoutStyle(newProps.layoutStyle);
        } else if (instance instanceof Text) {
          instance.style = newProps.style;
          instance.setBody(newProps.children);
        } else if (instance instanceof Paragraph) {
          instance.style = newProps.style;
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

    shouldSetTextContent: NO,
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
