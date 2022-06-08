import { FC, ReactNode } from 'react';

import { Box, Section } from '../../../../base';
import { FullscreenScrollAnimation } from '../FullscreenScrollAnimation';

export interface IntroductionSectionProps {
  children?: ReactNode;
}

export const IntroductionSection: FC<IntroductionSectionProps> = (props) => {
  const { children } = props;

  return (
    <Section>
      <Box>
        <FullscreenScrollAnimation />
        {children}
      </Box>
    </Section>
  );
};
