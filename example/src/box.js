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
        dx = -2;
        break;
      case 's':
        dy = 1;
        break;
      case 'd':
        dx = 2;
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
        <Text
          style={{
            marginLeft: this.state.x,
            marginTop: this.state.y,
            backgroundColor: 'grey',
            border: 'solid white',
            padding: '0 2',
          }}
        >
          ABC
        </Text>
        <Text
          style={{
            position: 'fixed',
            left: 10,
            top: 10,
            zIndex: -1,
            border: 'double white',
            width: 23,
            textAlign: 'center',
          }}
        >
          THIS IS FIXED
        </Text>
      </Text>
    );
  }
}
