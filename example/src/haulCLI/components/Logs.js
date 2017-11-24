import React from 'react';
// eslint-disable-next-line
import { Text, Endl } from 'react-stream-renderer';

export default function Logs({ height, messages }) {
  return (
    <Text style={{ height, padding: '1 1' }}>
      {messages.slice(2 - height).map(message => (
        <Text style={styles.message} key={message.timestamp}>
          {message.text}
        </Text>
      ))}
    </Text>
  );
}

const styles = {
  message: {
    color: 'gray',
  },
};
