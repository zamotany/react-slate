---
id: test-adapter
title: makeTestAdapter
sidebar_label: makeTestAdapter
---

Creates an adapter for testing. You can provide hooks to assert the rendered content.

### `makeTestAdapter(options: Options): TestAdapter`

### `options: Options`

* `height: number = 40` - Canvas height (default: `40`)
* `width: number = 80` - Canvas width (default: `80`)
* `onPrint?: (data: string) => void` - Testing hook executed on each render, `data` will be a string with full rendered content.
* `onClear: () => void` - Testing hook executed when canvas should be cleared.
* `onSetCursorPosition: (x: number, y: number) => void`- Testing hook executed when cursor should be changed.

## Example

```js
test('render should draw content', () => {
  const onPrint = jest.fn();
  const adapter = makeTestAdapter({ onPrint });

  render(<View>Test</View>, adapter);
  expect(onPrint).toHaveBeenCalledWith('Test');
});
```
