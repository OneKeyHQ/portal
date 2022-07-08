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

        <IntroductionSection>
          <IntroductionSectionTitle
            name={OneKeyLiteData.productInformationData.name}
          />

          <OnlyDisplay xs s m>
            <IntroductionContainer>
              <ImageIntroduction items={OneKeyLiteData.imageIntroduction} />
            </IntroductionContainer>
          </OnlyDisplay>
        </IntroductionSection>

        <FeatureSection {...OneKeyLiteData.feature} />

        <MultiChainSupportSection />

        <RecommendSection include={['mini', 'touch', 'pro']} />

        <StayInTouchWidthContainerAndPadding />
      </Main>

      <PageFooter isShowEmailSubscribe={false} isShowMediaLinks={false} />

      {children}
    </Box>
  );
};
