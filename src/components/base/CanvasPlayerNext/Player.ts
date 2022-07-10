import { AnimatedSprite, Application, Loader, Texture } from 'pixi.js';

type PlayerConfig = {
  element: HTMLCanvasElement;
  width: number;
  height: number;
};

function cleanDuplicateStringArray(array: string[]): string[] {
  return Array.from(new Set(array));
}

class Player {
  FADE_FRAMES_COUNT = 30;

  application: Application;

  width: number;

  height: number;

  frameGroups: string[][] = [];

  animatedSprites: AnimatedSprite[] = [];

  constructor(config: PlayerConfig) {
    const { element, width, height } = config;

    this.width = width;
    this.height = height;

    this.application = new Application({
      view: element,
      width,
      height,
      resolution: window.devicePixelRatio,
      autoDensity: true,
      antialias: true,
      backgroundAlpha: 0,
    });

    // set the background color to white
    this.application.renderer.backgroundColor = 0xffffff;
  }

  resize(width: number, height: number): void {
    this.width = width;
    this.height = height;
    this.application.renderer.resize(width, height);
    this.resizeAllAnimatedSpriteState();
  }

  getTotalProgress(): number {
    const { frameGroups } = this;

    let totalProgress = 0;

    for (const frameGroup of frameGroups) {
      totalProgress += frameGroup.length;
    }

    totalProgress += this.FADE_FRAMES_COUNT * (frameGroups.length - 1);

    return totalProgress;
  }

  resizeAllAnimatedSpriteState() {
    for (const animatedSprite of this.animatedSprites) {
      this.resizeAnimatedSpriteState(animatedSprite);
    }
  }

  resizeAnimatedSpriteState(animatedSpriteState: AnimatedSprite) {
    const { texture } = animatedSpriteState;
    const imageSpriteWidth = texture.baseTexture.width;
    const imageSpriteHeight = texture.baseTexture.height;
    const containerWidth = this.width;
    const containerHeight = this.height;

    const imageRatio = imageSpriteWidth / imageSpriteHeight;
    const containerRatio = containerWidth / containerHeight;
    if (containerRatio > imageRatio) {
      animatedSpriteState.height /= animatedSpriteState.width / containerWidth;
      animatedSpriteState.width = containerWidth;
      animatedSpriteState.position.x = 0;
      animatedSpriteState.position.y =
        (containerHeight - animatedSpriteState.height) / 2;
    } else {
      animatedSpriteState.width /= animatedSpriteState.height / containerHeight;
      animatedSpriteState.height = containerHeight;
      animatedSpriteState.position.y = 0;
      animatedSpriteState.position.x =
        (containerWidth - animatedSpriteState.width) / 2;
    }
  }

  setFrameGroups(frameGroups: string[][]) {
    this.frameGroups = frameGroups;

    for (const frameGroup of frameGroups) {
      this.loadFrames(frameGroup);
    }
  }

  setProgress(progress: number) {
    console.log(progress);
  }

  loadFrames(frames: string[]) {
    const firstFrameLoader = new Loader();
    const mainLoader = new Loader();
    const imagesWithoutDuplicated = cleanDuplicateStringArray(frames);
    const firstFrame = imagesWithoutDuplicated[20];

    if (!firstFrame) {
      throw new Error('No frames to load');
    }

    firstFrameLoader.add(firstFrame).load(() => {
      const firstTexture = Texture.from(firstFrame);

      const animatedSprite = new AnimatedSprite([firstTexture]);
      animatedSprite.animationSpeed = 1;
      animatedSprite.loop = false;

      this.animatedSprites.push(animatedSprite);
      this.application.stage.addChild(animatedSprite);

      this.resizeAnimatedSpriteState(animatedSprite);

      mainLoader.add(imagesWithoutDuplicated);

      mainLoader.load(() => {
        const textures = imagesWithoutDuplicated.map((image) =>
          Texture.from(image),
        );

        animatedSprite.textures = [firstTexture, ...textures];

        this.resizeAnimatedSpriteState(animatedSprite);
        animatedSprite.play();
      });
    });
  }
}

export default Player;
export { Player };
