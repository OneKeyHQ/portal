import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';
import { MotionValue, motion, useTransform } from 'framer-motion';

import {
  Box,
  Flex,
  useContainerMargin,
  useCurrentContainerWidth,
} from '../../../../../base';

export interface HorizontalScrollingViewProps {
  children?: ReactNode;
  progress: MotionValue<number>;
}

export const HorizontalScrollingView: FC<HorizontalScrollingViewProps> = (
  props,
) => {
  const theme = useTheme();
  const { children, progress } = props;
  const containerMargin = useContainerMargin();
  const containerWidth = useCurrentContainerWidth();
  const fullWidth = 3000;

  const x = useTransform(progress, (value) => {
    let result = 0;

    if (value <= 1) {
      return 0;
    }

    result = (value - 1) * -1600;

    if (result < -(fullWidth - containerWidth)) {
      result = -(fullWidth - containerWidth);
    }

    return result;
  });

  return (
    <Box
      xs={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        paddingLeft: containerMargin,
        paddingRight: containerMargin,
      }}
    >
      <motion.div
        style={{
          transition: theme.transitions.motion,
          x,
        }}
      >
        <Flex xs={{ position: 'relative', width: fullWidth }}>{children}</Flex>
      </motion.div>
    </Box>
  );
};
