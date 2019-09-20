# Colors

`react-slate` supports both standard ANSI colors as well as RGB, HEX and css keyword colors for all `color` and `bgColor` props in [`Text`](components/text) and [`View`](components/view) components.

## Regular ANSI colors

All regular ANSI colors are handled by [colorette](https://www.npmjs.com/package/colorette) package.

| `color` | `bgColor` | Bright `color` | Bright `bgColor` |
| ------- | --------- | -------------- | ---------------- |
| black   | bgBlack   | blackBright    | bgBlackBright    |
| red     | bgRed     | redBright      | bgRedBright      |
| green   | bgGreen   | greenBright    | bgGreenBright    |
| yellow  | bgYellow  | yellowBright   | bgYellowBright   |
| blue    | bgBlue    | blueBright     | bgBlueBright     |
| magenta | bgMagenta | magentaBright  | bgMagentaBright  |
| cyan    | bgCyan    | cyanBright     | bgCyanBright     |
| white   | bgWhite   | whiteBright    | bgWhiteBright    |
| gray    |           |                |                  |

## RGB colors

You can use the following syntax to use RGB colors when specifying `color` or `bgColor` props:

```
rgb(<r>, <g>, <b>)
```

for example:

```jsx
<Text color="rgb(235, 64, 52)">Hello</Text>
<Text color="rgb(52,235,153)">Hello</Text>
<View bgColor="rgb(198, 179, 232)"><Text>Hello</Text></View>
```

If the terminal has Truecolor support (16 million colors), all RGB components (reg, green, blue) will be used as-is. However, if the terminal has only 256 color support or basic color support (16 colors) the RBG colors will be downcast.

The supported color range is handled by [supports-color](https://www.npmjs.com/package/supports-color) and downcasting by [ansi-styles](https://www.npmjs.com/package/ansi-styles).

## HEX colors

You can use 6 character HEX color format perfixed with `#` in `color` and `bgColor` props, for example:

```jsx
<Text color="#eb4034">Hello</Text>
<Text color="#34eb99">Hello</Text>
<View bgColor="#c6b3e8"><Text>Hello</Text></View>
```

All HEX colors, before applying are converted to RGB components (red, green, blue), which means **they underlie the same limits as RGB colors above**.

The conversion from HEX format to RGB format is done by [color-convert](https://www.npmjs.com/package/color-convert).

## CSS keyword colors

You can CSS color keyword wrapped in a `rgb(<color>)` for `color` and `bgColor` props, for example:

```jsx
<Text color="rgb(crimson)">Hello</Text>
<Text color="rgb(lime)">Hello</Text>
<View bgColor="rgb(steelBlue)"><Text>Hello</Text></View>
```

CSS keyword colors, before applying are converted to RGB components (red, green, blue), which means **they underlie the same limits as RGB colors above**.

The conversion from CSS keyword color to RGB format is done by [color-convert](https://www.npmjs.com/package/color-convert).

You can use the following resources to find a CSS color names:

- https://htmlcolorcodes.com/color-names/
- https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
