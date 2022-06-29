import { FC, ReactNode } from 'react';

import { FreeMode } from 'swiper';

import { Swiper as SwiperComponent, SwiperSlide } from '../../../../base';

import { ProductCard } from './ProductCard';
import { RecommendSectionDataItem } from './useRecommendSectionData';

export interface RecommendSectionSwiperProps {
  children?: ReactNode;
  data: RecommendSectionDataItem[];
}

export const RecommendSectionSwiper: FC<RecommendSectionSwiperProps> = (
  props,
) => {
  const { children, data } = props;

  return (
    <SwiperComponent
      slidesPerView="auto"
      modules={[FreeMode]}
      freeMode={{
        enabled: true,
      }}
    >
      {data.map((item) => (
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
