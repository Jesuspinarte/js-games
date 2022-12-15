import { AnimationState, AnimationTypes } from '../types/types';
import { getSpriteImages, getSpritesLocations } from '../utils/utils';

export const animationStates: AnimationState[] = [
  {
    height: 179,
    frames: 6,
    name: 'explotion',
    src: './boom.png',
    width: 200,
  },
];

export const spriteAnimations = getSpritesLocations<AnimationTypes>(animationStates);
export const animationImages = getSpriteImages<AnimationTypes>(animationStates);
