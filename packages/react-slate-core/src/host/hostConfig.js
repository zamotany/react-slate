/* @flow */

/* eslint-disable no-param-reassign */

import { typeof Root, typeof Text, View } from '@react-slate/reflow';
import shallowEqual from 'shallowequal';
import createElement from './createElement';
import splitStyleProps from './splitStyleProps';
import type { Target } from '../types';

const NOOP = () => {};
const RETURN_EMPTY_OBJ = () => ({});
const NO = () => false;

function withErrorHandling(target: Target, config: { [key: string]: * }) {
  return Object.keys(config).reduce(
    (acc, key) => ({
      ...acc,
      [key]:
        typeof config[key] === 'function'
          ? (...args: *) => {
              try {
                return ((config[key]: any): Function)(...args);
              } catch (error) {
                target.raiseError(error);
                return null;
              }
            }
          : config[key],
    }),
    {}
  );
}

export default (containerInstance: Root, target: Target, render: *) =>
  withErrorHandling(target, {
    // Create instance of host environment specific node or instance of a component.
    createInstance(type: string | Function, props: *) {
      return createElement(type, props);
    },

    createTextInstance(text: string) {
      return createElement('TEXT_NODE', { children: text });
    },

    // Container handlers

    insertInContainerBefore(container: Root, child: *, childBefore: *) {
      container.prependChild(child, childBefore);
    },

    appendChildToContainer(container: Root, child: *) {
      container.appendChild(child);
    },

    removeChildFromContainer(container: Root, child: *) {
      container.removeChild(child);
    },

    // Default handlers

    appendInitialChild(parentInstance: View, child: *) {
      parentInstance.appendChild(child);
    },

    appendChild(parentInstance: View, child: *) {
      parentInstance.appendChild(child);
    },

    removeChild(parentInstance: View, child: *) {
      parentInstance.removeChild(child);
    },

    insertBefore(parentInstance: View, child: *, childBefore: *) {
      parentInstance.prependChild(child, childBefore);
    },

    // Update handlers

    prepareUpdate() {
      return true;
    },

    commitUpdate(
      instance: View,
      updatePayload: *,
      type: string,
      oldProps: *,
      newProps: *
    ) {
      // TODO: handle style props separately to avoid unnecessary rendering
      // since style prop will always trigger new render.
      if (!shallowEqual(oldProps, newProps) && instance instanceof View) {
        const { layoutProps, styleProps, borderProps } = splitStyleProps(
          newProps.style
        );
        instance.setLayoutProps(layoutProps);
        instance.setStyleProps(styleProps);
        instance.setBorder(borderProps);
      }
    },

    commitTextUpdate(textInstance: Text, oldText: string, newText: string) {
      textInstance.setBody(newText);
    },

    resetAfterCommit() {
      // This hooks is called once per update, whereas commitUpdate is called multiple times, for
      // each updated node. So here is the best place to flush data to host environment, using
      // container instance.
      target.measure('layout-start');
      const { drawableItems } = containerInstance.calculateLayout();
      target.measure('layout-end');
      target.measure('render-start');
      const output = render(drawableItems, target.getSize());
      target.measure('render-end');
      target.measure('draw-start');
      if (typeof output === 'string') {
        target.setCursorPosition(0, 0);
        target.clear(true);
        target.print(output);
      } else {
        Object.keys(output).forEach(index => {
          target.setCursorPosition(0, parseInt(index, 10));
          target.clear(false);
          target.print(output[index]);
        });
      }
      target.measure('draw-end');
    },

    // Misc

    getPublicInstance(inst: *) {
      return inst;
    },

    commitMount: NOOP,
    getRootHostContext: RETURN_EMPTY_OBJ,
    getChildHostContext: RETURN_EMPTY_OBJ,
    prepareForCommit: NOOP,
    shouldSetTextContent: NO,
    resetTextContent: NOOP,
    finalizeInitialChildren: NOOP,
    now: NOOP,

    useSyncScheduling: true,
    supportsMutation: true,
  });
