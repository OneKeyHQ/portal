import { FC, ReactNode } from 'react';

import { Helmet } from 'react-helmet';

import { Box, Main, OnlyDisplay } from '../../../base';
import {
  Navigation,
  PageFooter,
  StayInTouchWidthContainerAndPadding,
} from '../../../common';
import { FeatureSection } from '../components/FeatureSection';
import { FullscreenScrollAnimation } from '../components/FullscreenScrollAnimation';
import { IntroductionSection } from '../components/IntroductionSection';
import { ImageIntroduction } from '../components/IntroductionSection/ImageIntroduction';
import { IntroductionContainer } from '../components/IntroductionSection/IntroductionContainer';
import { IntroductionSectionTitle } from '../components/IntroductionSection/IntroductionSectionTitle';
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

        <IntroductionSection>
          <IntroductionSectionTitle
            name={onekeyTouchData.productInformationData.name}
          />

          <OnlyDisplay xs s m>
            <IntroductionContainer>
              <ImageIntroduction items={onekeyTouchData.imageIntroduction} />
            </IntroductionContainer>
          </OnlyDisplay>

          <OnlyDisplay l xl xxl>
            <FullscreenScrollAnimation />
          </OnlyDisplay>
        </IntroductionSection>

        <FeatureSection {...onekeyTouchData.feature} />

        <MultiChainSupportSection />

        <TechnicalSpecificationsSection
          {...onekeyTouchData.technicalSpecifications}
        />

        <RecommendSection include={['mini', 'pro', 'lite']} />

        <StayInTouchWidthContainerAndPadding />
      </Main>

      <PageFooter isShowEmailSubscribe={false} isShowMediaLinks={false} />

      {children}
    </Box>
  );
};
