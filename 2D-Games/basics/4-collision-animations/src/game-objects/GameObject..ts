import { SpriteData } from '../types/types';
import { context } from '../utils/init';
import { animateSprites } from '../utils/utils';
import {
  DEFAULT_HEIGHT,
  DEFAULT_IMAGE,
  DEFAULT_SPRITE_DATA,
  DEFAULT_WIDTH,
  DEFAULT_X,
  DEFAULT_Y,
} from '../fixtures/gameObjectFixtures';

export interface GameObjectProps {
  height?: number;
  image?: HTMLImageElement;
  spriteData?: SpriteData;
  width?: number;
  x?: number;
  y?: number;
}

export class GameObject {
  context = context;
  frame = 0;
  height: number;
  image: HTMLImageElement;
  spriteData: SpriteData;
  width: number;
  x: number;
  y: number;

  constructor(
    {
      height = DEFAULT_HEIGHT,
      image = DEFAULT_IMAGE,
      spriteData = DEFAULT_SPRITE_DATA,
      width = DEFAULT_WIDTH,
      x = DEFAULT_X,
      y = DEFAULT_Y,
    }: GameObjectProps = {
      height: DEFAULT_WIDTH,
      image: DEFAULT_IMAGE,
      spriteData: DEFAULT_SPRITE_DATA,
      width: DEFAULT_HEIGHT,
      x: DEFAULT_X,
      y: DEFAULT_Y,
    }
  ) {
    this.height = height;
    this.image = image;
    this.spriteData = spriteData;
    this.width = width;
    this.x = x;
    this.y = y;
  }

  update() {
    if (this.image === DEFAULT_IMAGE || this.spriteData === DEFAULT_SPRITE_DATA) {
      ++this.frame;
    } else {
      this.frame = this.frame >= this.spriteData.loc.length - 1 ? 0 : this.frame + 1;
    }
  }

  render() {
    if (this.image === DEFAULT_IMAGE || this.spriteData === DEFAULT_SPRITE_DATA) {
      context.strokeRect(this.x, this.y, this.width, this.height);
    } else {
      animateSprites(this.image, this.spriteData, this.frame, {
        x: this.x,
        y: this.y,
        width: this.width,
        height: this.height,
      });
    }
  }
}
