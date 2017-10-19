import { SHOW_CURSOR, HIDE_CURSOR } from '../constants/asciiCodes';

export default function hideCursor(stream) {
  stream.write(HIDE_CURSOR);

  const restoreCursor = () => {
    stream.write(SHOW_CURSOR);
  };

  process.on('exit', restoreCursor);
  process.on('SIGINT', restoreCursor);
  process.on('uncaughtException', restoreCursor);
}
