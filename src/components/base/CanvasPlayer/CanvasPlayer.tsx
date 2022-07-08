import { FC, useEffect, useRef, useState } from 'react';

import { AnimatedSprite, Application } from 'pixi.js';

import { init } from './CanvasKeyframes';

interface CanvasPlayerProps {
  frame: number;
  // all image url array
  images: string[];
  width: number;
  height: number;
}

export const CanvasPlayer: FC<CanvasPlayerProps> = (props) => {
  const { frame, images, width, height } = props;
  // is initialized
  const isInitialized = useRef(false);
  const application = useRef<Application | null>(null);

  // canvas ref
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // animatedSprite ref
  const [animatedSpriteState, setAnimatedSpriteState] =
    useState<AnimatedSprite | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas && images && !isInitialized.current && !application.current) {
      isInitialized.current = true;

      application.current = init(
        {
          element: canvas,
          images,
          width,
          height,
        },
        ({ animatedSprite }) => {
          animatedSprite.gotoAndStop(0);

          setAnimatedSpriteState(animatedSprite);
        },
      );
    }

    return () => {
      if (application.current) {
        // application.current.destroy();
        // application.current = null;
      }
    };
  }, [images, width, height]);

  useEffect(() => {
    // application resize
    if (application.current && animatedSpriteState) {
      application.current.renderer.resize(width, height);

      const { texture } = animatedSpriteState;
      const imageSpriteWidth = texture.baseTexture.width;
      const imageSpriteHeight = texture.baseTexture.height;
      const containerWidth = width;
      const containerHeight = height;

      const imageRatio = imageSpriteWidth / imageSpriteHeight;
      const containerRatio = containerWidth / containerHeight;

      if (containerRatio > imageRatio) {
        animatedSpriteState.height /=
          animatedSpriteState.width / containerWidth;
        animatedSpriteState.width = containerWidth;
        animatedSpriteState.position.x = 0;
        animatedSpriteState.position.y =
          (containerHeight - animatedSpriteState.height) / 2;
      } else {
        animatedSpriteState.width /=
          animatedSpriteState.height / containerHeight;
        animatedSpriteState.height = containerHeight;
        animatedSpriteState.position.y = 0;
        animatedSpriteState.position.x =
          (containerWidth - animatedSpriteState.width) / 2;
      }
    }
  }, [width, height, animatedSpriteState]);

  useEffect(() => {
    if (animatedSpriteState) {
      animatedSpriteState.gotoAndStop(frame);
    }
  }, [animatedSpriteState, frame]);

  return <canvas ref={canvasRef} />;
};
