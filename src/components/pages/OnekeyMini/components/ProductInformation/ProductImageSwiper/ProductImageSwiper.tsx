import { FC, ReactNode, useCallback, useState } from 'react';

import { useTheme } from '@emotion/react';
import { StaticImage } from 'gatsby-plugin-image';
import { Swiper } from 'swiper/types';

import {
  Box,
  Flex,
  Progress,
  Swiper as SwiperComponent,
  SwiperSlide,
} from '../../../../../base';

import { ArrowWrap } from './ArrowWrap';
import { ReactComponent as LeftArrowIcon } from './images/left.svg';
import { ReactComponent as RightArrowIcon } from './images/right.svg';

export interface ProductImageSwiperProps {
  children?: ReactNode;
}

export const ProductImageSwiper: FC<ProductImageSwiperProps> = (props) => {
  const { children } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const theme = useTheme();
  const [allowSlideNext, setAllowSlideNext] = useState<boolean | undefined>();
  const [allowSlidePrev, setAllowSlidePrev] = useState<boolean | undefined>();
  const [thumbsSwiper, setThumbsSwiper] = useState<Swiper>();

  const updateSlideStatus = useCallback(() => {
    setAllowSlideNext(!thumbsSwiper?.isEnd);
    setAllowSlidePrev(!thumbsSwiper?.isBeginning);
  }, [thumbsSwiper?.isBeginning, thumbsSwiper?.isEnd]);

  const onSlideChange = (swiper: Swiper) => {
    setActiveIndex(swiper.activeIndex);
    updateSlideStatus();
  };

  return (
    <Box
      m={{
        width: '100%',
      }}
      l={{ maxWidth: 700 }}
      xl={{ maxWidth: 800 }}
    >
      <Flex xs={{ alignItems: 'center' }}>
        <ArrowWrap
          disabled={!allowSlidePrev}
          onClick={() => {
            thumbsSwiper?.slidePrev();
            updateSlideStatus();
          }}
        >
          <LeftArrowIcon width={48} height={48} />
        </ArrowWrap>
        <SwiperComponent
          onSwiper={(swiper) => {
            setAllowSlideNext(!swiper.isEnd);
            setAllowSlidePrev(!swiper.isBeginning);
            setThumbsSwiper(swiper);
          }}
          onSlideChange={onSlideChange}
          slidesPerView={1}
        >
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
        <ArrowWrap
          disabled={!allowSlideNext}
          onClick={() => {
            thumbsSwiper?.slideNext();
            updateSlideStatus();
          }}
        >
          <RightArrowIcon width={48} height={48} />
        </ArrowWrap>
      </Flex>

      <Flex xs={{ justifyContent: 'center' }}>
        <Progress
          containerColor={theme.colors.test200}
          amount={6}
          activeIndex={activeIndex}
        />
      </Flex>

      {children}
    </Box>
  );
};
