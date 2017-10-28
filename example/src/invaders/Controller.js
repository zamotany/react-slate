/* @flow */

import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { KeyPress } from 'react-stream-renderer';

type ControlType = 'left' | 'right' | 'up' | 'down';

type Props = {|
  onControlKey: (type: ControlType) => mixed,
|};

export default class Controller extends React.Component<Props> {
  _handleKeyPress = (ch: string) => {
    const { onControlKey } = this.props;

    // eslint-disable-next-line default-case
    switch (ch) {
      case 'a':
        onControlKey('left');
        break;
      case 'w':
        onControlKey('up');
        break;
      case 'd':
        onControlKey('right');
        break;
      case 's':
        onControlKey('down');
        break;
    }
  };

  render() {
    return <KeyPress onPress={this._handleKeyPress} stream={process.stdin} />;
  }
}
