import React from 'react';
// eslint-disable-next-line
import { Text, Endl, colors, KeyPress, Spinner, ProgressBar } from 'react-stream-renderer';

const list = [
  'item1',
  {
    label: 'container1',
    folded: false,
    items: ['item2', 'item3'],
  },
  'item4',
  {
    label: 'container2',
    folded: false,
    items: ['item5', 'item6', 'item7'],
  },
  {
    label: 'container3',
    folded: false,
    items: [
      {
        label: 'container4',
        folded: false,
        items: ['item8', 'item9'],
      },
      {
        label: 'container5',
        folded: false,
        items: ['item10', 'item11'],
      },
    ],
  },
];

class Viewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cursorLine: 0,
      list,
    };
    this.currentIndex = 0;
    this.maxIndex = -1;
  }

  _onKeyPress = ch => {
    if (ch === 'w' && this.state.cursorLine > 0) {
      this.setState(state => ({
        ...state,
        cursorLine: state.cursorLine - 1,
      }));
    } else if (ch === 's' && this.state.cursorLine < this.maxIndex - 1) {
      this.setState(state => ({
        ...state,
        cursorLine: state.cursorLine + 1,
      }));
    }
  };

  _renderItem = (item, nestingCount = 0) => {
    const style =
      this.currentIndex === this.state.cursorLine
        ? {
            backgroundColor: colors.blue,
          }
        : {};
    this.currentIndex++;

    if (typeof item === 'string') {
      return (
        <Text key={item} style={style} endl>{`${'  '.repeat(
          nestingCount
        )}${item}`}</Text>
      );
    }
    return (
      <Text key={item.label}>
        <Text style={{ color: colors.yellow, ...style }} endl>
          {`${'  '.repeat(nestingCount)}${item.label}`}
        </Text>
        {item.items.map(element => this._renderItem(element, nestingCount + 1))}
      </Text>
    );
  };

  render() {
    this.currentIndex = 0;
    const body = this.state.list.map(element => this._renderItem(element));
    this.maxIndex = this.currentIndex;
    return (
      <KeyPress stream={process.stdin} onPress={this._onKeyPress}>
        {body}
      </KeyPress>
    );
  }
}

class Throttle extends React.Component {

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return this.props.children;
  }
}

export default () => (
  <Text>
    <Text style={{ color: colors.green }}>List viewer</Text>
    <Endl times={2} />
    <Endl />
    <Spinner interval={200} />
    <Endl />
    {/* <ProgressBar /> */}
    <Endl times={2} />
    <Viewer />
  </Text>
);
