import React from 'react';
import Text from '../Text';
import renderToJson from '../../renderToJson';
import { JsonText } from '../../types';

describe('Text component', () => {
  it('should transform children', () => {
    expect(
      (renderToJson(<Text textTransform="uppercase">hello</Text>).snapshot
        .children[0] as JsonText).body
    ).toEqual('HELLO');
    expect(
      (renderToJson(<Text textTransform="lowercase">HELLO</Text>).snapshot
        .children[0] as JsonText).body
    ).toEqual('hello');
    expect(
      (renderToJson(<Text textTransform="capitalize">hello world</Text>)
        .snapshot.children[0] as JsonText).body
    ).toEqual('Hello World');
    expect(
      (renderToJson(<Text textTransform="none">hello</Text>).snapshot
        .children[0] as JsonText).body
    ).toEqual('hello');
    expect(
      (renderToJson(
        <Text textTransform="uppercase">{['hello ', 'world']}</Text>
      ).snapshot.children[0] as JsonText).body
    ).toEqual('HELLO WORLD');
  });

  it('should add modifiers', () => {
    expect(
      renderToJson(<Text>hello</Text>).snapshot.children[0].style.modifiers
    ).toBeUndefined();
    expect(
      renderToJson(<Text bold>hello</Text>).snapshot.children[0].style.modifiers
    ).toEqual(['bold']);
    expect(
      renderToJson(<Text dim>hello</Text>).snapshot.children[0].style.modifiers
    ).toEqual(['dim']);
    expect(
      renderToJson(<Text underline>hello</Text>).snapshot.children[0].style
        .modifiers
    ).toEqual(['underline']);
    expect(
      renderToJson(<Text lineThrough>hello</Text>).snapshot.children[0].style
        .modifiers
    ).toEqual(['strikethrough']);
    expect(
      renderToJson(<Text italic>hello</Text>).snapshot.children[0].style
        .modifiers
    ).toEqual(['italic']);

    expect(
      renderToJson(
        <Text bold italic>
          hello
        </Text>
      ).snapshot.children[0].style.modifiers
    ).toEqual(['bold', 'italic']);
  });

  it('should set color and bgColor', () => {
    expect(
      renderToJson(
        <Text color="red" bgColor="blue">
          hello
        </Text>
      ).snapshot.children[0].style
    ).toEqual({ color: 'red', bgColor: 'blue', modifiers: undefined });
  });
});
