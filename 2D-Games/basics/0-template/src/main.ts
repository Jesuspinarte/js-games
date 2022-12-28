import { GameObject } from './game-objects/GameObject';
import { GameManager } from './managers/GameManager';
import './style.css';

const objs: GameObject[] = [new GameObject()];

const main = () => {
  const context = GameManager.Context;

  const animate = () => {
    context.clearRect(0, 0, GameManager.SceneWidth, GameManager.SceneHeight);
    context.strokeStyle = 'white';
    for (let obj of objs) {
      obj.update();
      obj.render();
    }
    requestAnimationFrame(animate);
  };

  animate();
};

window.addEventListener('load', () => {
  main();
});
