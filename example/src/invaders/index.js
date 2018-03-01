/* @flow */
/* eslint-disable jsx-a11y/accessible-emoji */

import * as React from 'react';
import Text from './Text';
import Controller from './Controller';

type Position = {|
  +x: number,
  +y: number,
|};

type Layout = {|
  +height: number,
  +width: number,
|};

type Player = {|
  +lives: number,
  +position: Position,
|};

type Bullet = {|
  +id: number,
  +position: Position,
|};

type Monster = {|
  +id: number,
  +type: string,
  +lives: number,
  +position: Position,
|};

type Character = {|
  +type: string,
  +delta: Position,
  +points: number,
  +damage: number,
  +lives: number,
|};

type Props = {};

type State = {|
  score: number,
  player: Player,
  bullets: Bullet[],
  monsters: Monster[],
  layout: Layout,
  speed: number,
|};

const characters: Character[] = [
  { type: '😈', points: 1, delta: { x: 0, y: 0.25 }, damage: 0.1, lives: 1 },
  { type: '🎃', points: 1, delta: { x: 0, y: 0.25 }, damage: 0.1, lives: 1 },
  { type: '👹', points: 2, delta: { x: 0, y: 0.25 }, damage: 0.2, lives: 1 },
  { type: '🤡', points: 2, delta: { x: 0, y: 0.25 }, damage: 0.2, lives: 1 },
  { type: '💀', points: 1, delta: { x: 0, y: 0.5 }, damage: 0.2, lives: 1 },
  { type: '👻', points: 2, delta: { x: 0, y: 0.5 }, damage: 0.2, lives: 1 },
  { type: '👽', points: 3, delta: { x: 0, y: 0.5 }, damage: 0.3, lives: 1 },
  { type: '🤖', points: 5, delta: { x: 0, y: 0.5 }, damage: 0.3, lives: 1 },
  { type: '❤️', points: 0, delta: { x: 0, y: 0.25 }, damage: -1, lives: -1 },
];

/* $FlowFixMe */
const SCREEN_HEIGHT = process.stdout.rows;
/* $FlowFixMe */
const SCREEN_WIDTH = process.stdout.columns / 4;

export default class Invaders extends React.Component<Props, State> {
  state = {
    score: 0,
    player: {
      lives: 3,
      position: {
        x: SCREEN_WIDTH / 2,
        y: SCREEN_HEIGHT - 1,
      },
    },
    bullets: [],
    monsters: [],
    layout: {
      height: SCREEN_HEIGHT,
      width: SCREEN_WIDTH,
    },
    speed: 300,
  };

  componentDidMount() {
    this._timer = setTimeout(this._handleTimer, this.state.speed);
  }

  componentWillUnmount() {
    clearTimeout(this._timer);
  }

  _timer: number;
  _id: number = 0;

  _handleControlKey = (type: string) =>
    this.setState(state => {
      let { x } = state.player.position;

      switch (type) {
        case 'left':
          x = Math.max(x - 1, 0);
          break;
        case 'right':
          x = Math.min(x + 1, state.layout.width);
          break;
        default:
          return state;
      }

      return {
        player: {
          lives: state.player.lives,
          position: { x, y: state.player.position.y },
        },
      };
    });

  _handleTimer = (count: number = 0) => {
    if (this.state.lives === 0) {
      return;
    }

    this._loop(count);
    this._timer = setTimeout(
      () => this._handleTimer(count + 1),
      this.state.speed
    );
  };

  _loop = (count: number) =>
    this.setState(state => {
      const { player } = state;

      const lives = Math.min(
        7,
        Math.max(
          0,
          state.player.lives -
            state.monsters.reduce((damage, monster) => {
              /* $FlowFixMe */
              const character: Character = characters.find(
                c => c.type === monster.type
              );

              if (this._isPlayerHit(player, monster)) {
                return damage + character.damage > 0 ? 1 : -1;
              } else if (
                Math.abs(monster.position.y - state.layout.height) <= 1
              ) {
                return damage + Math.max(0, character.damage);
              }

              return damage;
            }, 0)
        )
      );

      const bullets = state.bullets
        .filter(
          bullet =>
            !state.monsters.some(monster => this._isMonsterHit(monster, bullet))
        )
        .map(bullet => ({
          id: bullet.id,
          position: {
            x: bullet.position.x,
            y: bullet.position.y - 1,
          },
        }))
        .filter(bullet => this._isInsideField(bullet, state.layout));

      if (count % 2 === 0) {
        bullets.push({
          id: this._id++,
          position: {
            x: player.position.x,
            y: player.position.y - 2,
          },
        });
      }

      const monsters = state.monsters
        .filter(monster => monster.lives && !this._isPlayerHit(player, monster))
        .map(monster => {
          /* $FlowFixMe */
          const character: Character = characters.find(
            c => c.type === monster.type
          );
          return {
            id: monster.id,
            type: monster.type,
            lives: state.bullets.some(bullet =>
              this._isMonsterHit(monster, bullet)
            )
              ? monster.lives - 1
              : monster.lives,
            position: {
              x: monster.position.x + character.delta.x,
              y: monster.position.y + character.delta.y,
            },
          };
        })
        .filter(monster => this._isInsideField(monster, state.layout));

      if (count % 8 === 0) {
        Array.from({
          length: Math.floor(Math.random() * (state.layout.width / 10)) + 1,
        }).forEach(() => {
          const character =
            characters[Math.floor(Math.random() * characters.length)];

          monsters.push({
            id: this._id++,
            type: character.type,
            lives: character.lives,
            position: {
              x: Math.floor(Math.random() * state.layout.width),
              y: 0,
            },
          });
        });
      }

      const score = monsters.reduce((sum, monster) => {
        if (monster.lives) {
          return sum;
        }
        /* $FlowFixMe */
        const character: Character = characters.find(
          c => c.type === monster.type
        );

        return sum + character.points;
      }, state.score);

      return {
        bullets,
        monsters,
        score,
        player: { lives, position: player.position },
      };
    });

  _isMonsterHit = (monster: Monster, bullet: Bullet) =>
    Math.ceil(monster.position.x) === bullet.position.x &&
    Math.abs(monster.position.y - bullet.position.y) <= 1;

  _isPlayerHit = (player: Player, monster: Monster) =>
    Math.ceil(monster.position.x) === player.position.x &&
    Math.ceil(monster.position.y) === player.position.y;

  _isInsideField = ({ position }: Monster | Bullet, layout: Layout) =>
    position.y >= 0 &&
    position.x >= 0 &&
    position.y < layout.height &&
    position.x < layout.width;

  render() {
    const { player, bullets, monsters } = this.state;

    if (player.lives <= 0) {
      return (
        <Text
          x={(this.state.layout.width - 10) / 2}
          y={this.state.layout.height / 2}
        >
          GAME OVER. SCORE: {this.state.score}
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
            {monster.lives ? monster.type : '🔥'}
          </Text>
        ))}
        <Controller onControlKey={this._handleControlKey} />
        <Text x={player.position.x} y={player.position.y}>
          👾
        </Text>
        <Text x={0} y={0}>
          SCORE: {this.state.score}
        </Text>
        <Text
          x={this.state.layout.width - Math.ceil(this.state.player.lives)}
          y={0}
        >
          {Array.from({ length: Math.ceil(this.state.player.lives) })
            .map(() => '❤')
            .join('')}
        </Text>
      </Text>
    );
  }
}
