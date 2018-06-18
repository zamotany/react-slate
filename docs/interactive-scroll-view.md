---
id: interactive-scroll-view
title: ScrollView 
sidebar_label: ScrollView
---

Extends the basic build block View and add an ability to scroll its content while the user is using mouse scroll event. Great for many kinds of reporters-like applications, especially with `follow` property.

## Props

* `children: Element<*>`
* `height: number`
* `inputStream: tty$ReadStream`
* `outputStream: tty$WriteStream`
* `reportingRatio: number` - speed of the scrolling (defaults to 0.25)
* `inverted?: boolean` - how should scroll direction affect rendering
* `style?: Style` - Object with [Style properties](./style-prop.md)
* `follow?: boolean`, - if the cursor is at the bottom and follow is enabled the ScrollView will autoscroll with its new content
* `disabled?: boolean`,

## Example

```js
import React from "react";
import { ScrollView } from "@react-slate/interactive";

class App extends React.Component {
  render() {
    return (
      <View>
        <ScrollView height={1} style={{ border: "1px solid red" }}>
          <View>{"Scroll!"}</View>
          <View>{"... yeah ..."}</View>
          <View>{"... you are ..."}</View>
          <View>{"... scrolling ..."}</View>
          <View>{"... awesome, right?"}</View>
        </ScrollView>
      </View>
    );
  }
}
```
