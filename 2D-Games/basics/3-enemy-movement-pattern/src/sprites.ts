import { EnemyType } from './init';
import { getSpriteImages } from './utils/utils';

export interface AnimationState {
  frames: number;
  height: number;
  name: string;
  src: string;
  width: number;
  heightOffset?: number;
}

export const enemyAnimationStates: AnimationState[] = [
  {
    height: 155,
    frames: 6,
    name: 'bat',
    src: './enemy1.png',
    width: 293,
  },
  {
    height: 188,
    frames: 6,
    name: 'fast-bat',
    src: './enemy2.png',
    width: 266,
  },
  {
    height: 177,
    frames: 6,
    name: 'ghost',
    src: './enemy3.png',
    width: 218,
  },
  {
    height: 212,
    frames: 9,
    name: 'blind',
    src: './enemy4.png',
    width: 213,
  },
];

export const enemyImages = getSpriteImages<EnemyType>(enemyAnimationStates);
