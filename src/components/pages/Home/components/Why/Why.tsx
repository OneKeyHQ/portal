import { FC, useState } from 'react';

import { useTheme } from '@emotion/react';
import Swiper, { FreeMode, Navigation } from 'swiper';

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
  const theme = useTheme();
  const data = useData();
  const [thumbsSwiper, setThumbsSwiper] = useState<Swiper>();

  return (
    <Section>
      <Box
        css={{
          position: 'relative',
          zIndex: 1,
          paddingTop: 64,
          paddingBottom: 64,
          backgroundColor: theme.colors.white,
          label: 'whySection',
        }}
      >
        <Flex
          xs={{
            justifyContent: 'space-between',
            paddingLeft: 24,
            paddingRight: 24,
          }}
          l={{
            paddingLeft: 64,
            paddingRight: 64,
          }}
        >
          <Span css={{ ...theme.text.medium900, color: '#101111' }}>
            Why Choose OneKey
          </Span>

          {/* controller */}
          <Box
            xs={{
              display: 'none',
            }}
            m={{
              display: 'flex',
            }}
          >
            <Arrow
              onClick={() => {
                thumbsSwiper?.slidePrev();
              }}
              direction="left"
            />
            <Arrow
              xs={{
                marginLeft: 8,
              }}
              onClick={() => {
                thumbsSwiper?.slideNext();
              }}
              direction="right"
            />
          </Box>
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
            style={{
              paddingTop: 100,
              paddingBottom: 100,
            }}
          >
            {data.map((item) => (
              <SwiperSlide
                style={{
                  minWidth: 271,
                  width: '30vw',
                }}
                key={item.title}
              >
                <Item {...item} />
              </SwiperSlide>
            ))}
          </SwiperComponent>
        </Box>
      </Box>
    </Section>
  );
};
