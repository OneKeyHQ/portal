import { FC, useState } from 'react';

import {
  AnimatePresence,
  MotionValue,
  motion,
  useTransform,
} from 'framer-motion';

import { useWindowSize } from '../../../../../hooks';
import { Box, CanvasPlayerNext } from '../../../../base';
import { ProgressStateItem } from '../../../../base/CanvasPlayerNext/Player';
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
  const [totalProgress, setTotalProgress] = useState(0);
  const [currentPlayerState, setCurrentPlayerState] =
    useState<ProgressStateItem | null>(null);

  const allFrames = items.map((item) => item.frames);

  const motionValue = useTransform(
    elementInViewportProgress,
    [0.8, 2.6],
    [0, totalProgress],
  );

  const currentProgress = parseInt(motionValue.get().toFixed(0));

  return (
    <Box xs={{ position: 'relative' }}>
      <CanvasPlayerNext
        width={windowWidth}
        height={windowHeight}
        frames={allFrames}
        progress={currentProgress}
        onTotalProgressChange={(progress, currentState) => {
          setTotalProgress(progress);
          setCurrentPlayerState(currentState);
        }}
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
            console.log('item', item);
            let is = false;

            if (currentPlayerState?.type === 'fade') {
              is = false;
            } else if (currentPlayerState?.frames) {
              const isCurrentState = currentPlayerState.frames.some((frame) =>
                item.frames.includes(frame),
              );

              is =
                isCurrentState &&
                currentProgress > currentPlayerState.progressStart + 5 &&
                currentProgress < currentPlayerState.progressEnd - 5;
            }

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
