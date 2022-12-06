import { AnimationState } from './sprites';

export interface SpriteData {
  loc: SpriteLocation[];
}

export interface SpriteLocation {
  x: number;
  y: number;
}

export const getSpritesLocations = (
  states: AnimationState[],
  spriteWidth: number,
  spriteHeight: number
): Record<string, SpriteData> => {
  const spriteAnimations: Record<string, SpriteData> = {};

  for (let i = 0; i < states.length; ++i) {
    const loc: SpriteLocation[] = [];
    const { name, frames } = states[i];

    const positionY = i * spriteHeight;

    for (let j = 0; j < frames; ++j) {
      const positionX = j * spriteWidth;
      loc.push({ x: positionX, y: positionY });
    }

    spriteAnimations[name] = { loc };
  }

  return spriteAnimations;
};
