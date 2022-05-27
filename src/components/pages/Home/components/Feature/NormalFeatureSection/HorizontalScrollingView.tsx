import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';
import { MotionValue, motion, useTransform } from 'framer-motion';

import { useWindowSize } from '../../../../../../hooks';
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
  const { width: windowWidth = 0 } = useWindowSize();

  const x = useTransform(progress, (value) => {
    let result = 0;

    if (value <= 1.7) {
      return 0;
    }

    result = (value - 1.7) * -2000;

    if (-(3100 - windowWidth) > result) {
      result = -(3100 - windowWidth);
    }

    if (result > 100) {
      result = 100;
    }

    return result;
  });

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
