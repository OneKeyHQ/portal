import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';
import { MotionValue, motion, useTransform } from 'framer-motion';

import { Box } from '../../../../../base';

export interface HorizontalScrollingViewProps {
  children?: ReactNode;
  progress: MotionValue<number>;
}

export const HorizontalScrollingView: FC<HorizontalScrollingViewProps> = (
  props,
) => {
  const theme = useTheme();
  const { children, progress } = props;

  const x = useTransform(progress, (value) => (value - 1.5) * -600);

  return (
    <Box
      xs={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
      }}
    >
      <motion.div
        style={{
          transition: theme.transitions.motion,
          x,
        }}
      >
        <Box
          xs={{
            position: 'relative',
            display: 'flex',
            width: 3000,
          }}
        >
          {children}
        </Box>
      </motion.div>
    </Box>
  );
};
