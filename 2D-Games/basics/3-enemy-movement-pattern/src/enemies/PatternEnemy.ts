import { getGameFrame, SCENE_HEIGHT, SCENE_WIDTH } from '../init';
import { Enemy, EnemyProps } from './Enemy';

export interface PatterEnemyProps extends EnemyProps {
  angle?: number;
  flapSpeed?: number;
}

export class PatternEnemy extends Enemy {
  angle: number;
  angleSpeed: number;
  curve: number;
  flapSpeed: number;

  constructor({ angle, flapSpeed, x, y }: PatterEnemyProps = {}) {
    super({ x, y, type: 'ghost' });

    this.angle = angle || 0;
    this.angleSpeed = Math.random() * 2 + 0.75;
    this.curve = Math.random() * 20 + 100;
    this.flapSpeed = flapSpeed || Math.floor(Math.random() * 3 + 1);
  }

  update() {
    this.x =
      this.curve * Math.sin((this.angle * Math.PI) / 180) + (SCENE_WIDTH / 2 - this.width / 2);
    this.y =
      this.curve * Math.cos((this.angle * Math.PI) / 270) + (SCENE_HEIGHT / 2 - this.height / 2);
    this.angle += this.angleSpeed;

    if (getGameFrame() % this.flapSpeed === 0) {
      this.frame = this.frame >= this.spriteData.loc.length - 1 ? 0 : this.frame + 1;
    }
  }
}
