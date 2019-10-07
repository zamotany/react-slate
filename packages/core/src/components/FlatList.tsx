import React from 'react';
import View from './View';
import { OnLayoutHook, MouseEventHandler } from '../types';
import renderToJson from '../renderToJson';

type Element<T> = {
  item: T;
  index: number;
};

type Props<T> = {
  itemHeight?: number | 'infer';
  data: T[];
  renderItem: (element: Element<T>) => JSX.Element;
  keyExtractor: (element: Element<T>) => number | string;
};

type State = {
  height: number;
  offset: number;
};

export default class FlatList<T> extends React.Component<Props<T>, State> {
  state = {
    height: 0,
    offset: 0,
  };

  inferredItemHeight?: number;

  onLayout: OnLayoutHook = layout => {
    if (layout.height !== this.state.height) {
      this.setState({ height: layout.height });
    }
  };

  onWheel: MouseEventHandler = evt => {
    // this.scrollBy(evt.direction || 0);
  };

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
