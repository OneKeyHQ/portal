import React from 'react';

import { useTheme } from '@emotion/react';
import { motion, useMotionValue } from 'framer-motion';
import { FreeMode } from 'swiper';

import { useMediaQuery, usePositionAnimation } from '../../../../../hooks';
import { mergeRefs } from '../../../../../utils';
import {
  Box,
  Container,
  Flex,
  GoToShopButton,
  I18n,
  Span,
  Swiper as SwiperComponent,
  SwiperSlide,
} from '../../../../base';
import { FloatCursor, useFloatCursor } from '../../../../common';

import cursorImage from './images/cursor.svg';
import { Item } from './Item';
import { useHardwareData } from './useHardwareData';

export const Hardware: React.FC = () => {
  const { floatCursorProps, ref: floatCursorRef, setStatus } = useFloatCursor();
  const media = useMediaQuery();
  const theme = useTheme();
  const data = useHardwareData();
  const zeroMotionValue = useMotionValue(0);
  const isMedium = media.medium;
  const { ref: paddingRef, motionValue: paddingMotionValue } =
    usePositionAnimation({
      from: 60,
      to: 0,
    });
  const { ref: borderRadiusRef, motionValue: borderRadiusMotionValue } =
    usePositionAnimation({
      from: 40,
      to: 0,
    });
  const borderRadiusDefaultValue = useMotionValue(isMedium ? 40 : 32);

  const ref = mergeRefs(borderRadiusRef, paddingRef, floatCursorRef);

  return (
    <motion.section
      ref={ref}
      style={{
        cursor: 'none',
        position: 'relative',
        overflow: 'hidden',
        paddingRight: isMedium ? paddingMotionValue : zeroMotionValue,
        paddingLeft: isMedium ? paddingMotionValue : zeroMotionValue,
        paddingTop: 60,
      }}
    >
      <motion.div
        onMouseEnter={() => setStatus('visible')}
        onMouseLeave={() => setStatus('hidden')}
        style={{
          borderRadius: isMedium
            ? borderRadiusMotionValue
            : borderRadiusDefaultValue,
          backgroundColor: '#313638',
          paddingTop: isMedium ? 112 : 72,
          paddingBottom: isMedium ? 112 : 72,
        }}
      >
        <Container>
          {/* header */}
          <Flex xs={{ flexDirection: 'column', gap: 24 }}>
            <Flex xs={{ flexDirection: 'column', gap: 8 }}>
              <Span
                xs={{
                  ...theme.text.medium500,
                  color: theme.background.test300,
                  textTransform: 'uppercase',
                }}
                m={{
                  ...theme.text.medium600,
                }}
              >
                <I18n name="title__intuitive_hardware" />
              </Span>
              <Span
                xs={{ ...theme.text.medium800, color: '#ffffff' }}
                m={{ ...theme.text.medium900 }}
              >
                <I18n
                  name="title__intuitive_hardware_desc"
                  multiLine={['m', 'l', 'xl', 'xxl']}
                  singleLine={['xs', 's']}
                />
              </Span>
            </Flex>

            <Box
              xs={{
                width: 'fit-content',
              }}
              onMouseEnter={() => setStatus('hidden')}
              onMouseLeave={() => setStatus('visible')}
            >
              <GoToShopButton
                overrides={{
                  button: {
                    themeColor: 'dark',
                  },
                }}
              />
            </Box>
          </Flex>

          {/* list */}
          <Flex xs={{ paddingTop: 64, gap: 24 }} xl={{ gap: 64 }}>
            {/* for large screen */}
            {media.large && (
              <>
                {data.map((item) => (
                  <Box
                    xs={{ flex: 1 }}
                    key={item.title}
                    onMouseEnter={() =>
                      item.status !== 'coming-soon' && setStatus('active')
                    }
                    onMouseLeave={() =>
                      item.status !== 'coming-soon' && setStatus('visible')
                    }
                  >
                    <Item {...item} />
                  </Box>
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
                  <SwiperSlide key={item.title} style={{ width: 280 }}>
                    <Item key={item.title} {...item} />
                  </SwiperSlide>
                ))}
              </SwiperComponent>
            )}
          </Flex>
        </Container>
      </motion.div>

      <FloatCursor cursorImage={cursorImage} {...floatCursorProps} />
    </motion.section>
  );
};
