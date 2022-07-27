import { FC, ReactNode, useEffect, useRef, useState } from 'react';

import { motion } from 'framer-motion';

import { Box } from '../../../../base';
import { Player } from '../../../../base/CanvasPlayerNext/Player';

export interface PlayerTextProps {
  player: Player | null;
  children?: ReactNode;
  index: number;
}

export const PlayerText: FC<PlayerTextProps> = (props) => {
  const { children, index, player } = props;
  const divRef = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      let y = 0;

      if (!player) {
        return;
      }

      const { progressStates, currentProgress } = player;
      const currentState = player.getProgressState(currentProgress);

      if (!currentState) {
        return;
      }

      if (
        currentState.id === progressStates[index * 2]?.id ||
        currentState.id === progressStates[index * 2 + 1]?.id
      ) {
        if (currentState.type === 'fade') {
          setOpacity(progressStates[index * 2]?.alpha || 0);
          y = progressStates[index * 2]?.y || 0;
        } else {
          setOpacity(1);
          y = 0;
        }
      }

      if (divRef.current) {
        divRef.current.style.transform = `translateY(${y}px)`;
      }
    }, 16);

    return () => {
      clearInterval(id);
    };
  }, [index, player]);

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
      <div ref={divRef}>
        <motion.div style={{ opacity }}>{children}</motion.div>
      </div>
    </Box>
  );
};
