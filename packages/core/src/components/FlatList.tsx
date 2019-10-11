import React from 'react';
import View from './View';
import { OnLayoutHook, MouseEventHandler } from '../types';
import renderToJson from '../renderToJson';

type Element<T> = {
  item: T;
  index: number;
};

type Props<T> = {
  itemHeight: number | 'infer';
  data: T[];
  renderItem: (element: Element<T>) => JSX.Element;
  keyExtractor: (element: Element<T>) => number | string;
  scrollMultiplier?: (data: {
    viewportHeight: number;
    itemHeight: number;
  }) => number;
};

type State = {
  height: number;
  offset: number;
};

function throttle<T extends Function>(func: T, limit: number) {
  let inThrottle: boolean;
  return (...args: any[]) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

export default class FlatList<T> extends React.Component<Props<T>, State> {
  state = {
    height: 0,
    offset: 0,
  };

  inferredItemHeight?: number;
  scrollScale = 0;

  getScrollScale() {
    if (this.scrollScale === 0) {
      this.scrollScale = this.props.scrollMultiplier
        ? this.props.scrollMultiplier({
            viewportHeight: this.state.height,
            itemHeight: this.getItemHeight(),
          })
        : this.getItemHeight();
    }

    return this.scrollScale;
  }

  onLayout: OnLayoutHook = layout => {
    if (layout.height !== this.state.height) {
      this.setState({ height: layout.height });
    }
  };

  onWheel = throttle<MouseEventHandler>(evt => {
    this.scrollBy(-(evt.direction || 0) * this.getScrollScale());
  }, 16);

  getItemHeight(): number {
    if (typeof this.props.itemHeight === 'number') {
      return this.props.itemHeight;
    }

    if (
      this.props.itemHeight === 'infer' &&
      this.inferredItemHeight === undefined
    ) {
      const { snapshot } = renderToJson(
        this.props.renderItem({ item: this.props.data[0], index: 0 }),
        { maxRenders: 1 }
      );
      this.inferredItemHeight = snapshot ? snapshot.height : 0;
    } else if (
      this.props.itemHeight === 'infer' &&
      this.inferredItemHeight !== undefined
    ) {
      return this.inferredItemHeight;
    }

    return 0;
  }

  getTotalItemsHeight(): number {
    return this.props.data.length * this.getItemHeight();
  }

  scrollBy(offset: number) {
    this.setState(state => ({
      offset: Math.min(
        Math.max(0, state.offset + offset),
        this.getTotalItemsHeight() - state.height
      ),
    }));
  }

  renderItemsInViewport() {
    const { height, offset } = this.state;
    const itemHeight = this.getItemHeight();

    const paddingTop = -offset % itemHeight;
    const elementCountInViewport = Math.round(height / itemHeight) + 1;
    const sliceStart = Math.floor(offset / itemHeight);

    return (
      <View
        paddingTop={paddingTop}
        height="100%"
        width="100%"
        flexDirection="column"
        justifyContent="flex-start"
      >
        {this.props.data
          .slice(sliceStart, sliceStart + elementCountInViewport)
          .map((item, index) => (
            <View
              key={this.props.keyExtractor({ item, index: index + sliceStart })}
              height={itemHeight}
              width="100%"
              flexShrink={0}
            >
              {this.props.renderItem({ item, index: index + sliceStart })}
            </View>
          ))}
      </View>
    );
  }

  render() {
    return (
      <View
        onLayout={this.onLayout}
        height="100%"
        width="100%"
        onWheel={this.onWheel}
      >
        {this.state.height > 0 ? this.renderItemsInViewport() : null}
      </View>
    );
  }
}
