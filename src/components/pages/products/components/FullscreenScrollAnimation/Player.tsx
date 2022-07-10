import { FC } from 'react';

import {
  AnimatePresence,
  MotionValue,
  motion,
  useTransform,
} from 'framer-motion';

import { useWindowSize } from '../../../../../hooks';
import { Box, CanvasPlayerNext } from '../../../../base';
import { IntroductionText } from '../IntroductionSection/IntroductionText';

export interface PlayerProps {
  elementInViewportProgress: MotionValue<number>;
  items: {
    name: string | string[];
    description: string;
    textColor?: string;
    frames: string[];
  }[];
}

export const Player: FC<PlayerProps> = (props) => {
  const { elementInViewportProgress, items } = props;
  const { height: windowHeight = 1, width: windowWidth = 1 } = useWindowSize();
  const allImages = items.reduce(
    (acc: string[], item) => acc.concat(item.frames),
    [],
  );

  const allFrames = items.map((item) => item.frames);

  const motionValue = useTransform(
    elementInViewportProgress,
    [0.8, 3.2],
    [0, allImages.length - 1],
  );

  const currentFrame = parseInt(motionValue.get().toFixed(0));

  return (
    <Box xs={{ position: 'relative' }}>
      <CanvasPlayerNext
        width={windowWidth}
        height={windowHeight}
        frames={allFrames}
        progress={currentFrame}
      />

      <Box
        xs={{
          position: 'absolute',
          padding: 12,
          left: 24,
          bottom: 24,
        }}
        m={{
          left: '3vw',
          bottom: '3vw',
        }}
      >
        <AnimatePresence exitBeforeEnter>
          {items.map((item) => {
            const is = item.frames.includes(allImages[currentFrame] || '');

            return (
              is && (
                <motion.div
                  key={item.description}
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 12 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                >
                  <IntroductionText
                    color={item.textColor as 'black' | 'difference'}
                    name={item.name}
                    description={item.description}
                  />
                </motion.div>
              )
            );
          })}
        </AnimatePresence>
      </Box>
    </Box>
  );
};
