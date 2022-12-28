import { Explotion } from '../game-objects/explotions/Explotion';
import { GameObject } from '../game-objects/GameObject';
import { context, scene, SCENE_HEIGHT, SCENE_WIDTH } from '../utils/init';

export const game = () => {
  const explotions: GameObject[] = [];

  scene.addEventListener('click', (e: MouseEvent) => {
    explotions.push(
      new Explotion({
        x: e.offsetX,
        y: e.offsetY,
      })
    );
  });

  const animate = () => {
    context.clearRect(0, 0, SCENE_WIDTH, SCENE_HEIGHT);

    context.fillStyle = 'white';
    context.strokeStyle = 'white';

    for (let i = 0; i < explotions.length; ++i) {
      explotions[i].update();
      explotions[i].render();

      if (explotions[i].frame > 5) {
        explotions.splice(i, 1);
        --i;
      }
    }

    requestAnimationFrame(animate);
  };

  animate();
};
