export class BackgroundLayer {
  x: number;
  y: number;
  width: number;
  height: number;
  image: HTMLImageElement;
  speedModifier: number;
  speed: number;

  constructor(gameSpeed: number, height: number, image: HTMLImageElement, speedModifier: number) {
    this.x = 0;
    this.y = 0;
    this.width = image.naturalWidth;
    this.height = height;
    this.image = image;
    this.speedModifier = speedModifier;
    this.speed = gameSpeed * speedModifier;
  }

  update(gameSpeed: number) {
    this.speed = gameSpeed * this.speedModifier;

    if (this.x <= -this.width) {
      this.x = 0;
    }

    this.x = this.x - this.speed;
  }

  render(context: CanvasRenderingContext2D) {
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
    context.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
  }
}
