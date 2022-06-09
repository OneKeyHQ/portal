import { FC, ReactNode, useState } from 'react';

import { useTheme } from '@emotion/react';
import { StaticImage } from 'gatsby-plugin-image';
import { Swiper } from 'swiper/types';

import {
  Box,
  Swiper as SwiperComponent,
  SwiperSlide,
} from '../../../../../base';

export interface ProductImageSwiperProps {
  children?: ReactNode;
}

export const ProductImageSwiper: FC<ProductImageSwiperProps> = (props) => {
  const { children } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const theme = useTheme();

  const onSlideChange = (swiper: Swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <Box xs={{ maxWidth: 620 }}>
      <SwiperComponent onSlideChange={onSlideChange} slidesPerView={1}>
        <SwiperSlide>
          <StaticImage alt="0" src="./images/mini-gallery-00.png" />
        </SwiperSlide>
        <SwiperSlide>
          <StaticImage alt="1" src="./images/mini-gallery-01.png" />
        </SwiperSlide>
        <SwiperSlide>
          <StaticImage alt="2" src="./images/mini-gallery-02.png" />
        </SwiperSlide>
        <SwiperSlide>
          <StaticImage alt="3" src="./images/mini-gallery-03.png" />
        </SwiperSlide>
        <SwiperSlide>
          <StaticImage alt="4" src="./images/mini-gallery-04.png" />
        </SwiperSlide>
        <SwiperSlide>
          <StaticImage alt="5" src="./images/mini-gallery-05.png" />
        </SwiperSlide>
      </SwiperComponent>

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
            width: `${((activeIndex + 1) / 6) * 100}%`,
            willChange: 'width',
          }}
        />
      </Box>
      {children}
    </Box>
  );
};
