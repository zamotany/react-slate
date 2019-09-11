# Getting started

Before we start writing our first terminal app, we need to set up the project first.

Create a new directory `TerminalApp` and run `yarn init` inside it.
   
Now let's install the dependencies we'll be using, run:

```sh
yarn add react @react-slate/core
```

And:

```sh
yarn add -D @babel/core @babel/cli @babel/preset-env @babel/preset-react
```

If you plan on using TypeScript install `@babel/preset-typescript` as well:

```sh
yarn add -D @babel/preset-typescript
```

Great, let's write some code!

Let's import `render` and `Text` from `@react-slate/core` and make it display a `Hello World` text:

```js
import React from 'react';
import { render, Text } from '@react-slate/core';

const App = () => <Text>Hello World</Text>;

render(<App />);
```

Now you should see:

![Getting started: Image 1](/_assets/getting_started_1.png)

Use `CTRL + C` to exit the app.

Let's add some styling and layout, import `View` from `@react-slate/core` and center the text vertically and horizontally:

```js
import React from 'react';
import { render, Text, View } from '@react-slate/core';

const App = () => (
  <View width="100%" height="100%" justifyContent="center" alignItems="center">
    <Text>Hello World</Text>
  </View>
);

render(<App />);
```

You should see something like this:

![Getting started: Image 2](/_assets/getting_started_2.png)

Let's make the Hello World text more interesting, use `bold` and `color` props to style the text:

```js
import React from 'react';
import { render, Text, View } from '@react-slate/core';

const App = () => (
  <View width="100%" height="100%" justifyContent="center" alignItems="center">
    <Text color="green" bold>
      Hello World
    </Text>
  </View>
);

render(<App />);
```
You should see:

![Getting started: Image 3](/_assets/getting_started_3.png)

Every `react-slate` app can be exited by pressing `CTRL + C`, but let's be more creative and add a exit button:

```js
import React from 'react';
import { render, Text, View, exit } from '@react-slate/core';

const App = () => (
  <View
    width="100%"
    height="100%"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
  >
    <Text color="green" bold>
      Hello World
    </Text>
    <View marginTop={1}>
      <Text
        color="red"
        underline
        textTransform="uppercase"
        onClick={() => {
          exit();
        }}
      >
        exit
      </Text>
    </View>
  </View>
);

render(<App />);
```

Now try running your app and pressing the exit button:

![Getting started: Image 4](/_assets/getting_started_4.png)

Congratulations, you now have a working terminal app. Go explore the rest of the docs and write awesome stuff!
