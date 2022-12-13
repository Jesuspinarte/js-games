import { enemiesSpriteAnimations, EnemyType, SCENE_HEIGHT, SCENE_WIDTH } from '../init';
import { enemyImages } from '../sprites';
import { animateSprites, SpriteData } from '../utils/utils';

export interface EnemyProps {
  type?: EnemyType;
  x?: number;
  y?: number;
}

export class Enemy {
  x: number;
  y: number;
  width: number;
  height: number;
  type: EnemyType;
  spriteData: SpriteData;
  image: HTMLImageElement;
  frame = 0;

  /**
   * @class
   * Enemy base class, by default a StaticEnemy. Defines Enemy sprites and frames.
   */
  constructor({ type, x, y }: EnemyProps = {}) {
    this.type = type || 'bat';
    this.spriteData = enemiesSpriteAnimations[this.type];
    this.image = enemyImages.get(this.type) as HTMLImageElement;

    this.width = this.spriteData.width / 4;
    this.height = this.spriteData.height / 4;

    this.x = x || Math.random() * (SCENE_WIDTH - this.width);
    this.y = y || Math.random() * (SCENE_HEIGHT - this.height);
  }

  /**
   * Adds one frame and resets the frame to zero when the frame is higher thatn the number of sprites.
   */
  update() {
    this.frame = this.frame >= this.spriteData.loc.length - 1 ? 0 : this.frame + 1;
  }

  /**
   * Draws the enemy chracter.
   */
  render() {
    animateSprites(this.image, this.spriteData, this.frame, {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
    });
  }
}
