import { FC, ReactNode } from 'react';

import { Box, Container, Section } from '../../../../../base';
import { MultiChainSupportMediaCard } from '../../../../../common';

export interface MultiChainSupportSectionProps {
  children?: ReactNode;
}

export const MultiChainSupportSection: FC<MultiChainSupportSectionProps> = (
  props,
) => {
  const { children } = props;

  return (
    <Section>
      <Container>
        <Box
          xs={{ paddingTop: 72, paddingBottom: 72 }}
          m={{ paddingTop: 100, paddingBottom: 100 }}
          l={{ paddingTop: 120, paddingBottom: 120 }}
        >
          <MultiChainSupportMediaCard />
        </Box>
        {children}
      </Container>
    </Section>
  );
};
