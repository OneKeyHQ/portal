import { nanoid } from 'nanoid';
import { AnimatedSprite, Application, Loader, Texture } from 'pixi.js';

type PlayerConfig = {
  element: HTMLCanvasElement;
  width: number;
  height: number;
  backgroundColor?: string;
};

export type ProgressStateItem = {
  id: string;
  frames?: string[];
  animatedSprite?: AnimatedSprite;
  type: 'fade' | 'frame';
  progressStart: number;
  progressEnd: number;
  length: number;
};

export type ProgressStates = ProgressStateItem[];

function cleanDuplicateStringArray(array: string[]): string[] {
  return Array.from(new Set(array));
}

class Player {
  FADE_FRAMES_COUNT = 20;

  application: Application;

  width: number;

  height: number;

  frameGroups: string[][] = [];

  animatedSprites: AnimatedSprite[] = [];

  progressStates: ProgressStates = [];

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

  getProgressState(progress: number): ProgressStateItem | null {
    const { progressStates } = this;

    for (const state of progressStates) {
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
    const { stage } = this.application;
    const imageSpriteWidth = texture.baseTexture.width;
    const imageSpriteHeight = texture.baseTexture.height;
    const containerWidth = this.width;
    const containerHeight = this.height;

    const imageRatio = imageSpriteWidth / imageSpriteHeight;
    const containerRatio = containerWidth / containerHeight;
    if (containerRatio > imageRatio) {
      stage.height /= stage.width / containerWidth;
      stage.width = containerWidth;
      stage.position.x = 0;
      stage.position.y = (containerHeight - stage.height) / 2;
    } else {
      stage.width /= stage.height / containerHeight;
      stage.height = containerHeight;
      stage.position.y = 0;
      stage.position.x = (containerWidth - stage.width) / 2;
    }
  }

  setFrameGroups(frameGroups: string[][]) {
    this.frameGroups = frameGroups;

    const progressStates: ProgressStates = [];

    this.totalProgress = -1;

    frameGroups.forEach((frameGroup, index) => {
      // load
      const animatedSprite = this.loadFrames(frameGroup, index);

      // frame state
      progressStates.push({
        id: nanoid(),
        animatedSprite,
        frames: frameGroup,
        type: 'frame',
        length: frameGroup.length,
        progressStart: (this.totalProgress += 1),
        progressEnd: (this.totalProgress += frameGroup.length - 1),
      });

      // fade state
      if (index !== frameGroups.length - 1) {
        progressStates.push({
          id: nanoid(),
          type: 'fade',
          length: this.FADE_FRAMES_COUNT,
          progressStart: (this.totalProgress += 1),
          progressEnd: (this.totalProgress += this.FADE_FRAMES_COUNT - 1),
        });
      }
    });

    this.progressStates = progressStates;
  }

  setProgress(progress: number) {
    const { animatedSprites } = this;
    const maxProgress = this.getTotalProgress();
    let newProgress = progress;

    if (progress > maxProgress) {
      newProgress = maxProgress;
    } else if (progress < 0) {
      newProgress = 0;
    }

    const state = this.getProgressState(newProgress);

    animatedSprites.forEach((animatedSprite) => {
      animatedSprite.alpha = 0;
    });

    if (state?.type === 'fade') {
      const previousState = this.getProgressState(state.progressStart - 1);
      const nextState = this.getProgressState(state.progressEnd + 1);

      if (previousState?.animatedSprite) {
        previousState.animatedSprite.alpha =
          1 - (newProgress - state.progressStart) / state.length;

        previousState.animatedSprite.transform.position.y =
          -((newProgress - state.progressStart) / state.length) * this.height;
      }

      if (nextState?.animatedSprite) {
        nextState.animatedSprite.alpha = 1;

        nextState.animatedSprite.transform.position.y =
          (1 - (newProgress - state.progressStart) / state.length) *
          this.height *
          0.5;
      }
    } else if (state?.animatedSprite) {
      state.animatedSprite.alpha = 1;
      state.animatedSprite.gotoAndStop(newProgress - state.progressStart);
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
    animatedSprite.zIndex = (10 - index) * 1000;
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
      this.application.stage.children.sort(
        (itemA, itemB) => itemA.zIndex - itemB.zIndex,
      );

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