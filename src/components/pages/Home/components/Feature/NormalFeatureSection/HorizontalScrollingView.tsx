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

  const x = useTransform(progress, (progressValue) => {
    let offset = 0;
    const delay = 1.5;
    const speed = 1600;

    if (progressValue <= delay) {
      return 0;
    }

    offset = (progressValue - delay) * -speed;

    if (offset < -(fullWidth - containerWidth)) {
      offset = -(fullWidth - containerWidth);
    }

    return offset;
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
