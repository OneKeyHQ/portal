import { FC, ReactNode } from 'react';

import { Helmet } from 'react-helmet';

import { Box, Container, Main } from '../../base';
import { Navigation, PageFooter, StayInTouch } from '../../common';

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

        <Container>
          <Box xs={{ paddingBottom: 80 }}>
            <StayInTouch />
          </Box>
        </Container>

        {children}
      </Main>

      <PageFooter isShowEmailSubscribe={false} isShowMediaLinks={false} />
    </Box>
  );
};
