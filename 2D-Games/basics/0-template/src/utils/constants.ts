import { GameManager } from '../managers/GameManager';
import { SpriteData, Transform } from '../types/generics';

export const DEFAULT_IMAGE = new Image();
export const DEFAULT_SIZE = 50;
export const DEFAULT_HEIGHT = DEFAULT_SIZE;
export const DEFAULT_WIDTH = DEFAULT_SIZE;
export const DEFAULT_X = GameManager.SceneWidth / 2 - DEFAULT_WIDTH / 2;
export const DEFAULT_Y = GameManager.SceneHeight / 2 - DEFAULT_HEIGHT / 2;

export const DEFAULT_TRANSFORM: Transform = {
  position: {
    x: DEFAULT_X,
    y: DEFAULT_Y,
  },
  size: {
    height: DEFAULT_HEIGHT,
    width: DEFAULT_WIDTH,
  },
};

export const DEFAULT_SPRITE_DATA: SpriteData = {
  height: DEFAULT_HEIGHT,
  loc: [],
  src: '',
  width: DEFAULT_WIDTH,
};
