import { animationImages, spriteAnimations } from '../../assets/sprites';
import { DEFAULT_X, DEFAULT_Y } from '../../fixtures/gameObjectFixtures';
import { SpriteData } from '../../types/types';
import { animateSprites } from '../../utils/utils';
import { GameObject, GameObjectProps } from '../GameObject.';

const SIZE_MODIFIER = 0.5;

export interface ExplotionProps extends GameObjectProps {}

export class Explotion extends GameObject {
  timer: number = 0;
  sound: HTMLAudioElement;

  constructor({ x = DEFAULT_X, y = DEFAULT_Y }: ExplotionProps = { x: DEFAULT_X, y: DEFAULT_Y }) {
    const { height, width } = spriteAnimations.get('explotion') as SpriteData;

    const spriteHeight = height * SIZE_MODIFIER;
    const spriteWidth = width * SIZE_MODIFIER;

    super({
      height: spriteHeight,
      width: spriteWidth,
      x: x - spriteWidth / 2,
      y: y - spriteHeight / 2,
      image: animationImages.get('explotion'),
      spriteData: { ...(spriteAnimations.get('explotion') as SpriteData) },
    });

    this.sound = new Audio();
    this.sound.src = './boom.wav';
  }

  update() {
    ++this.timer;

    if (this.frame === 0) {
      this.sound.play();
    }

    if (this.timer % 5 === 0) {
      ++this.frame;
    }
  }

  render() {
    if (this.frame < this.spriteData.loc.length - 1) {
      animateSprites(this.image, this.spriteData, this.frame, {
        x: this.x,
        y: this.y,
        width: this.width,
        height: this.height,
      });
    }
  }
}
