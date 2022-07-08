import { FC, ReactNode } from 'react';

import { Box, Section } from '../../../../base';

export interface IntroductionSectionProps {
  children?: ReactNode;
}

export const IntroductionSection: FC<IntroductionSectionProps> = (props) => {
  const { children } = props;

  return (
    <Section>
      <Box
        xs={{ position: 'relative', paddingTop: 72 }}
        xl={{ paddingTop: 120 }}
      >
        {children}
      </Box>
    </Section>
  );
};
