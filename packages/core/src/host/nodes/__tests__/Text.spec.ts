import Text from '../Text';

test('Text node', () => {
  const text = new Text();

  text.setBody('Hello World');
  expect(text.getBody()).toEqual('Hello World');
  expect(text.layoutNode.getStyle().width).toBe(11);
  expect(text.layoutNode.getStyle().height).toBe(1);

  expect(() => {
    text.setBody('Hello\nWorld');
  }).toThrow('Text body cannot have new line characters');
});
