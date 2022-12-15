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

export interface AnimationState {
  frames: number;
  height: number;
  name: string;
  src: string;
  width: number;
  heightOffset?: number;
}

export type AnimationTypes = 'explotion';
