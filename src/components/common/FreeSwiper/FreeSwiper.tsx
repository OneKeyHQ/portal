import { FC, ReactNode } from 'react';

import { FreeMode } from 'swiper';

import { Swiper as SwiperComponent, SwiperComponentProps } from '../../base';

export interface FreeSwiperProps extends SwiperComponentProps {
  children?: ReactNode;
}

export const FreeSwiper: FC<FreeSwiperProps> = (props) => {
  const { children, ...otherProps } = props;

  return (
    <SwiperComponent
      slidesPerView="auto"
      modules={[FreeMode]}
      freeMode={{
        enabled: true,
      }}
      {...otherProps}
    >
      {children}
    </SwiperComponent>
  );
};
