import { FC } from 'react';

import { useTheme } from '@emotion/react';
import { motion } from 'framer-motion';

import { usePositionAnimation } from '../../../../../hooks';
import { Box, Button, Container, Flex, Span } from '../../../../base';

import { Item } from './Item';
import { useData } from './useData';

export const Hardware: FC = () => {
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
        paddingRight: paddingMotionValue,
        paddingLeft: paddingMotionValue,
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
          <Box css={{ display: 'flex', gap: 81, paddingTop: 64 }}>
            {data.map((item) => (
              <Item key={item.title} {...item} />
            ))}
          </Box>
        </Container>
      </Box>
    </motion.section>
  );
};
