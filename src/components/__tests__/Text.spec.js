/* @flow */

import * as React from 'react';
import { render } from 'enzyme';
import Text from '../Text';
import colors from '../../constants/colors';

xdescribe('Text component', () => {
  it('renders children', () => {
    const element = render(
      <Text>
        {'Hello world\n'}
        <Text>Something more</Text>
        {[<Text key="1">No way</Text>, <Text key="2">Haha</Text>]}
      </Text>
    );
    expect(element.text()).toMatchSnapshot();
  });

  it('respects color and background color', () => {
    const colored = render(
      <Text
        style={{
          color: colors.magenta,
          backgroundColor: colors.cyan,
        }}
      >
        Hello world
      </Text>
    );
    expect(colored.text()).toMatchSnapshot();
  });

  it('respects fontWeight', () => {
    const bold = render(
      <Text style={{ fontWeight: 'bold' }}>Hello world</Text>
    );
    const normal = render(
      <Text style={{ fontWeight: 'normal' }}>Hello world</Text>
    );
    expect(bold.text()).toMatchSnapshot();
    expect(normal.text()).toMatchSnapshot();
  });

  it('respects fontStyle', () => {
    const italic = render(
      <Text style={{ fontStyle: 'italic' }}>Hello world</Text>
    );
    const normal = render(
      <Text style={{ fontStyle: 'normal' }}>Hello world</Text>
    );
    expect(italic.text()).toMatchSnapshot();
    expect(normal.text()).toMatchSnapshot();
  });

  it('respects textDecoration', () => {
    const underline = render(
      <Text style={{ textDecoration: 'underline' }}>Hello world</Text>
    );
    const lineThrough = render(
      <Text style={{ textDecoration: 'line-through' }}>Hello world</Text>
    );
    const normal = render(
      <Text style={{ textDecoration: 'normal' }}>Hello world</Text>
    );
    expect(underline.text()).toMatchSnapshot();
    expect(lineThrough.text()).toMatchSnapshot();
    expect(normal.text()).toMatchSnapshot();
  });

  it('respects textTransform', () => {
    const capitalize = render(
      <Text style={{ textTransform: 'capitalize' }}>Hello world</Text>
    );
    const uppercase = render(
      <Text style={{ textTransform: 'uppercase' }}>Hello world</Text>
    );
    const lowercase = render(
      <Text style={{ textTransform: 'lowercase' }}>Hello world</Text>
    );
    const none = render(
      <Text style={{ textTransform: 'none' }}>Hello world</Text>
    );
    expect(capitalize.text()).toMatchSnapshot();
    expect(uppercase.text()).toMatchSnapshot();
    expect(lowercase.text()).toMatchSnapshot();
    expect(none.text()).toMatchSnapshot();
  });

  it('respects visibility', () => {
    const visible = render(
      <Text style={{ visibility: 'visible' }}>Hello world</Text>
    );
    const hidden = render(
      <Text style={{ visibility: 'hidden' }}>Hello world</Text>
    );
    expect(visible.text()).toMatchSnapshot();
    expect(hidden.text()).toMatchSnapshot();
  });
});
