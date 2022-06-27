import { FC, ReactNode, useCallback, useState } from 'react';

import { useTheme } from '@emotion/react';
import { Swiper } from 'swiper/types';

import {
  Box,
  ChevronLeftIcon,
  ChevronRightIcon,
  Flex,
  Progress,
  Swiper as SwiperComponent,
  SwiperSlide,
} from '../../../../../base';

import { ArrowWrap } from './ArrowWrap';

export interface ProductImageSwiperProps {
  children?: ReactNode;
  gallery: {
    key: string;
    node: ReactNode;
  }[];
}

export const ProductImageSwiper: FC<ProductImageSwiperProps> = (props) => {
  const { children, gallery } = props;
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
        {/* left arrow */}
        <ArrowWrap
          disabled={!allowSlidePrev}
          onClick={() => {
            thumbsSwiper?.slidePrev();
            updateSlideStatus();
          }}
        >
          <ChevronLeftIcon width={48} height={48} />
        </ArrowWrap>

        {/* content */}
        <SwiperComponent
          onSwiper={(swiper) => {
            setAllowSlideNext(!swiper.isEnd);
            setAllowSlidePrev(!swiper.isBeginning);
            setThumbsSwiper(swiper);
          }}
          onSlideChange={onSlideChange}
          slidesPerView={1}
        >
          {gallery.map((item) => (
            <SwiperSlide key={item.key}>{item.node}</SwiperSlide>
          ))}
        </SwiperComponent>

        {/* right arrow */}
        <ArrowWrap
          disabled={!allowSlideNext}
          onClick={() => {
            thumbsSwiper?.slideNext();
            updateSlideStatus();
          }}
        >
          <ChevronRightIcon width={48} height={48} />
        </ArrowWrap>
      </Flex>

      {/* progress */}
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
