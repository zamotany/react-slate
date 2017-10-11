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
    debugger;
    for (const children of this.children) {
      if (['string', 'number'].includes(typeof children)) {
        // If not a component, render it as a paragraph
        this.container.write(children);
      } else if (typeof children === 'object') {
        // We know it's a component so just call the render() method
        children.render();
      }
    }
  }

  render() {
    this.renderChildren();
  }
}
