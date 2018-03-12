---
id: view-component
title: View
sidebar_label: View
---

Basic building block. Can render text (strings), arrays and other nested components.

## Props

* `style?: Style` - Object with [Style properties](./style-prop.md)

## Example

```js
class App extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.title}>Hello world!</View>
        Today is {new Date().toLocaleString()}
      </View>
    );
  }
}

const styles = {
  title: {
    margin: '0 1',
    color: 'green',
  },
};
```
