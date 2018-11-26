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

export default (containerInstance: Root, target: Target, render: *) => {
  let isInitialRender = true;
  return withErrorHandling(target, {
    // Create instance of host environment specific node or instance of a component.
    createInstance(type: string | Function, props: *) {
      return createElement(type, props);
    },

    createTextInstance(text: string) {
      return createElement('TEXT_NODE', { children: text });
    },

    // Container handlers

    insertInContainerBefore(container: Root, child: *, childBefore: *) {
      container.prependChild(child, container.findChild(childBefore));
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
      parentInstance.prependChild(child, parentInstance.findChild(childBefore));
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
      const { drawableItems, layoutTree } = containerInstance.calculateLayout();
      target.measure('layout-end');
      target.measure('render-start');
      const output = render(
        drawableItems,
        layoutTree.getLayoutTree().dimensions,
        target.getSize()
      );
      target.measure('render-end');
      target.measure('draw-start');
      const keys = Object.keys(output);
      if (keys.length >= 1 && output[0] !== '') {
        Object.keys(output).forEach(index => {
          target.setCursorPosition(0, parseInt(index, 10));
          target.clear(isInitialRender);
          isInitialRender = false;
          target.print(output[index]);
        });
      } else {
        target.print('\n');
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
};
