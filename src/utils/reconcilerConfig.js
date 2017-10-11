/* @flow */

/* eslint-disable no-param-reassign */

// $FlowFixMe
import emptyObject from 'fbjs/lib/emptyObject';
import shallowEqual from 'fbjs/lib/shallowEqual';
import createElement from './createElement';

export default {
  // Creates component instance
  createInstance(
    type,
    props,
    rootContainerInstance
    /* hostContext,
    internalInstanceHandle, */
  ) {
    return createElement(type, props, rootContainerInstance);
  },

  appendInitialChild(parentInstance, child) {
    parentInstance.appendChild(child);
  },

  appendChild(parentInstance, child) {
    parentInstance.appendChild(child);
  },

  appendChildToContainer(container, child) {
    container.setBody(child);
  },

  removeChild(parentInstance, child) {
    parentInstance.removeChild(child);
  },

  insertBefore(parentInstance, child, beforeChild) {
    // noop
  },

  // This is the final method which is called before flushing the root component to the host environment.
  finalizeInitialChildren(testElement, type, props, rootContainerInstance) {
    return false;
  },

  prepareUpdate(testElement, type, oldProps, newProps, hostContext) {
    return !shallowEqual(oldProps, newProps);
  },

  commitUpdate(
    instance,
    updatePayload,
    type,
    oldProps,
    newProps,
    internalInstanceHandle,
  ) {
    debugger;
    instance.replaceChildren(
      Array.isArray(newProps.children) ? newProps.children : [newProps.children]
    );
    instance.container.flush();
  },

  // This is called after initializeFinalChildren
  commitMount(
    instance,
    type,
    newProps,
    rootContainerInstance,
    internalInstanceHandle,
  ) {
    // noop
  },

  getRootHostContext() {
    return emptyObject;
  },

  getChildHostContext() {
    return emptyObject;
  },
  
  getPublicInstance(inst) {
    return inst;
  },

  // These are necessary for any global side-effects that you need to produce in the host environment

  prepareForCommit() {
    // noop
  },

  resetAfterCommit() {
    // noop
  },

  shouldSetTextContent(type: any, props: Object) {
    // return (
    //   typeof props.children === 'string' || typeof props.children === 'number'
    // );
    return false;
  },

  resetTextContent(testElement) {
    // noop
  },

  createTextInstance(
    text,
    rootContainerInstance,
    hostContext,
    internalInstanceHandle,
  ) {
    console.log('createTextInstance');
    return text;
  },

  commitTextUpdate(textInstance, oldText, newText) {
    console.log('commitTextUpdate', textInstance, oldText, newText);
    debugger;
    // return newText;
    // try {
    // textInstance.replaceChildren([newText]);
    // textInstance.render();
    // console.log(textInstance);
    // } catch (e) {
    //   console.log(textInstance, oldText, newText);
    // }
  },
  
  useSyncScheduling: true,
};
