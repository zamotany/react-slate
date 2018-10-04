/* @flow */

import WebSocket from 'ws';
import ReconnectingWebsocket from 'reconnecting-websocket';
import { App } from '@react-slate/core';
import throttle from 'lodash.throttle';
import type { Target } from '@react-slate/core';

type Notify = (string | Object) => void;
type DevTool = (Target, Notify) => Target;

export default function compose(...devTools: DevTool[]) {
  return (
    target: Target,
    {
      hostname = 'localhost',
      port = 9000,
    }: { hostname: string, port: number } = {}
  ) => {
    const address = `ws://${hostname}:${port}`;
    const socket = new ReconnectingWebsocket(address, [], {
      WebSocket,
    });

    const notify: Notify = throttle(data => {
      try {
        socket.send(typeof data === 'string' ? data : JSON.stringify(data));
      } catch (error) {
        // NOOP
      }
    }, 60);

    App.onExit(() => {
      socket.close();
    });

    App.onError(() => {
      socket.close();
    });

    return devTools.reduce((fn, devTool) => devTool(fn, notify), target);
  };
}
