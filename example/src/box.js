import React from 'react';
// eslint-disable-next-line
import { Text, KeyPress, Endl } from 'react-stream-renderer';

export default class Box extends React.Component {
  state = {
    x: 3,
    y: 5,
  };

  moveBox = ch => {
    let dx = 0;
    let dy = 0;
    switch (ch) {
      case 'w':
        dy = -1;
        break;
      case 'a':
        dx = -1;
        break;
      case 's':
        dy = 1;
        break;
      case 'd':
        dx = 1;
        break;
      default:
    }

    this.setState({
      x: this.state.x + dx,
      y: this.state.y + dy,
    });
  };

  render() {
    return (
      <Text>
        <KeyPress onPress={this.moveBox} stream={process.stdin} />
        <Text x={this.state.x} y={this.state.y}>
          {'+-----+\n'}
          {/* <Endl /> */}
          {'| ABC |\n'}
          {/* <Endl /> */}
          {'+-----+'}
        </Text>
      </Text>
    );
  }
}
