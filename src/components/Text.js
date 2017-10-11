export default class Text {
  static componentName = 'TEXT';

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
    console.log(this);
    console.log(this.children, this.props.children);
    for (let i = 0; i < this.children.length; i += 1) {
      if (typeof this.children[i] === 'string') {
        this.container.write(this.children[i]);
      } // else { some_custom_method(); } here it's upto you how do you handle the nested components. For our example, we won't go into much details.
    }
  }

  render() {
    console.log('Text#render');
    this.renderChildren();
  }
}
