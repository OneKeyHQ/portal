import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';
import { StaticImage } from 'gatsby-plugin-image';

import { isBrowser } from '../../../../utils';
import { Box, Container, Flex, I18n, Span } from '../../../base';
import { BackgroundMask, ContactUsButton } from '../../../common';

export interface HeroProps {
  children?: ReactNode;
}

export const Hero: FC<HeroProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <Box xs={{ position: 'relative' }}>
      {isBrowser() && (
        <Box
          xs={{
            height: '100%',
            width: '100%',
            position: 'absolute',
            right: 0,
            borderRadius: '0 0 40px 40px',
            overflow: 'hidden',
          }}
          l={{ width: '50%', borderRadius: 0 }}
        >
          <StaticImage
            style={{
              height: '100%',
              width: '100%',
            }}
            src="./images/CoBrandedPartnershipHero.jpg"
            alt="hero"
          />

          <BackgroundMask />
        </Box>
      )}

      <Container>
        <Flex
          xs={{
            paddingTop: 80,
            flexDirection: 'column',
            justifyContent: 'flex-end',
            height: '80vh',
            minHeight: 600,
            maxHeight: 1000,
            gap: 20,
            paddingBottom: 30,
          }}
          m={{ minHeight: 700, paddingBottom: 60 }}
          l={{ flexDirection: 'row', justifyContent: 'space-between' }}
          xl={{ minHeight: 800 }}
        >
          <Flex
            xs={{ flexDirection: 'column', gap: 10, zIndex: 1 }}
            m={{ justifyContent: 'center' }}
            l={{ textAlign: 'left', gap: 20 }}
          >
            <Span
              xs={{
                ...theme.text.medium700,
                color: theme.colors.test500,
              }}
              m={theme.text.medium800}
              l={theme.text.medium900}
              xl={theme.text.medium1000}
            >
              <I18n name="title__co_branded_partnership" alwaysMultiLine />
            </Span>

            <Span xs={theme.text.normal300} l={{ maxWidth: '60%' }}>
              <I18n name="title__co_branded_partnership_desc" />
            </Span>

            <Box xs={{ marginRight: 0 }} m={{ marginRight: 'auto' }}>
              <ContactUsButton
                buttonOverride={{
                  fillWidth: true,
                }}
              />
            </Box>
          </Flex>
        </Flex>
      </Container>

      {children}
    </Box>
  );
};
