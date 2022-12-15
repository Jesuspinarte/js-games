import { SCENE_HEIGHT, SCENE_WIDTH } from '../utils/init';

export const DEFAULT_IMAGE = new Image();
export const DEFAULT_SIZE = 50;
export const DEFAULT_HEIGHT = DEFAULT_SIZE;
export const DEFAULT_WIDTH = DEFAULT_SIZE;
export const DEFAULT_X = SCENE_WIDTH / 2 - DEFAULT_WIDTH / 2;
export const DEFAULT_Y = SCENE_HEIGHT / 2 - DEFAULT_HEIGHT / 2;

export const DEFAULT_SPRITE_DATA = {
  height: DEFAULT_HEIGHT,
  loc: [],
  src: '',
  width: DEFAULT_WIDTH,
};
