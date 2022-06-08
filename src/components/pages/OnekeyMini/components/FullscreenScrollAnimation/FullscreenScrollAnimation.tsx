import { FC, ReactNode } from 'react';

import { Box } from '../../../../base';

export interface FullscreenScrollAnimationProps {
  children?: ReactNode;
}

export const FullscreenScrollAnimation: FC<FullscreenScrollAnimationProps> = (
  props,
) => {
  const { children } = props;

  return <Box>FullscreenScrollAnimation {children}</Box>;
};
