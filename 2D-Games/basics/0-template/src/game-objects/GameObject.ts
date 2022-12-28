import { SpriteData, Transform } from '../types/generics';
import { DEFAULT_IMAGE, DEFAULT_SPRITE_DATA, DEFAULT_TRANSFORM } from '../utils/constants';
import { animateSprites, DrawRect } from '../utils/utils';

export interface GameObjectProps {
  transform?: Transform;
  spriteData?: SpriteData;
  sprite?: HTMLImageElement;
}

export class GameObject {
  frame = 0;
  transform: Transform;
  spriteData: SpriteData;
  sprite: HTMLImageElement;

  constructor(
    {
      transform = DEFAULT_TRANSFORM,
      spriteData = DEFAULT_SPRITE_DATA,
      sprite = DEFAULT_IMAGE,
    }: GameObjectProps = {
        transform: DEFAULT_TRANSFORM,
        spriteData: DEFAULT_SPRITE_DATA,
        sprite: DEFAULT_IMAGE,
      }
  ) {
    this.transform = transform;
    this.spriteData = spriteData;
    this.sprite = sprite;
  }

  update() {
    if (this.sprite === DEFAULT_IMAGE || this.spriteData === DEFAULT_SPRITE_DATA) {
      ++this.frame;
    } else {
      this.frame = this.frame >= this.spriteData.loc.length - 1 ? 0 : this.frame + 1;
    }
  }

  render() {
    if (this.sprite === DEFAULT_IMAGE || this.spriteData === DEFAULT_SPRITE_DATA) {
      DrawRect(this.transform);
    } else {
      animateSprites(this.sprite, this.spriteData, this.frame, this.transform);
    }
  }
}
