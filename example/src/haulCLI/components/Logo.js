import React from 'react';
// eslint-disable-next-line
import { Text, Endl } from 'react-stream-renderer';

const logoParts = [
  ' _  _  __  _  _ _',
  '| || |/  \\| || | |',
  '| >< | /\\ | \\/ | |_',
  '|_||_|_||_|\\__/|___|',
];

export default function Logo({ width }) {
  let longestLine = 0;
  logoParts.forEach(line => {
    if (line.length > longestLine) {
      longestLine = line.length;
    }
  });
  const getMargin = contentLength => Math.floor((width - contentLength) / 2);
  const logo = logoParts
    .map(line => `${' '.repeat(getMargin(longestLine))}${line}`)
    .join('\n');
  const footnoteContent = '--> DEMO VERSION <--';
  const footnote = `${' '.repeat(
    getMargin(footnoteContent.length)
  )}${footnoteContent}`;

  return (
    <Text>
      <Text style={styles.logo}>{logo}</Text>
      <Endl times={2} />
      <Text style={styles.footnote}>{footnote}</Text>
    </Text>
  );
}

const styles = {
  logo: {
    color: 'green',
  },
  footnote: {
    color: 'gray',
  },
};
