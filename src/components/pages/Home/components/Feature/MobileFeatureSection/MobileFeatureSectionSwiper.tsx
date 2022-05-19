import { FC, ReactNode } from 'react';

import { Swiper as SwiperComponent, SwiperSlide } from '../../../../../base';
import { FeatureItem } from '../FeatureItem';
import { useFeatureData } from '../useFeatureData';

export interface MobileFeatureSectionSwiperProps {
  children?: ReactNode;
}

export const MobileFeatureSectionSwiper: FC<MobileFeatureSectionSwiperProps> = (
  props,
) => {
  const { children } = props;
  const data = useFeatureData();

  return (
    <SwiperComponent slidesPerView={1}>
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
  );
};
