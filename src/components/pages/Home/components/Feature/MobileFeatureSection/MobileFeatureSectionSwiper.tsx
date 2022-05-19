import { FC, ReactNode, useState } from 'react';

import { useTheme } from '@emotion/react';
import { Swiper } from 'swiper/types';

import {
  Box,
  Swiper as SwiperComponent,
  SwiperSlide,
} from '../../../../../base';
import { FeatureItem } from '../FeatureItem';
import { useFeatureData } from '../useFeatureData';

export interface MobileFeatureSectionSwiperProps {
  children?: ReactNode;
}

export const MobileFeatureSectionSwiper: FC<MobileFeatureSectionSwiperProps> = (
  props,
) => {
  const theme = useTheme();
  const { children } = props;
  const data = useFeatureData();
  const [activeIndex, setActiveIndex] = useState(0);

  const onSlideChange = (swiper: Swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <Box xs={{ label: 'MobileFeatureSectionSwiper' }}>
      <SwiperComponent onSlideChange={onSlideChange} slidesPerView={1}>
        {data.map((item) => (
          <SwiperSlide key={item.title}>
            <FeatureItem
              key={item.title}
              imageNode={item.image}
              title={item.title}
              description={item.description}
            />
          </SwiperSlide>
        ))}

        {children}
      </SwiperComponent>

      {/* progress */}
      <Box
        xs={{
          overflow: 'hidden',
          margin: '24px auto 0 auto',
          label: 'progress',
          width: 175,
          height: 3,
          background: theme.colors.white,
        }}
      >
        <Box
          xs={{
            transition: theme.transitions.allEaseOut,
            height: '100%',
            background: theme.colors.gray900,
            width: `${((activeIndex + 1) / data.length) * 100}%`,
            willChange: 'width',
          }}
        />
      </Box>
    </Box>
  );
};
