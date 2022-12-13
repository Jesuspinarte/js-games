import './style.css';
import { addGameFrame, context, SCENE_HEIGHT, SCENE_WIDTH } from './init';
import { Enemy } from './enemies/Enemy';
import { StaticEnemy } from './enemies/StaticEnemy';
import { FlyingEnemy } from './enemies/FlyingEnemy';
import { PatternEnemy } from './enemies/PatternEnemy';
import { TeleportingEnemy } from './enemies/TeleportingEnemy';

window.addEventListener('load', () => {
  const numberOfEnemies = 1;
  const enemies: Enemy[] = [];

  for (let i = 0; i < numberOfEnemies; ++i) {
    enemies.push(new StaticEnemy());
    enemies.push(new FlyingEnemy());
    enemies.push(new PatternEnemy());
    enemies.push(new TeleportingEnemy());

    // TODO: Create enemy to avoid or follow the mouse
  }

  const animate = () => {
    context.clearRect(0, 0, SCENE_WIDTH, SCENE_HEIGHT);

    for (let enemy of enemies) {
      enemy.update();
      enemy.render();
    }

    addGameFrame();
    requestAnimationFrame(animate);
  };

  animate();
});
