import { FC, ReactNode } from 'react';

import { Helmet } from 'react-helmet';

import { Box, Main } from '../../../base';
import {
  Navigation,
  PageFooter,
  StayInTouchWidthContainerAndPadding,
} from '../../../common';
import { FeatureSection } from '../components/FeatureSection';
import { IntroductionSection } from '../components/IntroductionSection';
import { MultiChainSupportSection } from '../components/MultiChainSupportSection';
import { ProductInformation } from '../components/ProductInformation';
import { RecommendSection } from '../components/RecommendSection';

import { useOneKeyLiteData } from './useOneKeyLiteData';

export interface OneKeyLiteProps {
  children?: ReactNode;
}

export const OneKeyLite: FC<OneKeyLiteProps> = (props) => {
  const { children } = props;
  const OneKeyLiteData = useOneKeyLiteData();

  return (
    <Box>
      <Helmet>
        <title>{OneKeyLiteData.title}</title>
      </Helmet>

      <Navigation />

      <Main>
        <ProductInformation {...OneKeyLiteData.productInformationData} />

        <IntroductionSection items={OneKeyLiteData.imageIntroduction} />

        <FeatureSection {...OneKeyLiteData.feature} />

        <MultiChainSupportSection />

        <RecommendSection />

        <StayInTouchWidthContainerAndPadding />
      </Main>

      <PageFooter isShowEmailSubscribe={false} isShowMediaLinks={false} />

      {children}
    </Box>
  );
};
