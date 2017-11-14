import React from 'react';
// eslint-disable-next-line
import { Text } from 'react-stream-renderer';

export default class DevComponent extends React.Component {
  state = {
    random: 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState(() => ({ random: Math.random() }));
    }, 500);
  }

  render() {
    return (
      <Text
        style={{
          marginTop: 1,
          marginBottom: 1,
          marginLeft: 2,
          marginRight: 2,
          backgroundColor: 'blue',
          width: 20,
          height: 3,
        }}
      >
        <Text style={{ backgroundColor: 'green' }}>---</Text>
        <Text style={{ color: 'red' }}>{this.state.random}</Text>
        <Text>---</Text>
      </Text>
    );
  }
}
