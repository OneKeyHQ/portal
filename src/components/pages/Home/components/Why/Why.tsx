import { FC, useState } from 'react';

import { useTheme } from '@emotion/react';
import Swiper, { FreeMode, Navigation } from 'swiper';

import { useMediaQuery, useWindowSize } from '../../../../../hooks';
import {
  Box,
  Container,
  Flex,
  Section,
  Span,
  Swiper as SwiperComponent,
  SwiperSlide,
  useCurrentContainerWidth,
} from '../../../../base';

import { Arrow } from './Arrow';
import { Item } from './Item';
import { useData } from './useData';

export const Why: FC = () => {
  const theme = useTheme();
  const data = useData();
  const [thumbsSwiper, setThumbsSwiper] = useState<Swiper>();
  const media = useMediaQuery();
  const [allowSlideNext, setAllowSlideNext] = useState<boolean | undefined>();
  const [allowSlidePrev, setAllowSlidePrev] = useState<boolean | undefined>();

  const updateSlideStatus = () => {
    setAllowSlideNext(!thumbsSwiper?.isEnd);
    setAllowSlidePrev(!thumbsSwiper?.isBeginning);
  };

  const currentContainerWidth = useCurrentContainerWidth();
  const { width: windowWidth = 0 } = useWindowSize();

  return (
    <Section>
      <Box
        css={{
          position: 'relative',
          zIndex: 1,
          paddingTop: 64,
          backgroundColor: theme.colors.white,
          label: 'whySection',
        }}
      >
        <Container>
          <Flex xs={{ justifyContent: 'space-between' }}>
            <Span
              css={{ ...theme.text.medium900, color: theme.colors.test500 }}
            >
              Why Choose OneKey?
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
                disabled={!allowSlidePrev}
                onClick={() => {
                  thumbsSwiper?.slidePrev();
                  updateSlideStatus();
                }}
                direction="left"
                xs={{
                  width: 64,
                }}
              />
              <Arrow
                disabled={!allowSlideNext}
                xs={{
                  marginLeft: 24,
                  width: 128,
                  justifyContent: 'flex-end',
                }}
                onClick={() => {
                  thumbsSwiper?.slideNext();
                  updateSlideStatus();
                }}
                direction="right"
              />
            </Box>
          </Flex>
        </Container>

        <Box
          css={{
            width: '100%',
            overflow: 'hidden',
          }}
        >
          <SwiperComponent
            onSwiper={(swiper) => {
              setAllowSlideNext(!swiper.isEnd);
              setAllowSlidePrev(!swiper.isBeginning);
              setThumbsSwiper(swiper);
            }}
            slidesPerView="auto"
            spaceBetween={0}
            modules={[FreeMode, Navigation]}
            freeMode={{
              enabled: true,
            }}
            style={{
              paddingLeft: (windowWidth - currentContainerWidth) / 2 || 24,
              paddingRight: media.large ? 64 : 24,
              paddingTop: media.medium ? 100 : 60,
              paddingBottom: media.medium ? 180 : 60,
            }}
          >
            {data.map((item) => (
              <SwiperSlide
                style={{
                  minWidth: 271,
                  maxWidth: 421,
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
