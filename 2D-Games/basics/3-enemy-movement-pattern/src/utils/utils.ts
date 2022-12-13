import { context } from '../init';
import { AnimationState } from '../sprites';

export interface SpriteLocation {
  x: number;
  y: number;
}

export interface AnimationSpot extends SpriteLocation {
  width: number;
  height: number;
}

export interface SpriteData {
  height: number;
  loc: SpriteLocation[];
  src: string;
  width: number;
}

export type SpriteLocationsByName = Record<string, SpriteData>;

/**
 * Gets the needed information to properly animate a sprite image.
 */
export const getSpritesLocations = (states: AnimationState[]): SpriteLocationsByName => {
  const spriteAnimations: SpriteLocationsByName = {};

  for (let i = 0; i < states.length; ++i) {
    const loc: SpriteLocation[] = [];
    const { frames, height, heightOffset, name, src, width } = states[i];

    const positionY = heightOffset || 0;

    for (let j = 0; j < frames; ++j) {
      const positionX = j * width;
      loc.push({ x: positionX, y: positionY });
    }

    spriteAnimations[name] = { height, loc, src, width };
  }

  return spriteAnimations;
};

/**
 * Gets all the sprite names.
 */
export const getSpriteNames = (states: AnimationState[]): string[] =>
  states.map(enemy => enemy.name);

/**
 * Gets all the iamgesd
 */
export const getSpriteImages = <T>(states: AnimationState[]): Map<T, HTMLImageElement> => {
  const images = new Map<T, HTMLImageElement>();

  for (let state of states) {
    const image = new Image();
    image.src = state.src;
    images.set(state.name as T, image);
  }

  return images;
};

/**
 * Draws the desired sprite image from the given sprite data.
 */
export const animateSprites = (
  image: HTMLImageElement,
  spriteData: SpriteData,
  spriteIndex: number,
  spot: AnimationSpot
) => {
  const { loc, width: spriteWidth, height: spriteHeight } = spriteData;
  const { x, y, width, height } = spot;
  const spriteX = loc[spriteIndex].x;
  const spriteY = loc[spriteIndex].y;

  context.drawImage(image, spriteX, spriteY, spriteWidth, spriteHeight, x, y, width, height);
};
