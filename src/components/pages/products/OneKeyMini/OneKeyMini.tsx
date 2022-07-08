import { FC, ReactNode } from 'react';

import { Helmet } from 'react-helmet';

import { Box, Main, OnlyDisplay } from '../../../base';
import {
  Navigation,
  PageFooter,
  StayInTouchWidthContainerAndPadding,
} from '../../../common';
import { FeatureSection } from '../components/FeatureSection';
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

          <OnlyDisplay xs s m>
            <IntroductionContainer>
              <ImageIntroduction items={oneKeyMiniData.imageIntroduction} />
            </IntroductionContainer>
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

      {children}
    </Box>
  );
};
