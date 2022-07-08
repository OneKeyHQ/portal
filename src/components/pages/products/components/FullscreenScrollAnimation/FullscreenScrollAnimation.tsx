import { FC, ReactNode } from 'react';

import { motion, useTransform } from 'framer-motion';

import {
  useElementInViewportProgress,
  usePositionAnimation,
  useWindowSize,
} from '../../../../../hooks';
import { mergeRefs, staticAssetPrefix } from '../../../../../utils';
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
  const { ref: paddingRef, motionValue: paddingMotionValue } =
    usePositionAnimation({
      from: 60,
      to: 0,
    });
  const { ref: borderRadiusRef, motionValue: borderRadiusMotionValue } =
    usePositionAnimation({
      from: 40,
      to: 0,
    });

  const containerRef = mergeRefs(borderRadiusRef, paddingRef);

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
              '& canvas': {
                display: 'block',
              },
            }}
          >
            <motion.div
              ref={containerRef}
              style={{
                paddingLeft: paddingMotionValue,
                paddingRight: paddingMotionValue,
              }}
            >
              <motion.div
                style={{
                  overflow: 'hidden',
                  transform: `translate3d(0,0,0)`,
                  borderRadius: borderRadiusMotionValue,
                }}
              >
                <CanvasPlayer
                  objectFit="cover"
                  width={windowWidth}
                  height={windowHeight}
                  images={images}
                  frame={parseInt(motionValue.get().toFixed(0))}
                />
              </motion.div>
            </motion.div>
          </Box>
        </Box>
      </Box>
      {children}
    </Box>
  );
};
