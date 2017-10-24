import React from 'react';
// eslint-disable-next-line
import { Text, Endl } from 'react-stream-renderer';

export default function Logs({ maxHeight, messages }) {
  return (
    <Text endl>
      <Endl />
      {messages.map(message => (
        <Text style={styles.message} key={message.timestamp}>
          {message.text}
        </Text>
      ))}
      <Endl times={maxHeight - messages.length - 3} />
      <Endl />
    </Text>
  );
}

const styles = {
  message: {
    color: 'gray',
  },
};
