import { FC, ReactNode } from 'react';

import { useTransform } from 'framer-motion';

import {
  useElementInViewportProgress,
  useWindowSize,
} from '../../../../../hooks';
import { staticAssetPrefix } from '../../../../../utils';
import { Box, CanvasPlayer } from '../../../../base';

export interface FullscreenScrollAnimationProps {
  children?: ReactNode;
}

const images = [
  ...new Array(70)
    .fill(0)
    .map((_, i) =>
      staticAssetPrefix(
        `/onekey-touch-feature-01/onekey-touch-feature-01_${i
          .toString()
          .padStart(4, '0')}.webp`,
      ),
    ),
  ...new Array(60)
    .fill(0)
    .map((_, i) =>
      staticAssetPrefix(
        `/onekey-touch-feature-02/onekey-touch-feature-02_${i
          .toString()
          .padStart(4, '0')}.webp`,
      ),
    ),
  ...new Array(60)
    .fill(0)
    .map((_, i) =>
      staticAssetPrefix(
        `/onekey-touch-feature-03/onekey-touch-feature-03_${i
          .toString()
          .padStart(4, '0')}.webp`,
      ),
    ),
];

export const FullscreenScrollAnimation: FC<FullscreenScrollAnimationProps> = (
  props,
) => {
  const { children } = props;
  const { height: windowHeight = 1, width: windowWidth = 1 } = useWindowSize();
  const { ref, elementInViewportProgress } = useElementInViewportProgress(0);

  const motionValue = useTransform(
    elementInViewportProgress,
    [1, 3],
    [0, 69 + 59 + 59],
  );

  return (
    <Box>
      <div ref={ref} />

      <Box
        css={{
          height: '300vh',
          position: 'relative',
          zIndex: 9999,
        }}
      >
        <Box
          css={{
            top: 0,
            position: 'sticky',
          }}
        >
          <Box
            xs={{
              width: '100%',
              height: '100vh',
              overflow: 'hidden',
            }}
          >
            <Box xs={{}}>
              <CanvasPlayer
                width={windowWidth}
                height={windowHeight}
                images={images}
                frame={parseInt(motionValue.get().toFixed(0))}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      {children}
    </Box>
  );
};
