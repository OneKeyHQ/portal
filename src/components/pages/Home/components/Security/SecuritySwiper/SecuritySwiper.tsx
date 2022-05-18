import { FC, ReactNode } from 'react';

import { FreeMode } from 'swiper';

import { Swiper as SwiperComponent, SwiperSlide } from '../../../../../base';
import { useSecurityData } from '../useSecurityData';

import { SecuritySwiperItem } from './SecuritySwiperItem';

export interface SecuritySwiperProps {
  children?: ReactNode;
}

export const SecuritySwiper: FC<SecuritySwiperProps> = (props) => {
  const { children } = props;
  const data = useSecurityData();

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
          style={{
            minWidth: 272,
            width: '30vw',
          }}
        >
          <SecuritySwiperItem
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
