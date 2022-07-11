import { AnimatedSprite, Application, Loader, Texture } from 'pixi.js';

type PlayerConfig = {
  element: HTMLCanvasElement;
  width: number;
  height: number;
};

type ProgressState = {
  frames?: string[];
  animatedSprite?: AnimatedSprite;
  type: 'fade' | 'frame';
  progressStart: number;
  progressEnd: number;
}[];

function cleanDuplicateStringArray(array: string[]): string[] {
  return Array.from(new Set(array));
}

class Player {
  FADE_FRAMES_COUNT = 10;

  application: Application;

  width: number;

  height: number;

  frameGroups: string[][] = [];

  animatedSprites: AnimatedSprite[] = [];

  progressState: ProgressState = [];

  totalProgress = 0;

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
    return this.totalProgress;
  }

  getProgressState(progress: number) {
    const { progressState } = this;

    for (const state of progressState) {
      if (progress >= state.progressStart && progress <= state.progressEnd) {
        return state;
      }
    }

    return null;
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

    const progressState: ProgressState = [];

    this.totalProgress = 0;

    frameGroups.forEach((frameGroup, index) => {
      // load
      const animatedSprite = this.loadFrames(
        frameGroup,
        frameGroups.length - index,
      );

      // frame state
      progressState.push({
        animatedSprite,
        frames: frameGroup,
        type: 'frame',
        progressStart: this.totalProgress,
        progressEnd: (this.totalProgress += frameGroup.length),
      });

      // fade state
      if (index !== frameGroups.length - 1) {
        progressState.push({
          type: 'fade',
          progressStart: this.totalProgress,
          progressEnd: (this.totalProgress += this.FADE_FRAMES_COUNT),
        });
      }
    });

    this.progressState = progressState;
  }

  setProgress(progress: number) {
    const { animatedSprites } = this;
    const maxProgress = this.getTotalProgress();
    const state = this.getProgressState(progress);

    console.log(maxProgress, progress, state);

    if (progress >= maxProgress) {
      return;
    }

    animatedSprites.forEach((animatedSprite) => {
      animatedSprite.alpha = 0;
    });

    if (state?.animatedSprite) {
      state.animatedSprite.alpha = 1;
      state.animatedSprite.gotoAndStop(progress);
    }
  }

  loadFrames(frames: string[], index = 0): AnimatedSprite {
    const firstFrameLoader = new Loader();
    const mainLoader = new Loader();
    const imagesWithoutDuplicated = cleanDuplicateStringArray(frames);
    const firstFrame = imagesWithoutDuplicated.shift();

    const animatedSprite = new AnimatedSprite([Texture.EMPTY]);
    animatedSprite.animationSpeed = 1;
    animatedSprite.loop = false;
    animatedSprite.zIndex = index * 1000;
    animatedSprite.alpha = 0;

    if (!firstFrame) {
      throw new Error('No frames to load');
    }

    firstFrameLoader.add(firstFrame).load(() => {
      const firstTexture = Texture.from(firstFrame);

      animatedSprite.textures = [firstTexture];
      this.animatedSprites.push(animatedSprite);
      this.resizeAnimatedSpriteState(animatedSprite);
      this.application.stage.addChild(animatedSprite);

      mainLoader.add(imagesWithoutDuplicated).load(() => {
        const textures = imagesWithoutDuplicated.map((image) =>
          Texture.from(image),
        );

        animatedSprite.textures = [firstTexture, ...textures];

        this.resizeAnimatedSpriteState(animatedSprite);
      });
    });

    return animatedSprite;
  }
}

export default Player;
export { Player };
