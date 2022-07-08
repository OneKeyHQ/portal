import { FC } from 'react';

import { MotionValue, useTransform } from 'framer-motion';

import { useWindowSize } from '../../../../../hooks';
import { staticAssetPrefix } from '../../../../../utils';
import { Box, CanvasPlayer } from '../../../../base';

export interface PlayerProps {
  elementInViewportProgress: MotionValue<number>;
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
  ...new Array(15)
    .fill(0)
    .map(() =>
      staticAssetPrefix(
        `/onekey-touch-feature-01/onekey-touch-feature-01_0070.webp`,
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
  ...new Array(15)
    .fill(0)
    .map(() =>
      staticAssetPrefix(
        `/onekey-touch-feature-02/onekey-touch-feature-02_0060.webp`,
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

export const Player: FC<PlayerProps> = (props) => {
  const { elementInViewportProgress } = props;
  const { height: windowHeight = 1, width: windowWidth = 1 } = useWindowSize();

  const motionValue = useTransform(
    elementInViewportProgress,
    [0.8, 3.2],
    [0, images.length - 1],
  );

  return (
    <Box>
      <CanvasPlayer
        objectFit="cover"
        width={windowWidth}
        height={windowHeight}
        images={images}
        frame={parseInt(motionValue.get().toFixed(0))}
      />
    </Box>
  );
};
