import { nanoid } from 'nanoid';
import { addStats } from 'pixi-stats';
import {
  AnimatedSprite,
  Application,
  Container,
  Loader,
  Texture,
  Ticker,
  UPDATE_PRIORITY,
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

  frameSize = {
    width: 1920,
    height: 1440,
  };

  loaderQueue = [];

  constructor(config: PlayerConfig) {
    const { element, width, height } = config;

    this.width = width;
    this.height = height;

    this.application = new Application({
      view: element,
      width,
      height,
      resolution: 1,
      autoDensity: true,
      antialias: true,
      backgroundAlpha: 0,
    });

    const stats = addStats(document, this.application);
    const ticker: Ticker = Ticker.shared;

    // eslint-disable-next-line @typescript-eslint/unbound-method
    ticker.add(stats.update, stats, UPDATE_PRIORITY.UTILITY);
  }

  resize(width: number, height: number): void {
    this.width = width;
    this.height = height;
    this.application.renderer.resize(width, height);
    this.resizeAllAnimatedSpriteState();
    this.refresh(true);
  }

  refresh(force = false) {
    this.setProgress(this.currentProgress, force);
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

      animatedSprite.parent.visible = false;
      animatedSprite.parent.alpha = 0;
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

  resetContainerAndAnimatedSprite() {}

  setProgress(progress: number, force = false) {
    if (progress === this.currentProgress && !force) {
      return;
    }

    const maxProgress = this.getTotalProgress();

    let newProgress = progress;
    if (progress > maxProgress) {
      newProgress = maxProgress;
    } else if (progress < 0) {
      newProgress = 0;
    }

    this.currentProgress = newProgress;

    const state = this.getProgressState(newProgress);

    if (!state) {
      return;
    }

    const previousState = this.getProgressState(state.progressStart - 1);
    const nextState = this.getProgressState(state.progressEnd + 1);
    const nextStateAnimatedSprite = nextState?.animatedSprite;
    const previousStateAnimatedSprite = previousState?.animatedSprite;

    if (state?.type === 'fade') {
      if (previousStateAnimatedSprite) {
        previousStateAnimatedSprite.gotoAndStop(
          previousStateAnimatedSprite.textures.length - 1,
        );
        const { parent } = previousStateAnimatedSprite;
        parent.alpha = 1 - (newProgress - state.progressStart) / state.length;
        parent.visible = true;
        parent.position.y =
          -((newProgress - state.progressStart) / state.length) * this.height;
      }
      if (nextStateAnimatedSprite) {
        nextStateAnimatedSprite.gotoAndStop(0);
        const { parent } = nextStateAnimatedSprite;
        parent.alpha = 1;
        parent.visible = true;
        parent.position.y =
          (1 - (newProgress - state.progressStart) / state.length) *
          this.height *
          0.5;
      }
    } else if (state?.animatedSprite) {
      const { parent } = state.animatedSprite;

      parent.position.y = 0;
      parent.alpha = 1;
      parent.visible = true;
      state.animatedSprite.gotoAndStop(newProgress - state.progressStart);

      if (nextStateAnimatedSprite) {
        nextStateAnimatedSprite.parent.visible = false;
      }

      if (previousStateAnimatedSprite) {
        previousStateAnimatedSprite.parent.visible = false;
      }
    }
  }

  loadFrames(frames: string[], frameIndex = 0): AnimatedSprite {
    const imagesWithoutDuplicated = cleanDuplicateStringArray(frames);

    if (imagesWithoutDuplicated.length === 0) {
      throw new Error('No frames to load');
    }

    const animatedSprite = new AnimatedSprite(
      new Array(imagesWithoutDuplicated.length).fill(Texture.EMPTY),
    );
    animatedSprite.animationSpeed = 1;
    animatedSprite.loop = false;

    const imageContainer = new Container();
    imageContainer.x = 0;
    imageContainer.y = 0;
    imageContainer.zIndex = frameIndex * 1000;
    imageContainer.addChild(animatedSprite);

    this.imageContainers.push(imageContainer);
    this.animatedSprites.push(animatedSprite);
    this.application.stage.addChild(imageContainer);

    this.application.stage.children.sort(
      (itemA, itemB) => itemB.zIndex - itemA.zIndex,
    );

    imagesWithoutDuplicated.forEach((image, index) => {
      this.load(image, () => {
        this.updateAnimatedSpriteTexture(animatedSprite, image, index);

        if (window.innerWidth < 2000) {
          return;
        }

        const originImage = image.replace('1920', '2880');

        this.load(originImage, () => {
          this.updateAnimatedSpriteTexture(animatedSprite, originImage, index);

          this.refresh(true);
        });
      });
    });

    return animatedSprite;
  }

  updateAnimatedSpriteTexture(
    animatedSprite: AnimatedSprite,
    textureKey: string,
    index: number,
  ) {
    const { textures } = animatedSprite;
    const texture = Texture.from(textureKey);

    texture.frame.width = this.frameSize.width;
    texture.frame.height = this.frameSize.height;

    textures[index] = texture;

    animatedSprite.textures = textures;

    this.resizeAnimatedSpriteState(animatedSprite);
    this.refresh(true);
  }

  load(url: string, callback: () => void) {
    const loader = new Loader().add(url);

    loader.load(callback);

    return loader;
  }
}

export default Player;
export { Player };
