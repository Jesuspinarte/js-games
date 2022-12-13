import { getGameFrame, SCENE_HEIGHT, SCENE_WIDTH } from '../init';
import { Enemy, EnemyProps } from './Enemy';

export interface TeleportingEnemyProps extends EnemyProps {
  flapSpeed?: number;
}

export class TeleportingEnemy extends Enemy {
  flapSpeed: number;
  newX: number;
  newY: number;
  interval: number;

  constructor({ flapSpeed, x, y }: TeleportingEnemyProps = {}) {
    super({ x, y, type: 'blind' });

    this.newX = Math.random() * (SCENE_WIDTH - this.width);
    this.newY = Math.random() * (SCENE_HEIGHT - this.height);

    this.flapSpeed = flapSpeed || Math.floor(Math.random() * 3 + 1);
    this.interval = Math.floor(Math.random() * 200 + 50);
  }

  update() {
    const gameFrame = getGameFrame();

    if (gameFrame % this.interval === 0) {
      this.newX = Math.random() * (SCENE_WIDTH - this.width);
      this.newY = Math.random() * (SCENE_HEIGHT - this.height);
    }

    const dx = this.x - this.newX;
    const dy = this.y - this.newY;

    this.x -= dx / 35;
    this.y -= dy / 35;

    if (gameFrame % this.flapSpeed === 0) {
      this.frame = this.frame >= this.spriteData.loc.length - 1 ? 0 : this.frame + 1;
    }
  }
}
