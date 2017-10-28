/* @flow */
/* eslint-disable jsx-a11y/accessible-emoji */

import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Text, KeyPress } from 'react-stream-renderer';

type Position = {|
  x: number,
  y: number,
|};

type State = {|
  lives: number,
  hits: number,
  player: { position: Position },
  bullets: Array<{
    id: number,
    position: Position,
  }>,
  monsters: Array<{
    id: number,
    type: string,
    hit: boolean,
    position: Position,
  }>,
|};

type Character = {
  type: string,
  delta: Position,
  points: number,
  speed: number,
};

const characters: Character[] = [
  { type: '😈', delta: { x: 0, y: 1 }, points: 1, speed: 0.25 },
  { type: '🎃', delta: { x: 0, y: 1 }, points: 1, speed: 0.25 },
  { type: '👹', delta: { x: 0, y: 1 }, points: 1, speed: 0.25 },
  { type: '🤡', delta: { x: 0, y: 1 }, points: 1, speed: 0.25 },
  { type: '💀', delta: { x: 0, y: 1 }, points: 2, speed: 0.5 },
  { type: '👻', delta: { x: 0, y: 1 }, points: 2, speed: 0.5 },
  { type: '👽', delta: { x: 0, y: 1 }, points: 2, speed: 0.5 },
  { type: '🤖', delta: { x: 0, y: 1 }, points: 2, speed: 0.5 },
];

/* $FlowFixMe */
const SCREEN_HEIGHT = process.stdout.rows;
/* $FlowFixMe */
const SCREEN_WIDTH = process.stdout.columns;

export default class Invaders extends React.Component<void, State> {
  state = {
    lives: 1,
    hits: 0,
    player: {
      position: {
        x: SCREEN_WIDTH / 2,
        y: SCREEN_HEIGHT - 1,
      },
    },
    bullets: [],
    monsters: [],
  };

  componentDidMount() {
    this._timer = setTimeout(this._handleTimer, 300);
  }

  componentWillUnmount() {
    clearTimeout(this._timer);
  }

  _timer: number;
  _id: number = 0;

  _handleKeyPress = (ch: string) =>
    this.setState(state => {
      let { x } = this.state.player.position;

      switch (ch) {
        case 'a':
          x = Math.max(x - 1, 0);
          break;
        case 'd':
          x = Math.min(x + 1, SCREEN_WIDTH);
          break;
        default:
          return state;
      }

      return {
        player: { position: { x, y: state.player.position.y } },
      };
    });

  _handleTimer = (count: number = 0) => {
    if (this.state.lives === 0) {
      return;
    }

    this._loop(count);
    this._timer = setTimeout(() => this._handleTimer(count + 1), 300);
  };

  _loop = (count: number) =>
    this.setState(state => {
      const { player } = state;
      const lives = state.monsters.some(
        monster =>
          monster.position.x === player.position.x &&
          monster.position.y === player.position.y
      )
        ? state.lives - 1
        : state.lives;

      const bullets = state.bullets
        .filter(
          bullet =>
            bullet.position.y > 0 &&
            !state.monsters.some(
              monster =>
                monster.position.x === bullet.position.x &&
                Math.abs(monster.position.y - bullet.position.y) <= 1
            )
        )
        .map(bullet => ({
          id: bullet.id,
          position: {
            x: bullet.position.x,
            y: bullet.position.y - 1,
          },
        }));

      if (
        bullets.length === 0 ||
        bullets[bullets.length - 1].position.y < SCREEN_HEIGHT / 5 * 4
      ) {
        bullets.push({
          id: this._id++,
          position: {
            x: player.position.x,
            y: player.position.y - 2,
          },
        });
      }

      const monsters = state.monsters
        .filter(
          monster => monster.position.y < SCREEN_HEIGHT - 1 && !monster.hit
        )
        .map(monster => {
          /* $FlowFixMe */
          const character: Character = characters.find(
            c => c.type === monster.type
          );
          return {
            id: monster.id,
            type: monster.type,
            hit: state.bullets.some(
              bullet =>
                monster.position.x === bullet.position.x &&
                Math.abs(monster.position.y - bullet.position.y) <= 1
            ),
            position: {
              x: monster.position.x + character.speed * character.delta.x,
              y: monster.position.y + character.speed * character.delta.y,
            },
          };
        });

      if (count % 8 === 0) {
        Array.from({
          length: Math.floor(Math.random() * (5 - 1 + 1)) + 1,
        }).forEach(() => {
          const character =
            characters[Math.floor(Math.random() * characters.length)];

          monsters.push({
            id: this._id++,
            type: character.type,
            hit: false,
            position: {
              x: Math.floor(Math.random() * SCREEN_WIDTH),
              y: 0,
            },
          });
        });
      }

      const hits = monsters.reduce((sum, monster) => {
        if (monster.hit) {
          /* $FlowFixMe */
          const character: Character = characters.find(
            c => c.type === monster.type
          );

          return sum + character.points;
        }

        return sum;
      }, state.hits);

      return { lives, bullets, monsters, hits };
    });

  render() {
    const { lives, player, bullets, monsters } = this.state;

    if (lives === 0) {
      return (
        <Text x={(SCREEN_WIDTH - 20) / 2} y={SCREEN_HEIGHT / 2}>
          GAME OVER. SCORE: {this.state.hits}
        </Text>
      );
    }

    return (
      <Text>
        {bullets.map(bullet => (
          <Text key={bullet.id} x={bullet.position.x} y={bullet.position.y}>
            ⚡️
          </Text>
        ))}
        {monsters.map(monster => (
          <Text
            key={monster.id}
            x={Math.floor(monster.position.x)}
            y={Math.floor(monster.position.y)}
          >
            {monster.hit ? '🔥' : monster.type}
          </Text>
        ))}
        <KeyPress onPress={this._handleKeyPress} stream={process.stdin} />
        <Text x={player.position.x} y={player.position.y}>
          👾
        </Text>
      </Text>
    );
  }
}
