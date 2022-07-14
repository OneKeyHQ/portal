import { nanoid } from 'nanoid';
import {
  AnimatedSprite,
  Application,
  Container,
  Loader,
  Texture,
} from 'pixi.js';

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

  imageContainers: Container[] = [];

  progressStates: ProgressStates = [];

  currentProgress = 0;

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
    this.resizeAllAnimatedSpriteState();
    this.application.renderer.resize(width, height);
    this.refresh();
  }

  refresh() {
    this.setProgress(this.currentProgress);
    this.application.render();
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

  resizeAnimatedSpriteState(animatedSprite: AnimatedSprite) {
    const { texture } = animatedSprite;
    const imageSpriteWidth = texture.width;
    const imageSpriteHeight = texture.height;
    const containerWidth = this.width;
    const containerHeight = this.height;

    const imageRatio = imageSpriteWidth / imageSpriteHeight;
    const containerRatio = containerWidth / containerHeight;
    if (containerRatio > imageRatio) {
      animatedSprite.height /= animatedSprite.width / containerWidth;
      animatedSprite.width = containerWidth;
      animatedSprite.position.x = 0;
      animatedSprite.position.y = (containerHeight - animatedSprite.height) / 2;
    } else {
      animatedSprite.width /= animatedSprite.height / containerHeight;
      animatedSprite.height = containerHeight;
      animatedSprite.position.y = 0;
      animatedSprite.position.x = (containerWidth - animatedSprite.width) / 2;
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
    const { imageContainers } = this;
    const maxProgress = this.getTotalProgress();
    let newProgress = progress;
    if (progress > maxProgress) {
      newProgress = maxProgress;
    } else if (progress < 0) {
      newProgress = 0;
    }

    this.currentProgress = newProgress;

    const state = this.getProgressState(newProgress);

    imageContainers.forEach((imageContainer) => {
      imageContainer.alpha = 0;
    });

    if (state?.type === 'fade') {
      const previousState = this.getProgressState(state.progressStart - 1);
      const nextState = this.getProgressState(state.progressEnd + 1);
      if (previousState?.animatedSprite) {
        previousState.animatedSprite.parent.alpha =
          1 - (newProgress - state.progressStart) / state.length;
        previousState.animatedSprite.parent.position.y =
          -((newProgress - state.progressStart) / state.length) * this.height;
      }
      if (nextState?.animatedSprite) {
        nextState.animatedSprite.parent.alpha = 1;
        nextState.animatedSprite.parent.position.y =
          (1 - (newProgress - state.progressStart) / state.length) *
          this.height *
          0.5;
      }
    } else if (state?.animatedSprite) {
      state.animatedSprite.parent.position.y = 0;
      state.animatedSprite.parent.alpha = 1;
      state.animatedSprite.gotoAndStop(newProgress - state.progressStart);
    }
  }

  loadFrames(frames: string[], index = 0): AnimatedSprite {
    const firstFrameLoader = new Loader();
    const mainLoader = new Loader();
    const imagesWithoutDuplicated = cleanDuplicateStringArray(frames);
    const firstFrame = imagesWithoutDuplicated.shift();

    if (!firstFrame) {
      throw new Error('No frames to load');
    }

    const animatedSprite = new AnimatedSprite([Texture.EMPTY]);
    animatedSprite.animationSpeed = 1;
    animatedSprite.loop = false;

    const imageContainer = new Container();
    imageContainer.x = 0;
    imageContainer.y = 0;
    imageContainer.zIndex = index * 1000;
    imageContainer.addChild(animatedSprite);

    this.imageContainers.push(imageContainer);
    this.animatedSprites.push(animatedSprite);
    this.application.stage.addChild(imageContainer);

    this.application.stage.children.sort(
      (itemA, itemB) => itemB.zIndex - itemA.zIndex,
    );

    firstFrameLoader.add(firstFrame).load(() => {
      const firstTexture = Texture.from(firstFrame);

      animatedSprite.textures = [firstTexture];

      this.resizeAnimatedSpriteState(animatedSprite);
      this.refresh();

      mainLoader.add(imagesWithoutDuplicated).load(() => {
        const textures = imagesWithoutDuplicated.map((image) =>
          Texture.from(image),
        );

        animatedSprite.textures = [firstTexture, ...textures];

        this.resizeAnimatedSpriteState(animatedSprite);
        this.refresh();
      });
    });

    return animatedSprite;
  }
}

export default Player;
export { Player };
