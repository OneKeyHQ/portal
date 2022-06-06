import { FC, ReactNode } from 'react';

import { FreeMode } from 'swiper';

import { Swiper as SwiperComponent, SwiperSlide } from '../../../../../base';
import { useProductsData } from '../useProductsData';

import { ProductSwiperItem } from './ProductSwiperItem';

export interface ProductSwiperProps {
  children?: ReactNode;
}

export const ProductSwiper: FC<ProductSwiperProps> = (props) => {
  const { children } = props;
  const data = useProductsData();

  return (
    <SwiperComponent
      slidesPerView="auto"
      spaceBetween={30}
      modules={[FreeMode]}
      freeMode={{
        enabled: true,
      }}
      style={{
        paddingLeft: 24,
        paddingRight: 24,
      }}
    >
      {data.map((item) => (
        <SwiperSlide
          key={item.title}
          style={{
            minWidth: 272,
            maxWidth: 600,
            width: '70vw',
          }}
        >
          <ProductSwiperItem
            key={item.title}
            imageNode={item.image}
            title={item.title}
            buttonNode={item.button}
            description={item.description}
          />
        </SwiperSlide>
      ))}

      {children}
    </SwiperComponent>
  );
};
