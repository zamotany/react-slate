/* @flow */
/* eslint-disable jsx-a11y/accessible-emoji */

import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Text, KeyPress, Endl } from 'react-stream-renderer';

const monsters = [
  { type: '😈' },
  { type: '👹' },
  { type: '🤡' },
  { type: '👻' },
  { type: '💀' },
  { type: '👽' },
  { type: '🤖' },
  { type: '🎃' },
];

type Position = {|
  x: number,
  y: number,
|};

type State = {|
  lives: number,
  player: { position: Position },
  bullet: { position: Position },
  monster: { position: Position },
|};

const SCREEN_HEIGHT = 20;
const SCREEN_WIDTH = 80;

export default class Invaders extends React.Component<void, State> {
  state = {
    lives: 1,
    player: {
      position: {
        x: SCREEN_WIDTH / 2,
        y: SCREEN_HEIGHT - 1,
      },
    },
    bullet: {
      position: {
        x: SCREEN_WIDTH / 2,
        y: SCREEN_HEIGHT - 2,
      },
    },
    monster: {
      position: {
        x: SCREEN_WIDTH / 2,
        y: 0,
      },
    },
  };

  componentDidMount() {
    this._timer = setInterval(this._handleInterval, 300);
  }

  componentWillUnmount() {
    clearInterval(this._timer);
  }

  _timer: number;
  _bulletId: number = 0;

  _handleKeyPress = (ch: string) =>
    this.setState(state => {
      let { x } = this.state.player.position;

      switch (ch) {
        case 'a':
          x = Math.max(x - 1, 0);
          break;
        case 'd':
          x = Math.min(x + 1, 80);
          break;
        default:
          return state;
      }

      return {
        player: { position: { x, y: state.player.position.y } },
      };
    });

  _handleInterval = () =>
    this.setState(({ lives, player, bullet, monster }) => ({
      lives:
        monster.position.x === player.position.x &&
        monster.position.y === player.position.y
          ? lives - 1
          : lives,
      bullet: {
        position:
          bullet.position.y <= 0 || monster.hit
            ? {
                x: player.position.x,
                y: player.position.y - 1,
              }
            : {
                x: bullet.position.x,
                y: bullet.position.y - 1,
              },
      },
      monster: {
        hit:
          monster.position.x === bullet.position.x &&
          monster.position.y === bullet.position.y - 2,
        position:
          monster.position.y >= SCREEN_HEIGHT || monster.hit
            ? {
                x: Math.floor(Math.random() * SCREEN_WIDTH),
                y: 0,
              }
            : {
                x: monster.position.x,
                y: monster.position.y + 1,
              },
      },
    }));

  render() {
    const { lives, player, bullet, monster } = this.state;

    if (lives === 0) {
      return (
        <Text x={(SCREEN_WIDTH - 10) / 2} y={SCREEN_HEIGHT / 2}>
          GAME OVER
        </Text>
      );
    }

    return (
      <Text>
        <Text x={bullet.position.x} y={bullet.position.y}>
          ⚡️
        </Text>
        <Text x={monster.position.x} y={monster.position.y}>
          {monster.hit ? '🔥' : '🎃'}
        </Text>
        <KeyPress onPress={this._handleKeyPress} stream={process.stdin} />
        <Text x={player.position.x} y={player.position.y}>
          👾
        </Text>
      </Text>
    );
  }
}
