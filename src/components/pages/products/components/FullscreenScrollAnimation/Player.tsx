import { FC, useState } from 'react';

import { MotionValue, motion, useTransform } from 'framer-motion';

import { useWindowSize } from '../../../../../hooks';
import { Box, CanvasPlayerNext } from '../../../../base';
import {
  ProgressStateItem,
  ProgressStates,
} from '../../../../base/CanvasPlayerNext/Player';
import { IntroductionText } from '../IntroductionSection/IntroductionText';

export interface PlayerProps {
  elementInViewportProgress: MotionValue<number>;
  backgroundColor: string;
  items: {
    name: string | string[];
    description: string;
    textColor?: string;
    frames: string[];
  }[];
}

export const Player: FC<PlayerProps> = (props) => {
  const { elementInViewportProgress, items, backgroundColor } = props;
  const { height: windowHeight = 1, width: windowWidth = 1 } = useWindowSize();
  const [totalProgress, setTotalProgress] = useState(0);
  const [currentPlayerState, setCurrentPlayerState] =
    useState<ProgressStateItem | null>(null);
  const [playerProgressStates, setPlayerProgressStates] =
    useState<ProgressStates>([]);

  const allFrames = items.map((item) => item.frames);

  const motionValue = useTransform(
    elementInViewportProgress,
    [0, 1],
    [0, totalProgress],
  );

  const currentProgress = parseInt(motionValue.get().toFixed(0));

  return (
    <Box xs={{ position: 'relative' }}>
      <CanvasPlayerNext
        backgroundColor={backgroundColor}
        width={windowWidth}
        height={windowHeight}
        frames={allFrames}
        progress={currentProgress}
        onTotalProgressChange={(progress, currentState, progressStates) => {
          setTotalProgress(progress);
          setCurrentPlayerState(currentState);
          setPlayerProgressStates(progressStates);
        }}
      />

      {items.map((item, index) => {
        // 0 => 0,1
        // 1 => 2,3
        // 2 => 4,5
        let opacity = 0;
        let y = 0;

        if (currentPlayerState) {
          if (
            currentPlayerState.id === playerProgressStates[index * 2]?.id ||
            currentPlayerState.id === playerProgressStates[index * 2 + 1]?.id
          ) {
            if (currentPlayerState.type === 'fade') {
              opacity = playerProgressStates[index * 2]?.alpha || 0;
              y = playerProgressStates[index * 2]?.y || 0;
            } else {
              opacity = 1;
              y = 0;
            }
          }
        }

        return (
          <Box
            key={item.description}
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
            <motion.div
              transition={{
                duration: 0.3,
                delay: 0,
                ease: 'linear',
              }}
              animate={{
                opacity,
              }}
              style={{
                y,
              }}
            >
              <IntroductionText
                color={item.textColor as 'black' | 'difference'}
                name={item.name}
                description={item.description}
              />
            </motion.div>
          </Box>
        );
      })}
    </Box>
  );
};
