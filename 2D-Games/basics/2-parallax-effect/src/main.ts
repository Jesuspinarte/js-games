import './style.css';
import { backgroundImages } from './utils';
import { BackgroundLayer } from './BackgroundLayer';

// Get all HTML elements
const scene = document.getElementById('scene') as HTMLCanvasElement;
const gameSpeedText = document.getElementById('game-speed') as HTMLSpanElement;
const gameSpeedInput = document.getElementById('slider') as HTMLInputElement;

// Get base variables
const context = scene.getContext('2d') as CanvasRenderingContext2D;
const SCENE_WIDTH = (scene.width = 800);
const SCENE_HEIGHT = (scene.height = 700);

// Parallax speed value
let gameSpeed = 0;
let gameFrames = 0;

// Background images
const backgroundLayers = backgroundImages.map(
  (image, index) => new BackgroundLayer(gameSpeed, SCENE_HEIGHT, image, 0.2 * (index + 1))
);

window.addEventListener('load', () => {
  gameSpeed = Number.parseInt(gameSpeedInput.value);
  gameSpeedText.innerText = gameSpeedInput.value;
});

gameSpeedInput.addEventListener('change', (e: Event) => {
  gameSpeed = Number.parseInt((e.target as HTMLInputElement).value);
  gameSpeedText.innerText = (e.target as HTMLInputElement).value;
});

const animate = () => {
  context.clearRect(0, 0, SCENE_WIDTH, SCENE_HEIGHT);

  for (let layer of backgroundLayers) {
    layer.update(gameSpeed);
    layer.render(context);
  }

  ++gameFrames;
  requestAnimationFrame(animate);
};

animate();
