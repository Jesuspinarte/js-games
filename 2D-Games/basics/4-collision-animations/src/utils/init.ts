export const scene = document.getElementById('scene') as HTMLCanvasElement;
export const context = scene.getContext('2d') as CanvasRenderingContext2D;

export const SCENE_WIDTH = (scene.width = 500);
export const SCENE_HEIGHT = (scene.height = 700);
