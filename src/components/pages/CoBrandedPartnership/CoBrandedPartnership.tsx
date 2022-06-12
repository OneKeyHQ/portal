import { FC, ReactNode } from 'react';

import { Helmet } from 'react-helmet';

import { Box, Main, Navigation } from '../../base';
import { PageFooter } from '../../common';

import { Hero } from './Hero';

export interface CoBrandedPartnershipProps {
  children?: ReactNode;
}

export const CoBrandedPartnership: FC<CoBrandedPartnershipProps> = (props) => {
  const { children } = props;

  return (
    <Box>
      <Helmet>
        <title>OneKey</title>
      </Helmet>
      <Navigation />

      <Main>
        <Hero />

        {children}
      </Main>

      <PageFooter isShowEmailSubscribe={false} isShowMediaLinks={false} />
    </Box>
  );
};
