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
  alpha: number;
  y: number;
  visible: boolean;
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
      if (
        (state.progressStart < progress && progress < state.progressEnd) ||
        state.progressStart === progress ||
        state.progressEnd === progress
      ) {
        return state;
      }
    }

    return null;
  }

  resizeAllAnimatedSpriteState() {
    for (const animatedSprite of this.animatedSprites) {
      this.resizeAnimatedSpriteState(animatedSprite);
      this.hide(animatedSprite);
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
        alpha: 1,
        y: 0,
        visible: true,
      });

      // fade state
      if (index !== frameGroups.length - 1) {
        progressStates.push({
          id: nanoid(),
          type: 'fade',
          length: this.FADE_FRAMES_COUNT,
          progressStart: (this.totalProgress += 1),
          progressEnd: (this.totalProgress += this.FADE_FRAMES_COUNT - 1),
          alpha: 1,
          y: 0,
          visible: true,
        });
      }
    });

    this.progressStates = progressStates;
  }

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

    if (state?.type === 'fade') {
      const previousState = this.getProgressState(state.progressStart - 1);
      const nextState = this.getProgressState(state.progressEnd + 1);
      const nextStateAnimatedSprite = nextState?.animatedSprite;
      const previousStateAnimatedSprite = previousState?.animatedSprite;

      if (previousStateAnimatedSprite) {
        const y =
          -((newProgress - state.progressStart) / state.length) * this.height;
        const alpha = 1 - (newProgress - state.progressStart) / state.length;

        previousState.alpha = alpha;
        previousState.y = y;
        previousState.visible = true;
        previousStateAnimatedSprite.gotoAndStop(
          previousStateAnimatedSprite.textures.length - 1,
        );
        previousStateAnimatedSprite.alpha = alpha;
        previousStateAnimatedSprite.visible = true;
        previousStateAnimatedSprite.parent.position.y = y;
      }
      if (nextStateAnimatedSprite) {
        const y =
          (1 - (newProgress - state.progressStart) / state.length) *
          this.height *
          0.5;

        nextState.alpha = 1;
        nextState.y = y;
        nextState.visible = true;
        nextStateAnimatedSprite.gotoAndStop(0);
        nextStateAnimatedSprite.alpha = 1;
        nextStateAnimatedSprite.visible = true;
        nextStateAnimatedSprite.parent.position.y = y;
      }
    } else if (state?.animatedSprite) {
      state.animatedSprite.parent.position.y = 0;
      state.animatedSprite.alpha = 1;
      state.animatedSprite.visible = true;
      state.animatedSprite.gotoAndStop(newProgress - state.progressStart);
      state.visible = true;
      state.alpha = 1;
      state.y = 0;

      const { previousState, nextState } =
        this.getRelativeAnimatedSpriteState();

      this.stateHide(previousState);
      this.stateHide(nextState);
      this.hide(previousState?.animatedSprite);
      this.hide(nextState?.animatedSprite);
    }
  }

  stateHide(state?: ProgressStateItem) {
    if (state) {
      state.visible = false;
      state.alpha = 0;
    }
  }

  getRelativeAnimatedSpriteState() {
    const { progressStates, currentProgress } = this;
    const currentState = this.getProgressState(currentProgress);

    if (!currentState) {
      return {
        previousState: undefined,
        nextState: undefined,
        currentProgress,
      };
    }

    const allFrames = progressStates.filter((state) => state.type !== 'fade');

    const index = allFrames.findIndex(
      (state) =>
        (state.progressStart < currentProgress &&
          currentProgress < state.progressEnd) ||
        state.progressStart === currentProgress ||
        state.progressEnd === currentProgress,
    );

    if (index === -1) {
      return {
        currentState,
        previousState: undefined,
        nextState: undefined,
      };
    }

    const nextState = allFrames[index + 1];
    const previousState = allFrames[index - 1];

    return {
      currentState,
      nextState,
      previousState,
    };
  }

  hide(target?: AnimatedSprite | Container) {
    if (target) {
      target.visible = false;
      target.alpha = 0;
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
