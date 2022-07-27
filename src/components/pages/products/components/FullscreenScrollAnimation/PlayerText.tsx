import { FC, ReactNode } from 'react';

import { motion } from 'framer-motion';

import { Box } from '../../../../base';
import { ProgressStateItem } from '../../../../base/CanvasPlayerNext/Player';

export interface PlayerTextProps {
  children?: ReactNode;
  index: number;
  currentPlayerState: ProgressStateItem | null;
  playerProgressStates: ProgressStateItem[];
}

export const PlayerText: FC<PlayerTextProps> = (props) => {
  const { children, index, currentPlayerState, playerProgressStates } = props;

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
      <motion.div style={{ opacity, y }}>{children}</motion.div>
    </Box>
  );
};
