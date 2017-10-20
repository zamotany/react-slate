import { SHOW_CURSOR, HIDE_CURSOR } from '../constants/asciiCodes';

export function hideCursor(stream) {
  stream.write(HIDE_CURSOR);
}

export function showCursor(stream) {
  stream.write(SHOW_CURSOR);
}

export function hideCursorGlobally(stream) {
  hideCursor(stream);

  const restoreCursor = () => showCursor(stream);

  process.on('exit', restoreCursor);
  process.on('SIGINT', restoreCursor);
  process.on('uncaughtException', restoreCursor);
}
