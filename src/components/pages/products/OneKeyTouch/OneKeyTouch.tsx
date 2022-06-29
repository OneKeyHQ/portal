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

        <IntroductionSection items={onekeyTouchData.imageIntroduction} />

        <FeatureSection {...onekeyTouchData.feature} />

        <MultiChainSupportSection />

        <TechnicalSpecificationsSection
          {...onekeyTouchData.technicalSpecifications}
        />

        <StayInTouchWidthContainerAndPadding />

        <RecommendSection include={['mini', 'pro', 'lite']} />
      </Main>

      <PageFooter isShowEmailSubscribe={false} isShowMediaLinks={false} />

      {children}
    </Box>
  );
};
