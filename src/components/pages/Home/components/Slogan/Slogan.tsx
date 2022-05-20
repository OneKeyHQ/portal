import React from 'react';

import { useTheme } from '@emotion/react';
import { motion } from 'framer-motion';

import { useMediaQuery } from '../../../../../hooks';
import { Box, Container, Section } from '../../../../base';

import { itemVariants, variants } from './animationVariants';
import { OneKey } from './OneKey';

export const Slogan: React.FC = () => {
  const theme = useTheme();
  const media = useMediaQuery();

  return (
    <Section
      xs={{
        paddingTop: 80,
        paddingBottom: 80,
      }}
      m={{
        paddingTop: '16vh',
        paddingBottom: '16vh',
      }}
    >
      <Container>
        <Box
          xs={{
            ...theme.text.medium700,
            color: theme.colors.test500,
          }}
          m={{
            textAlign: 'center',
            ...theme.text.medium900,
          }}
          l={{
            ...theme.text.medium900,
          }}
          xl={{
            ...theme.text.medium1000,
          }}
          xxl={{
            ...theme.text.medium1100,
          }}
        >
          <motion.p
            viewport={{ once: true, amount: 'all' }}
            variants={variants}
            whileInView="open"
            initial="closed"
          >
            {media.medium ? (
              <motion.span variants={itemVariants}>
                <OneKey /> is the smartest way
                <br /> to secure, buy, exchange and <br />
                grow your crypto assets.
              </motion.span>
            ) : (
              <motion.span variants={itemVariants}>
                <OneKey />
                is the smartest way to secure, buy, exchange and grow your
                crypto assets.
              </motion.span>
            )}
          </motion.p>
        </Box>
      </Container>
    </Section>
  );
};
