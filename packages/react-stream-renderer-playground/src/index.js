import React from 'react';
import { render, makeTTYAdapter, View, Text } from 'react-stream-renderer';

render(
  <View style={{ margin: '1' }}>
    <Text style={{ color: 'ansi-green' }}>Hello world!</Text>
  </View>,
  makeTTYAdapter(process.stdout)
    .hideCursor()
    .makeEffects()
);
