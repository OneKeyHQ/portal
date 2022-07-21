import { FC, ReactNode } from 'react';

import { Helmet } from 'react-helmet';

import { Box, Main, OnlyDisplay } from '../../../base';
import {
  Navigation,
  PageFooter,
  StayInTouchWidthContainerAndPadding,
} from '../../../common';
import { MobileCart } from '../components/Cart';
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

import { useOneKeyMiniData } from './useOneKeyMiniData';

export interface OneKeyMiniProps {
  children?: ReactNode;
}

export const OneKeyMini: FC<OneKeyMiniProps> = (props) => {
  const { children } = props;
  const oneKeyMiniData = useOneKeyMiniData();

  return (
    <Box>
      <Helmet>
        <title>{oneKeyMiniData.title}</title>
      </Helmet>

      <Navigation />

      <Main>
        <ProductInformation {...oneKeyMiniData.productInformation} />

        <IntroductionSection>
          <IntroductionSectionTitle
            name={oneKeyMiniData.productInformation.name}
          />

          <OnlyDisplay xs s>
            <IntroductionContainer>
              <ImageIntroduction items={oneKeyMiniData.imageIntroduction} />
            </IntroductionContainer>
          </OnlyDisplay>

          <OnlyDisplay m l xl xxl>
            <FullscreenScrollAnimation
              backgroundColor="#F0F1F2"
              items={oneKeyMiniData.imageIntroduction}
            />
          </OnlyDisplay>
        </IntroductionSection>

        <FeatureSection {...oneKeyMiniData.feature} />

        <MultiChainSupportSection />

        <TechnicalSpecificationsSection
          {...oneKeyMiniData.technicalSpecifications}
        />

        <RecommendSection include={['touch', 'pro', 'lite']} />

        <StayInTouchWidthContainerAndPadding />
      </Main>

      <PageFooter isShowEmailSubscribe={false} isShowMediaLinks={false} />

      <MobileCart />

      {children}
    </Box>
  );
};
