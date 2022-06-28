import { FC, ReactNode } from 'react';

import { Helmet } from 'react-helmet';

import { Box, Main } from '../../../base';
import {
  Navigation,
  PageFooter,
  StayInTouchWidthContainerAndPadding,
} from '../../../common';
import { FeatureSection } from '../components/FeatureSection';
import { MultiChainSupportSection } from '../components/MultiChainSupportSection';
import { ProductInformation } from '../components/ProductInformation';
import { TechnicalSpecificationsSection } from '../components/TechnicalSpecificationsSection';

import { useOneKeyTouchData } from './useOneKeyTouchData';

export interface OneKeyTouchProps {
  children?: ReactNode;
}

export const OneKeyTouch: FC<OneKeyTouchProps> = (props) => {
  const { children } = props;
  const onekeyTouchData = useOneKeyTouchData();

  return (
    <Box>
      <Helmet>
        <title>{onekeyTouchData.title}</title>
      </Helmet>

      <Navigation />

      <Main>
        <ProductInformation {...onekeyTouchData.productInformationData} />

        <FeatureSection {...onekeyTouchData.feature} />

        <MultiChainSupportSection />

        <TechnicalSpecificationsSection
          {...onekeyTouchData.technicalSpecifications}
        />

        <StayInTouchWidthContainerAndPadding />

        {/*

        <IntroductionSection />

        

        <RecommendSection />

         */}
      </Main>

      <PageFooter isShowEmailSubscribe={false} isShowMediaLinks={false} />

      {children}
    </Box>
  );
};
