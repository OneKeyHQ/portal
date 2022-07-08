import { FC, ReactNode } from 'react';

import { motion } from 'framer-motion';

import {
  useElementInViewportProgress,
  usePositionAnimation,
} from '../../../../../hooks';
import { mergeRefs } from '../../../../../utils';
import { Box } from '../../../../base';

import { Player } from './Player';

export interface FullscreenScrollAnimationProps {
  children?: ReactNode;
}

export const FullscreenScrollAnimation: FC<FullscreenScrollAnimationProps> = (
  props,
) => {
  const { children } = props;

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
                <Player elementInViewportProgress={elementInViewportProgress} />
              </motion.div>
            </motion.div>
          </Box>
        </Box>
      </Box>
      {children}
    </Box>
  );
};
