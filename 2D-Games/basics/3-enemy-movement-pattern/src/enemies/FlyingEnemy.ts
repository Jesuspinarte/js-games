import { getGameFrame, SCENE_WIDTH } from '../init';
import { Enemy, EnemyProps } from './Enemy';

export interface FlyingEnemyProps extends EnemyProps {
  angle?: number;
  flapSpeed?: number;
  speed?: number;
}

export class FlyingEnemy extends Enemy {
  angle: number;
  angleSpeed: number;
  speed: number;
  flapSpeed: number;

  /**
   * @class
   * Enemy flying across the screen.
   */
  constructor({ angle, flapSpeed, speed, x, y }: FlyingEnemyProps = {}) {
    super({ x, y, type: 'fast-bat' });

    this.angle = angle || 0;
    this.angleSpeed = Math.random() * 2;
    this.flapSpeed = flapSpeed || Math.floor(Math.random() * 3 + 1);
    this.speed = speed || Math.random() * 4;
  }

  update() {
    this.x -= this.speed;
    this.y += Math.sin(this.angle);
    this.angleSpeed += this.angleSpeed;

    if (this.x + this.width < 0) {
      this.x = SCENE_WIDTH;
    }

    if (getGameFrame() % this.flapSpeed === 0) {
      this.frame = this.frame >= this.spriteData.loc.length - 1 ? 0 : this.frame + 1;
    }
  }
}
