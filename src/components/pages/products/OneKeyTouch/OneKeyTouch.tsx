import { FC, ReactNode } from 'react';

import { Helmet } from 'react-helmet';

import { Box, Main } from '../../../base';
import { Navigation, PageFooter } from '../../../common';

import { useOnekeyTouchData } from './useOneKeyTouchData';

export interface OneKeyTouchProps {
  children?: ReactNode;
}

export const OneKeyTouch: FC<OneKeyTouchProps> = (props) => {
  const { children } = props;
  const onekeyTouchData = useOnekeyTouchData();

  return (
    <Box>
      <Helmet>
        <title>{onekeyTouchData.title}</title>
      </Helmet>

      <Navigation />

      <Main>
        {/* <ProductInformation />

        <IntroductionSection />

        <FeatureSection />

        <MultiChainSupportSection />

        <TechnicalSpecificationsSection />

        <RecommendSection />

        <StayInTouchWidthContainerAndPadding /> */}
      </Main>

      <PageFooter isShowEmailSubscribe={false} isShowMediaLinks={false} />

      {children}
    </Box>
  );
};
