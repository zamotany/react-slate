/* @flow */

import TextNode from '../TextNode';

describe('nodes/TextNode', () => {
  it('should create instance with container and props', () => {
    const container: any = {};
    const props = { x: 1, y: 4 };

    const instance = new TextNode(container, props);

    expect(instance.props).toBe(props);
    expect(instance.container).toBe(container);
  });

  it('should replace children', () => {
    const container: any = {};
    const props = { children: ['foo', 'bar'] };
    const parent = { invalidateParent: jest.fn() };
    const instance = new TextNode(container, props);

    instance.parent = parent;
    instance.replaceChildren(['red', 'car']);

    expect(instance.props.children).toEqual(['red', 'car']);
    expect(parent.invalidateParent).toBeCalled();
  });
});
