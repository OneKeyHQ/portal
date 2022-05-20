import React from 'react';

import { useTheme } from '@emotion/react';
import { motion } from 'framer-motion';
import { FreeMode } from 'swiper';

import { useMediaQuery, usePositionAnimation } from '../../../../../hooks';
import {
  Box,
  Button,
  Container,
  Flex,
  Span,
  Swiper as SwiperComponent,
  SwiperSlide,
} from '../../../../base';

import { Item } from './Item';
import { useData } from './useData';

export const Hardware: React.FC = () => {
  const media = useMediaQuery();
  const theme = useTheme();
  const data = useData();
  const { ref: paddingRef, motionValue: paddingMotionValue } =
    usePositionAnimation({
      from: 60,
      to: 0,
    });

  return (
    <motion.section
      style={{
        overflow: 'hidden',
        paddingRight: media.medium ? paddingMotionValue : 0,
        paddingLeft: media.medium ? paddingMotionValue : 0,
        paddingTop: 60,
        paddingBottom: 60,
      }}
    >
      <div ref={paddingRef} />
      <Box
        xs={{
          paddingTop: 72,
          paddingBottom: 72,
          borderRadius: 32,
          backgroundColor: '#313638',
        }}
        m={{
          paddingTop: 112,
          paddingBottom: 112,
          borderRadius: 40,
        }}
      >
        <Container>
          {/* header */}
          <Flex
            xs={{
              flexDirection: 'column',
              gap: 24,
            }}
          >
            <Flex
              xs={{
                flexDirection: 'column',
                gap: 8,
              }}
            >
              <Span
                xs={{
                  ...theme.text.medium500,
                  color: theme.background.test300,
                }}
                m={{
                  ...theme.text.medium600,
                }}
              >
                INTUITIVE HARDWARE
              </Span>
              <Span
                xs={{ ...theme.text.medium800, color: '#ffffff' }}
                m={{ ...theme.text.medium900 }}
              >
                Choose OneKey Hardware <br /> Wallet Right for You
              </Span>
            </Flex>
            <Box>
              <Button width={122} height={50}>
                Go to Shop
              </Button>
            </Box>
          </Flex>

          {/* list */}
          <Flex
            xs={{ paddingTop: 64, gap: 24 }}
            xl={{
              gap: 64,
            }}
          >
            {/* for large screen */}
            {media.large && (
              <>
                {data.map((item) => (
                  <Item key={item.title} {...item} />
                ))}
              </>
            )}

            {/* small screen */}
            {!media.large && (
              <SwiperComponent
                slidesPerView="auto"
                spaceBetween={30}
                modules={[FreeMode]}
                freeMode={{
                  enabled: true,
                }}
              >
                {data.map((item) => (
                  <SwiperSlide
                    style={{
                      width: 272,
                    }}
                  >
                    <Item key={item.title} {...item} />
                  </SwiperSlide>
                ))}
              </SwiperComponent>
            )}
          </Flex>
        </Container>
      </Box>
    </motion.section>
  );
};
