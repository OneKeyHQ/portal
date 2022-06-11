import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Container, Section, SwiperSlide } from '../../../base';
import { FreeSwiper } from '../../../common';

import { ImageSwitcher } from './ImageSwitcher';
import { TextBlock } from './TextBlock';
import { Title } from './Title';
import { useFeatureSectionData } from './useFeatureSectionData';

export interface FeatureSectionProps {
  children?: ReactNode;
}

export const FeatureSection: FC<FeatureSectionProps> = (props) => {
  const { children } = props;
  const theme = useTheme();
  const featureSectionData = useFeatureSectionData();

  return (
    <Section
      xs={{
        backgroundColor: theme.colors.test500,
        color: theme.colors.white,
        paddingTop: 56,
        paddingBottom: 72,
      }}
      l={{
        paddingTop: 120,
        paddingBottom: 120,
      }}
    >
      <Container>
        <Title {...featureSectionData} />

        <ImageSwitcher
          imageNodes={featureSectionData.items.map((item) => item.imageNode)}
        />
      </Container>

      <FreeSwiper
        spaceBetween={24}
        style={{
          paddingLeft: 24,
          paddingRight: 24,
        }}
      >
        {featureSectionData.items.map((item) => (
          <SwiperSlide style={{ width: 272 }}>
            <TextBlock key={item.name} {...item} />
          </SwiperSlide>
        ))}
      </FreeSwiper>

      <Box>{children}</Box>
    </Section>
  );
};
