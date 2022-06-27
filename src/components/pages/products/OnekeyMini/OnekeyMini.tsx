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
import { TechnicalSpecificationsSection } from '../components/TechnicalSpecificationsSection';

import { useOnekeyMiniData } from './useOnekeyMiniData';

export interface OnekeyMiniProps {
  children?: ReactNode;
}

export const OnekeyMini: FC<OnekeyMiniProps> = (props) => {
  const { children } = props;
  const onekeyMiniData = useOnekeyMiniData();

  return (
    <Box>
      <Helmet>
        <title>{onekeyMiniData.title}</title>
      </Helmet>

      <Navigation />

      <Main>
        <ProductInformation {...onekeyMiniData} />

        <IntroductionSection items={onekeyMiniData.imageIntroduction} />

        <FeatureSection {...onekeyMiniData.feature} />

        <MultiChainSupportSection />

        <TechnicalSpecificationsSection />

        {/* <RecommendSection /> */}

        <StayInTouchWidthContainerAndPadding />
      </Main>

      <PageFooter isShowEmailSubscribe={false} isShowMediaLinks={false} />

      {children}
    </Box>
  );
};
