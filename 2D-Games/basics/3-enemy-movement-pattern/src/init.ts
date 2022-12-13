import { enemyAnimationStates } from './sprites';
import { getSpriteNames, getSpritesLocations } from './utils/utils';

let gameFrame = 0;

export const addGameFrame = () => {
  gameFrame++;
};
export const getGameFrame = () => gameFrame;

export const scene = document.getElementById('scene') as HTMLCanvasElement;
export const context = scene.getContext('2d') as CanvasRenderingContext2D;

export const SCENE_WIDTH = (scene.width = 500);
export const SCENE_HEIGHT = (scene.height = 800);

export const enemiesSpriteAnimations = getSpritesLocations(enemyAnimationStates);
export const enemyNames = getSpriteNames(enemyAnimationStates);

export type EnemyType = typeof enemyNames[number];
