export default class StreamRoot {
  static componentName = 'ROOT';

  children = [];

  constructor(container, props) {
    this.container = container;
    this.props = props;
  }

  shouldComponentUpdate() {
    return true;
  }

  appendChild(child) {
    this.children.push(child);
  }

  removeChild(child) {
    const index = this.children.indexOf(child);
    this.children.slice(index, 1);
  }

  renderChildren() {
    console.log('StreamRoot');
    for (let i = 0; i < this.children.length; i += 1) {
      if (typeof this.children[i] === 'string') {
        // If not a component, render it as a paragraph
        this.container.write(this.children[i]);
      } else if (typeof this.children[i] === 'object') {
        // We know it's a component so just call the render() method
        this.children[i].render();
      }
    }
  }

  render() {
    this.renderChildren();
  }
}
