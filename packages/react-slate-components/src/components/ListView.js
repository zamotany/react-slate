/* @flow */
/* eslint-disable react/no-unused-prop-types */

import React, { type Element, type ComponentType } from 'react';
import {
  View,
  type Style,
  getDetachedNode,
  renderToString,
} from '@react-slate/core';
import { getLayout } from '@react-slate/reflow';
import Raw from './Raw';
import configureIoHandler from '../io';

type Props<DataT> = {
  listHeight: number,
  data: Array<DataT>,
  renderItem: ({ item: DataT, index: number }) => Element<*>,
  keyExtractor: ({ item: DataT, index: number }) => string,
  inverted?: boolean,
  stickToBottom?: boolean,
  disabled?: boolean,
  EmptyList?: ComponentType<*>,
  Footer?: ComponentType<*>,
  Header?: ComponentType<*>,
  style?: Style,
  listStyle?: Style,
  children?: void,
  inputStream: tty$ReadStream,
  outputStream: tty$WriteStream,
  scrollSensitivity: number,
  accelerationEnabled?: boolean,
  accelerationConfig: { modifier: number, diff: number },
};

type State = {
  index: number,
  itemHeight: number,
  lastDirection: number,
  reachedEnd: boolean,
};

export default class ListView<DataT> extends React.Component<
  Props<DataT>,
  State
> {
  static defaultProps = {
    inputStream: process.stdin,
    outputStream: process.stdout,
    scrollSensitivity: 0.15,
    accelerationConfig: {
      modifier: 15,
      diff: 300,
    },
  };

  static getDerivedStateFromProps(props: Props<DataT>, state: State) {
    let update = null;
    if (props.data.length) {
      if (state.itemHeight === -1) {
        // Initial render: render first child to get each row's height.
        const node = getDetachedNode(
          props.renderItem({ item: props.data[0], index: 0 })
        );
        const layout = getLayout(node);
        update = { itemHeight: layout.height };
      }

      if (props.stickToBottom && state.reachedEnd) {
        const itemHeight = update ? update.itemHeight : state.itemHeight;
        const maxIndex = Math.max(
          props.data.length * itemHeight - props.listHeight,
          0
        );

        update = {
          index: maxIndex,
          ...update,
        };
      }
    }

    return update;
  }

  state = {
    index: 0,
    itemHeight: -1,
    lastDirection: 0,
    reachedEnd: true,
  };
  velocityModifier: number = 0;
  velocityTimestamp: number = Date.now();
  emitter: ?* = null;
  dispatch: ?() => void = null;

  constructor(props: Props<DataT>) {
    super(props);

    if (!this.props.listHeight || this.props.listHeight < 0) {
      throw new Error("ListView's `listHeight` must be a non-negative number.");
    }
  }

  mouseHandler = ({ name, button }: { name: string, button: string }) => {
    if (
      name !== 'scroll' ||
      this.props.disabled ||
      !this.props.data.length ||
      this.state.itemHeight === -1
    ) {
      return;
    }

    const direction =
      (button === 'down' ? 1 : -1) * (this.props.inverted ? -1 : 1);

    if (this.props.accelerationEnabled) {
      const now = Date.now();
      const diff = now - this.velocityTimestamp;
      if (
        diff < this.props.accelerationConfig.diff &&
        direction === this.state.lastDirection
      ) {
        this.velocityModifier += this.props.accelerationConfig.modifier / diff;
      } else {
        this.velocityModifier = 0;
      }
      this.velocityTimestamp = now;
    }

    const velocity =
      direction +
      (direction > 0
        ? Math.floor(this.velocityModifier)
        : -Math.floor(this.velocityModifier));
    const maxIndex = Math.max(
      this.props.data.length * this.state.itemHeight - this.props.listHeight,
      0
    );
    this.setState(state => {
      let index = state.index + velocity;
      index = index > maxIndex ? maxIndex : index;
      index = index < 0 ? 0 : index;
      return {
        index,
        lastDirection: direction,
        reachedEnd: index === maxIndex,
      };
    });
  };

  componentDidMount() {
    const { emitter, dispatch } = configureIoHandler({
      input: this.props.inputStream,
      output: this.props.outputStream,
      mouseReportingRatio: this.props.scrollSensitivity,
    });
    this.emitter = emitter;
    this.dispatch = dispatch;
    emitter.addListener('mouse', this.mouseHandler);
  }

  componentWillUnmount() {
    if (this.emitter) {
      this.emitter.removeListener('mouse', this.mouseHandler);
      this.emitter = null;
    }
    if (this.dispatch) {
      this.dispatch();
      this.dispatch = null;
    }
  }

  render() {
    const {
      data,
      renderItem,
      keyExtractor,
      style,
      listStyle,
      listHeight,
      EmptyList,
      Header,
      Footer,
    } = this.props;

    if (!data.length) {
      if (EmptyList) {
        return <EmptyList />;
      }
      return <View style={style} />;
    }

    const visibleStart = Math.floor(this.state.index / this.state.itemHeight);
    const visibleEnd =
      visibleStart + Math.ceil(listHeight / this.state.itemHeight);
    const shouldUpperTrim = this.state.index % this.state.itemHeight > 0;
    const trimStart = this.state.index % this.state.itemHeight;

    const firstElement = shouldUpperTrim ? (
      <Raw>
        {renderToString(
          renderItem({ item: data[visibleStart], index: visibleStart }),
          {
            height: -1,
            width: -1,
          }
        )
          .split('\n')
          .slice(trimStart)}
      </Raw>
    ) : (
      <View
        key={keyExtractor({ item: data[visibleStart], index: visibleStart })}
      >
        {renderItem({ item: data[visibleStart], index: visibleStart })}
      </View>
    );

    const otherElements = data
      .slice(visibleStart + 1, visibleEnd + 1)
      .map((item, offset) => {
        const index = offset + visibleStart + 1;
        return (
          <View
            key={keyExtractor({
              item: data[index],
              index,
            })}
          >
            {renderItem({
              item: data[index],
              index,
            })}
          </View>
        );
      });

    return (
      <View style={style}>
        {Header && <Header />}
        <View style={[listStyle, { height: listHeight }]}>
          {firstElement}
          {otherElements}
        </View>
        {Footer && <Footer />}
      </View>
    );
  }
}
