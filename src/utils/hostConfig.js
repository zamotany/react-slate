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
  removeChild(child: any): void,
};

const NOOP = () => {};
const RETURN_EMPTY_OBJ = () => emptyObject;
const NO = () => false;

export default {
  // Creates component instance
  createInstance(
    type: string | Function,
    props: any,
    rootContainerInstance: ContainerNode
  ) {
    return createElement(type, props, rootContainerInstance);
  },

  appendInitialChild(parentInstance: GenericParentInstance, child: any) {
    parentInstance.appendChild(child);
  },

  appendChild(parentInstance: GenericParentInstance, child: any) {
    parentInstance.appendChild(child);
  },

  appendChildToContainer(container: ContainerNode, child: any) {
    container.appendChild(child);
  },

  removeChild(parentInstance: GenericParentInstance, child: any) {
    parentInstance.removeChild(child);
  },

  prepareUpdate(/* testElement, type, oldProps, newProps, hostContext */) {
    // @TODO: change it later
    return true;
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
      instance.container.flush();
    }
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

  commitTextUpdate(textInstance: TextNode, oldText: string, newText: string) {
    textInstance.props = { children: newText };
  },

  commitMount: NOOP,
  getRootHostContext: RETURN_EMPTY_OBJ,
  getChildHostContext: RETURN_EMPTY_OBJ,
  prepareForCommit: NOOP,
  resetAfterCommit: NOOP,
  shouldSetTextContent: NO,
  resetTextContent: NOOP,
  insertBefore: NOOP,
  finalizeInitialChildren: NOOP,

  useSyncScheduling: true,
};
