import { FC, useState } from 'react';

import { MotionValue, useTransform } from 'framer-motion';

import { useWindowSize } from '../../../../../hooks';
import { Box, CanvasPlayerNext } from '../../../../base';
import {
  ProgressStateItem,
  ProgressStates,
} from '../../../../base/CanvasPlayerNext/Player';
import { IntroductionText } from '../IntroductionSection/IntroductionText';

import { PlayerText } from './PlayerText';

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

  const currentProgress = parseFloat(motionValue.get().toFixed(1));

  return (
    <Box xs={{ position: 'relative' }}>
      <CanvasPlayerNext
        backgroundColor={backgroundColor}
        width={windowWidth}
        height={windowHeight}
        frames={allFrames}
        progress={currentProgress}
        onUpdate={({ progressStates, currentState }) => {
          setPlayerProgressStates(progressStates);

          if (currentState) {
            setCurrentPlayerState(currentState);
          }
        }}
        onTotalProgressChange={(progress, currentState, progressStates) => {
          setTotalProgress(progress);
          setPlayerProgressStates(progressStates);

          if (currentState) {
            setCurrentPlayerState(currentState);
          }
        }}
      />

      {items.map((item, index) => (
        <PlayerText
          playerProgressStates={playerProgressStates}
          currentPlayerState={currentPlayerState}
          index={index}
          key={item.description}
        >
          <IntroductionText
            color={item.textColor as 'black' | 'difference'}
            name={item.name}
            description={item.description}
          />
        </PlayerText>
      ))}
    </Box>
  );
};
