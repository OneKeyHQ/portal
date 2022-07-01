import React from 'react';

import { useTheme } from '@emotion/react';
import { motion } from 'framer-motion';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { Box, Container, I18n, Section } from '../../../../base';

import { itemVariants, variants } from './animationVariants';
import { OneKey } from './OneKey';

export const Slogan: React.FC = () => {
  const theme = useTheme();
  const { t } = useTranslation();

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
          css={{
            color: theme.colors.test500,
          }}
          xs={theme.text.medium700}
          m={{
            textAlign: 'center',
            ...theme.text.medium900,
          }}
          l={theme.text.medium900}
          xl={theme.text.medium1000}
          xxl={theme.text.medium1100}
        >
          <motion.p
            viewport={{ once: true, amount: 'all' }}
            variants={variants}
            whileInView="open"
            initial="closed"
          >
            <motion.span variants={itemVariants}>
              <OneKey />{' '}
              <I18n
                singleLine={['xs', 's']}
                multiLine={['m', 'l', 'xl', 'xxl']}
                text={t('title__home_slogan').replace('OneKey', '')}
              />
            </motion.span>
          </motion.p>
        </Box>
      </Container>
    </Section>
  );
};
