/* @flow */
/* eslint-disable no-bitwise */

import EventEmitter from 'events';
import readline from 'readline';

const ENABLE_MOUSE_REPORTING = ['\x1b[?1005h', '\x1b[?1003h'];
const DISABLE_MOUSE_REPORTING = ['\x1b[?1005l', '\x1b[?1003l'];

const usage = new WeakMap();
const io = new WeakMap();
const reportingEnabled = new WeakMap();
const exitCallbacks = [];

function enableMouseReporting(output) {
  if (output && !reportingEnabled.get(output)) {
    output.write(ENABLE_MOUSE_REPORTING[0]);
    output.write(ENABLE_MOUSE_REPORTING[1]);
    reportingEnabled.set(output, true);
    exitCallbacks.push(() => disableMouseReporting(output));
  }
}

function disableMouseReporting(output) {
  if (output) {
    output.write(DISABLE_MOUSE_REPORTING[0]);
    output.write(DISABLE_MOUSE_REPORTING[1]);
    reportingEnabled.set(output, false);
  }
}

// Side effect: execute exit callbacks before exiting
// due to eg: `process.exit` call. If there was mouse reporting
// enabled it will be disabled here.
process.on('exit', () => {
  exitCallbacks.forEach(fn => fn());
});

export default function configureIoHandler({
  input,
  output,
  mouseReportingRatio = 0.25,
}: {
  input: tty$ReadStream,
  output: ?tty$WriteStream,
  mouseReportingRatio?: number,
}): {
  emitter: EventEmitter,
  dispatch: () => void,
} {
  // If the `input` already has users, it means it's already configured,
  // so we can bail from doing it. Instead we increment usage counter and
  // enable mouse reporting, since it might not have been done yet (if `input`
  // is used alone and then `input` + `output` are passed - `input` was setup,
  // but `output` was not).
  // $FlowFixMe
  if (usage.has(input) && usage.get(input) > 0) {
    usage.set(input, usage.get(input) + 1);

    enableMouseReporting(output);

    // $FlowFixMe
    return io.get(input);
  }

  const emitter = new EventEmitter();
  // Mocked stream for readline to let native node module
  // handle the raw input parsing for key presses.
  const mockedStream = new EventEmitter();

  let mouseReportingAcc = 0;

  const listener = buffer => {
    const data = buffer.toString('utf8');
    if (data === '\u0003') {
      // Ctrl+C
      // Execute exit callbacks before exiting, so mouse reporting
      // was enabled in bailout then disabling it will be enqueued
      // here.
      exitCallbacks.forEach(fn => fn());
      process.kill(process.pid, 'SIGINT');
    }

    // eslint-disable-next-line no-control-regex
    if (/^\u001b\[M/.test(data)) {
      mouseReportingAcc += mouseReportingRatio;
      if (mouseReportingAcc > 1) {
        mouseReportingAcc -= 1;
        emitter.emit('mouse', parseMouseInput(data, buffer));
      }
    } else {
      mockedStream.emit('data', buffer);
    }
  };

  // Let node handle raw input parsing.
  // $FlowFixMe
  readline.emitKeypressEvents(mockedStream);
  mockedStream.on('keypress', (char, keyData) => {
    emitter.emit('keypress', { ...keyData, char });
  });

  input.isTTY && input.setRawMode(true);
  input.addListener('data', listener);
  input.resume();

  enableMouseReporting(output);

  const dispatch = () => {
    const users = usage.get(input);

    if (users && users > 1) {
      usage.set(input, users - 1);
    } else {
      input.isTTY && input.setRawMode(false);
      input.removeListener('data', listener);
      input.pause();

      mockedStream.removeAllListeners();
      emitter.removeAllListeners();

      disableMouseReporting(output);

      usage.delete(input);
      io.delete(input);
    }
  };

  io.set(input, { emitter, dispatch });
  usage.set(input, 1);

  return {
    emitter,
    dispatch,
  };
}

function parseMouseInput(data: string, buffer: Buffer) {
  const modifier = data.charCodeAt(3);
  const mouse = {
    shift: Boolean(modifier & 4),
    meta: Boolean(modifier & 8),
    ctrl: Boolean(modifier & 16),
    name: undefined,
    sequence: data,
    x: data.charCodeAt(4) - 32,
    y: data.charCodeAt(5) - 32,
    button: '',
    buffer,
  };
  if ((modifier & 96) === 96) {
    mouse.name = 'scroll';
    mouse.button = modifier & 1 ? 'down' : 'up';
  } else {
    mouse.name = modifier & 64 ? 'move' : 'click';
    switch (modifier & 3) {
      case 0:
        mouse.button = 'left';
        break;
      case 1:
        mouse.button = 'middle';
        break;
      case 2:
        mouse.button = 'right';
        break;
      case 3:
        mouse.button = 'none';
        break;
      default:
    }
  }
  return mouse;
}
