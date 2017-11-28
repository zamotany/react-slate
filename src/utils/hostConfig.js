/* @flow */

/* eslint-disable no-param-reassign */

// $FlowFixMe
import emptyObject from 'fbjs/lib/emptyObject';
// $FlowFixMe
import shallowEqual from 'fbjs/lib/shallowEqual';
import createElement from './createElement';
import ContainerNode from '../nodes/ContainerNode';
import TextNode from '../nodes/TextNode';

type GenericParentInstance = {
  appendChild(child: any): void,
  appendInitialChild(child: any): void,
  prependChild(child: any, childBefore: any): void,
  removeChild(child: any): void,
};

const NOOP = () => {};
const RETURN_EMPTY_OBJ = () => emptyObject;
const NO = () => false;

export default (containerInstance: ContainerNode) => ({
  // Create instance of host environment specific node or instance of a component.
  createInstance(
    type: string | Function,
    props: any,
    rootContainerInstance: ContainerNode
  ) {
    return createElement(type, props, rootContainerInstance);
  },

  appendInitialChild(parentInstance: GenericParentInstance, child: any) {
    parentInstance.appendInitialChild(child);
  },

  insertInContainerBefore(
    container: ContainerNode,
    child: any,
    childBefore: any
  ) {
    container.prependChild(child, childBefore);
  },

  prepareUpdate(/* testElement, type, oldProps, newProps, hostContext */) {
    // @TODO: change it later
    return true;
  },

  resetAfterCommit() {
    // This hooks is called once per update, whereas commitUpdate is called multiple times, for
    // each updated node. So here is the best place to flush data to host environment, using
    // container instance we stored when appending child to container.
    containerInstance.flush();
  },

  getPublicInstance(inst: any) {
    return inst;
  },

  createTextInstance(text: string, rootContainerInstance: ContainerNode) {
    return createElement(
      'TEXT_NODE',
      { children: text },
      rootContainerInstance
    );
  },

  mutation: {
    appendChild(parentInstance: GenericParentInstance, child: any) {
      parentInstance.appendChild(child);
    },

    removeChild(parentInstance: GenericParentInstance, child: any) {
      parentInstance.removeChild(child);
    },

    appendChildToContainer(container: ContainerNode, child: any) {
      container.appendChild(child);
    },

    removeChildFromContainer(container: ContainerNode, child: any) {
      container.removeChild(child);
    },

    insertBefore(
      parentInstance: GenericParentInstance,
      child: any,
      childBefore: any
    ) {
      parentInstance.prependChild(child, childBefore);
    },

    commitUpdate(
      instance: any,
      updatePayload: any,
      type: string,
      oldProps: any,
      newProps: any
    ) {
      if (!shallowEqual(oldProps, newProps)) {
        instance.props = newProps;
        instance.invalidateParent();
      }
    },

    commitTextUpdate(textInstance: TextNode, oldText: string, newText: string) {
      textInstance.replaceChildren(newText);
    },

    commitMount: NOOP,
  },

  getRootHostContext: RETURN_EMPTY_OBJ,
  getChildHostContext: RETURN_EMPTY_OBJ,
  prepareForCommit: NOOP,
  shouldSetTextContent: NO,
  resetTextContent: NOOP,
  finalizeInitialChildren: NOOP,
  now: NOOP,

  useSyncScheduling: true,
});
