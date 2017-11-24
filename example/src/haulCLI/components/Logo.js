import React from 'react';
// eslint-disable-next-line
import { Text, colors } from 'react-stream-renderer';

const logoParts = [
  '_  _  __  _  _ _ ',
  '| || |/  \\| || | |',
  '| >< | /\\ | \\/ | |_',
  '|_||_|_||_|\\__/|___|',
];

export default function Logo({ width }) {
  // @TODO: support multiline textAlign
  return (
    <Text>
      <Text style={{ ...styles.logo, width: width - 1 }}>{logoParts[0]}</Text>
      <Text style={{ ...styles.logo, width: width - 1 }}>{logoParts[1]}</Text>
      <Text style={{ ...styles.logo, width }}>{logoParts[2]}</Text>
      <Text style={{ ...styles.logo, width }}>{logoParts[3]}</Text>
      <Text style={{ ...styles.footnote, width }}>
        {'--> DEMO VERSION <--'}
      </Text>
    </Text>
  );
}

const styles = {
  logo: {
    color: colors.magenta,
    textAlign: 'center',
  },
  footnote: {
    color: 'gray',
    margin: '1 0 0 0',
    textAlign: 'center',
  },
};
