import { createBufferedConsole } from '../bufferedConsole';

test('buffered console should buffer messages and flush them programmatically', () => {
  const { bufferedConsole, flushConsole } = createBufferedConsole();
  bufferedConsole.log('Hello');
  const terminal = jest.fn();
  flushConsole(terminal as any);
  expect(terminal).toHaveBeenCalledWith('Hello\n');
});
