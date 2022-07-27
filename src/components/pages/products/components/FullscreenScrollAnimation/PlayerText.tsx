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
      let currentOpacity = 0;
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
          currentOpacity = progressStates[index * 2]?.alpha || 0;
          y = progressStates[index * 2]?.y || 0;
        } else {
          currentOpacity = 1;
          y = 0;
        }
      }

      if (divRef.current) {
        divRef.current.style.transform = `translate3d(0,${y}px,0)`;
      }

      setOpacity(currentOpacity);
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
      <motion.div
        transition={{
          type: 'ease',
          duration: 0.3,
          ease: 'linear',
        }}
        animate={{ opacity }}
      >
        <div ref={divRef}>
          {opacity}
          {children}
        </div>
      </motion.div>
    </Box>
  );
};
