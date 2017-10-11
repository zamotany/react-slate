import { Children } from 'react';

export default class Node {
  static componentName = 'NODE';

  children = [];

  constructor(container, props) {
    this.container = container;
    this.props = props;
  }

  appendChild(child) {
    this.children.push(child);
  }

  removeChild(child) {
    const index = this.children.indexOf(child);
    this.children.slice(index, 1);
  }

  replaceChildren(newChildren) {
    this.children = newChildren;
  }

  renderChildren() {
    const serialize = children =>
      children.reduce((text, c) => {
        if (['string', 'number'].includes(typeof c)) {
          // It's a string or number
          return text + c;
        } else if (Array.isArray(c.children)) {
          // It's a Node instance
          return text + serialize(c.children);
        }

        // It's a react element
        return text + serialize(Children.toArray(c.props.children));
      }, '');

    const text = serialize(this.children);

    this.container.write(text);
  }

  render() {
    this.renderChildren();
  }
}
