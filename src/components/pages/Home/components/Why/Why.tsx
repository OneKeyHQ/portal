import { FC, useState } from 'react';

import Swiper, { FreeMode, Navigation } from 'swiper';

import { theme } from '../../../../../theme';
import {
  Box,
  Flex,
  Section,
  Span,
  Swiper as SwiperComponent,
  SwiperSlide,
} from '../../../../base';

import { Arrow } from './Arrow';
import { Item } from './Item';
import { useData } from './useData';

export const Why: FC = () => {
  const itemStyle = {
    width: 421,
  };
  const data = useData();
  const [thumbsSwiper, setThumbsSwiper] = useState<Swiper>();

  return (
    <Section>
      <Flex
        css={{
          position: 'relative',
          zIndex: 1,
          paddingTop: 64,
          paddingBottom: 64,
          backgroundColor: '#ffffff',
          flexDirection: 'column',
          gap: 97,
          label: 'whySection',
        }}
      >
        <Flex
          css={{
            justifyContent: 'space-between',
            paddingLeft: 64,
            paddingRight: 64,
          }}
        >
          <Span css={{ ...theme.text.medium900, color: '#101111' }}>
            Why Choose OneKey
          </Span>

          {/* controller */}
          <Flex
            xs={{
              gap: 8,
            }}
          >
            <Arrow
              onClick={() => {
                thumbsSwiper?.slidePrev();
              }}
              direction="left"
            />
            <Arrow
              onClick={() => {
                thumbsSwiper?.slideNext();
              }}
              direction="right"
            />
          </Flex>
        </Flex>
        <Box
          css={{
            width: '100%',
            overflow: 'hidden',
          }}
        >
          <SwiperComponent
            onSwiper={(swiper) => {
              setThumbsSwiper(swiper);
            }}
            slidesPerView="auto"
            spaceBetween={0}
            modules={[FreeMode, Navigation]}
            freeMode={{
              enabled: true,
            }}
          >
            {data.map((item) => (
              <SwiperSlide style={{ ...itemStyle, marginLeft: 64 }}>
                <Item {...item} />
              </SwiperSlide>
            ))}
          </SwiperComponent>
        </Box>
      </Flex>
    </Section>
  );
};
