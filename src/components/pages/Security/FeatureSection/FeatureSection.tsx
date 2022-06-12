import { FC, ReactNode, useState } from 'react';

import { useTheme } from '@emotion/react';
import Swiper from 'swiper';

import { useBoundingClientRect, useInterval } from '../../../../hooks';
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
  const [blockSwiper, setBlockSwiper] = useState<Swiper>();
  const [progress, setProgress] = useState(0);
  const progressBarWidth = 100;
  const { ref, rect } = useBoundingClientRect();
  const progressContainerWidth = rect?.width ?? 0;
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateProgress = () => {
    if (blockSwiper?.progress) {
      setCurrentIndex(
        Math.abs(parseInt((blockSwiper.progress * 2).toFixed(0))),
      );

      setProgress(blockSwiper?.progress);
    }
  };

  useInterval(() => {
    updateProgress();
  }, 100);

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
          active={currentIndex}
          featureSectionDataItems={featureSectionData.items}
        />

        <Box
          xs={{
            height: 1,
            background: 'rgba(255, 255, 255, 0.16)',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <div css={{ width: '100%' }} ref={ref} />
          <Box
            xs={{
              willChange: 'width',
              transition: 'width 0.2s linear',
              width:
                // fixed width
                progressBarWidth +
                // dynamic width
                (progressContainerWidth - progressBarWidth) * progress,
              height: 1,
              background: theme.colors.white,
            }}
          />
        </Box>
      </Container>

      <Box xs={{ paddingTop: 40 }}>
        <FreeSwiper
          onSwiper={setBlockSwiper}
          spaceBetween={24}
          style={{
            paddingLeft: 24,
            paddingRight: 24,
          }}
        >
          {featureSectionData.items.map((item) => (
            <SwiperSlide key={item.name} style={{ width: 272 }}>
              <TextBlock {...item} />
            </SwiperSlide>
          ))}
        </FreeSwiper>
      </Box>

      <Box>{children}</Box>
    </Section>
  );
};
