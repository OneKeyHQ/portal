import { FC, ReactNode } from 'react';

import { Box } from '../../base';

import { IntroductionSection } from './components/IntroductionSection';

export interface OnekeyMiniProps {
  children?: ReactNode;
}

export const OnekeyMini: FC<OnekeyMiniProps> = (props) => {
  const { children } = props;

  return (
    <Box>
      OnekeyMini
      <IntroductionSection />
      {children}
    </Box>
  );
};
