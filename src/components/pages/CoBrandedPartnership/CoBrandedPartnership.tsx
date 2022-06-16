import { FC, ReactNode } from 'react';

import { Helmet } from 'react-helmet';

import { Box, Main } from '../../base';
import { Navigation, PageFooter } from '../../common';

import { Hero } from './Hero';
import { OurOfferSection } from './OurOfferSection';
import { ProductShowcaseSection } from './ProductShowcaseSection';

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

        <OurOfferSection />

        <ProductShowcaseSection />

        {children}
      </Main>

      <PageFooter isShowEmailSubscribe={false} isShowMediaLinks={false} />
    </Box>
  );
};
