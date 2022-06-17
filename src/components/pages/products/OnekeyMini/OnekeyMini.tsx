import { FC, ReactNode } from 'react';

import { Helmet } from 'react-helmet';

import { Box, Container, Main } from '../../../base';
import { Navigation, PageFooter, StayInTouch } from '../../../common';

import { FeatureSection } from './components/FeatureSection';
import { IntroductionSection } from './components/IntroductionSection';
import { MultiChainSupportSection } from './components/MultiChainSupportSection';
import { ProductInformation } from './components/ProductInformation';
import { RecommendSection } from './components/RecommendSection';
import { TechnicalSpecificationsSection } from './components/TechnicalSpecificationsSection';

export interface OnekeyMiniProps {
  children?: ReactNode;
}

export const OnekeyMini: FC<OnekeyMiniProps> = (props) => {
  const { children } = props;

  return (
    <Box>
      <Helmet>
        <title>OneKey</title>
      </Helmet>

      <Navigation />

      <Main>
        <ProductInformation />

        <IntroductionSection />

        <FeatureSection />

        <MultiChainSupportSection />

        <TechnicalSpecificationsSection />

        <RecommendSection />

        <Container>
          <Box
            xs={{ paddingTop: 40, paddingBottom: 40 }}
            m={{ paddingBottom: 80 }}
          >
            <StayInTouch />
          </Box>
        </Container>
      </Main>

      <PageFooter isShowEmailSubscribe={false} isShowMediaLinks={false} />

      {children}
    </Box>
  );
};
