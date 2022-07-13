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
import { ImageIntroduction } from '../components/IntroductionSection/ImageIntroduction';
import { IntroductionContainer } from '../components/IntroductionSection/IntroductionContainer';
import { IntroductionSectionTitle } from '../components/IntroductionSection/IntroductionSectionTitle';
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

          <IntroductionContainer>
            <ImageIntroduction items={OneKeyLiteData.imageIntroduction} />
          </IntroductionContainer>
        </IntroductionSection>

        <FeatureSection {...OneKeyLiteData.feature} />

        <Box xs={{ paddingTop: 40 }}>
          <RecommendSection include={['mini', 'touch', 'pro']} />
        </Box>

        <StayInTouchWidthContainerAndPadding />
      </Main>

      <PageFooter isShowEmailSubscribe={false} isShowMediaLinks={false} />

      {children}
    </Box>
  );
};
