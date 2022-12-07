export const loadImage = (src: string): HTMLImageElement => {
  const image = new Image();
  image.src = src;

  return image;
};

export const backgroundImages = [
  loadImage('layer-1.png'),
  loadImage('layer-2.png'),
  loadImage('layer-3.png'),
  loadImage('layer-4.png'),
  loadImage('layer-5.png'),
];
