export interface Vector2 {
  x: number;
  y: number;
}

export interface Size {
  height: number;
  width: number;
}

export interface SpriteData extends Size {
  loc: Vector2[];
  src: string;
}

export interface AnimationState extends Size {
  frames: number;
  name: string;
  src: string;
  verticalPosition?: number;
}

export interface Transform {
  position: Vector2;
  size: Size;
}
