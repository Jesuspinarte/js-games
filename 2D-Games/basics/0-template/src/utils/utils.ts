import { GameManager } from '../managers/GameManager';
import { AnimationState, SpriteData, Transform, Vector2 } from '../types/generics';

/**
 * Gets the needed information to properly animate a sprite image.
 */
export const getSpritesLocations = <T>(states: AnimationState[]): Map<T, SpriteData> => {
  const spriteAnimations = new Map<T, SpriteData>();

  for (let i = 0; i < states.length; ++i) {
    const loc: Vector2[] = [];
    const { frames, height, verticalPosition, name, src, width } = states[i];

    const positionY = verticalPosition ? verticalPosition * height : 0;

    for (let j = 0; j < frames; ++j) {
      const positionX = j * width;
      loc.push({ x: positionX, y: positionY });
    }

    spriteAnimations.set(name as T, { height, loc, src, width });
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
 * Draws a basic shape con canvas
 */
export const DrawRect = (transform: Transform) => {
  GameManager.Context.strokeRect(
    transform.position.x,
    transform.position.y,
    transform.size.width,
    transform.size.height
  );
};

/**
 * Draws the desired sprite image from the given sprite data.
 */
export const animateSprites = (
  image: HTMLImageElement,
  spriteData: SpriteData,
  spriteIndex: number,
  spot: Transform
) => {
  const { loc, width: spriteWidth, height: spriteHeight } = spriteData;
  const {
    position: { x, y },
    size: { width, height },
  } = spot;
  const spriteX = loc[spriteIndex].x;
  const spriteY = loc[spriteIndex].y;

  GameManager.Context.drawImage(
    image,
    spriteX,
    spriteY,
    spriteWidth,
    spriteHeight,
    x,
    y,
    width,
    height
  );
};
