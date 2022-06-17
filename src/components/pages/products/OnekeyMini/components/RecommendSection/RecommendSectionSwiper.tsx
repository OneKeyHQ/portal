import { FC, ReactNode } from 'react';

import { FreeMode } from 'swiper';

import { Swiper as SwiperComponent, SwiperSlide } from '../../../../../base';

import { ProductCard } from './ProductCard';
import { useRecommendSectionData } from './useRecommendSectionData';

export interface RecommendSectionSwiperProps {
  children?: ReactNode;
}

export const RecommendSectionSwiper: FC<RecommendSectionSwiperProps> = (
  props,
) => {
  const { children } = props;
  const recommendSectionData = useRecommendSectionData();

  return (
    <SwiperComponent
      slidesPerView="auto"
      modules={[FreeMode]}
      freeMode={{
        enabled: true,
      }}
    >
      {recommendSectionData.map((item) => (
        <SwiperSlide
          style={{
            width: 300,
            paddingRight: 25,
          }}
          key={item.name}
        >
          <ProductCard key={item.name} data={item} />
        </SwiperSlide>
      ))}

      {children}
    </SwiperComponent>
  );
};
