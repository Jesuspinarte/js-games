import { dogAnimationStates } from './sprites';
import './style.css';
import { getSpritesLocations } from './utils';

// Get HTML Elements
const animationSelect = document.getElementById('animations') as HTMLSelectElement;
const scene = document.getElementById('scene') as HTMLCanvasElement;

// Get 2D context and scene size
const context = scene.getContext('2d');
const SCENE_WIDTH = (scene.width = 600);
const SCENE_HEIGHT = (scene.height = 600);

// Sprites to animate
const playerImage = new Image();
playerImage.src = './shadow_dog.png';

// Sprite size
const spriteWidth = 575;
const spriteHeight = 523;

// Animation base variables
let gameFrames = 0;
const staggerFrames = 5;

const spriteAnimations = getSpritesLocations(dogAnimationStates, spriteWidth, spriteHeight);

// Animation to show
let playerState = '';

// Gets the initial animation
window.addEventListener('load', () => {
  playerState = animationSelect.value;
});

// Changes the animaton
animationSelect?.addEventListener(
  'change',
  (e: Event) => (playerState = (e.target as HTMLInputElement).value)
);

const animate = () => {
  // Clears the scene
  context?.clearRect(0, 0, SCENE_WIDTH, SCENE_HEIGHT);

  if (playerState && spriteAnimations[playerState]) {
    // Calculate the sprite speed to render
    const position =
      Math.floor(gameFrames / staggerFrames) % spriteAnimations[playerState].loc.length;

    // Get the sprites positions to render
    const frameX = spriteAnimations[playerState].loc[position].x;
    const frameY = spriteAnimations[playerState].loc[position].y;

    context?.drawImage(
      playerImage,
      frameX,
      frameY,
      spriteWidth,
      spriteHeight,
      0,
      0,
      spriteWidth,
      spriteHeight
    );
  }

  ++gameFrames;
  requestAnimationFrame(animate);
};

animate();
