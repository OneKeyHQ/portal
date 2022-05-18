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
        css={{
          paddingTop: 112,
          paddingBottom: 112,
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          backgroundColor: '#313638',
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
                css={{
                  ...theme.text.medium600,
                  color: theme.background.test300,
                }}
              >
                INTUITIVE HARDWARE
              </Span>
              <Span css={{ ...theme.text.medium900, color: '#ffffff' }}>
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
