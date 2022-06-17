import { FC, ReactNode } from 'react';

import { useTransform } from 'framer-motion';

import {
  useElementInViewportProgress,
  useWindowSize,
} from '../../../../../../hooks';
import { Box, CanvasPlayer } from '../../../../../base';

export interface FullscreenScrollAnimationProps {
  children?: ReactNode;
}

const images = [
  ...new Array(60)
    .fill(0)
    .map((_, i) => `/hardware-mini-features/onekey-mini-features${i}.jpg`),
];

export const FullscreenScrollAnimation: FC<FullscreenScrollAnimationProps> = (
  props,
) => {
  const { children } = props;
  const { height: windowHeight = 1, width: windowWidth = 1 } = useWindowSize();
  const { ref, elementInViewportProgress } = useElementInViewportProgress(0);

  const motionValue = useTransform(elementInViewportProgress, [0, 2], [0, 59]);

  return (
    <Box>
      <div ref={ref} />

      <Box
        css={{
          height: '00%',
          position: 'relative',
        }}
      >
        <Box
          css={{
            bottom: 0,
            position: 'sticky',
            width: '100vw',
            height: '100vh',
            borderRadius: 24,
            overflow: 'hidden',
          }}
        >
          <CanvasPlayer
            width={windowWidth}
            height={windowHeight}
            images={images}
            frame={parseInt(motionValue.get().toFixed(0))}
          />
        </Box>
      </Box>
      {children}
    </Box>
  );
};
