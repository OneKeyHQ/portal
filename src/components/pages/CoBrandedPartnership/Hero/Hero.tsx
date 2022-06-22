import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';
import { StaticImage } from 'gatsby-plugin-image';

import { isBrowser } from '../../../../utils';
import { Box, Container, Flex, Span } from '../../../base';
import {
  BackgroundMask,
  ContactUsButton,
  MultilineText,
} from '../../../common';
import { useCoBrandedPartnership } from '../useCoBrandedPartnership';

export interface HeroProps {
  children?: ReactNode;
}

export const Hero: FC<HeroProps> = (props) => {
  const { children } = props;
  const theme = useTheme();
  const coBrandedPartnership = useCoBrandedPartnership();

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
              xs={theme.text.medium700}
              m={theme.text.medium800}
              l={theme.text.medium900}
              xl={theme.text.medium1000}
            >
              <MultilineText text={coBrandedPartnership.hero.title} />
            </Span>

            <Span xs={theme.text.normal300}>
              {coBrandedPartnership.hero.subtitle}
            </Span>

            <ContactUsButton />
          </Flex>
        </Flex>
      </Container>

      {children}
    </Box>
  );
};
