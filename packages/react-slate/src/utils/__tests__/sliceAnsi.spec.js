import sliceAnsi from '../sliceAnsi';

test('sliceAnsi', () => {
  const output = sliceAnsi(
    '\u001b[38;5;196m│\u001b[39mHello\u001b[38;5;196m│\u001b[39m',
    2
  );
  expect(output).toEqual('\u001b[39mello\u001b[38;5;196m│\u001b[39m');
});
