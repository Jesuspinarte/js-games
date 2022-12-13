import { getGameFrame } from '../init';
import { Enemy, EnemyProps } from './Enemy';

export interface StaticEnemyProps extends EnemyProps {
  flapSpeed?: number;
}

export class StaticEnemy extends Enemy {
  flapSpeed: number;

  /**
   * @class
   * Enemy flying in the same spot.
   */
  constructor({ flapSpeed, x, y }: StaticEnemyProps = {}) {
    super({ x, y, type: 'bat' });

    this.flapSpeed = flapSpeed || Math.floor(Math.random() * 3 + 1);
  }

  update() {
    this.x += Math.random() * 5 - 2.5;
    this.y += Math.random() * 5 - 2.5;

    if (getGameFrame() % this.flapSpeed === 0) {
      this.frame = this.frame >=  this.spriteData.loc.length - 1 ? 0 : this.frame + 1;
    }
  }
}
