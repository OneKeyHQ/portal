import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';
import { StaticImage } from 'gatsby-plugin-image';

import { isBrowser } from '../../../../utils';
import { Box, Container, Flex, I18n, Span } from '../../../base';
import { BackgroundMask } from '../../../common';

export interface HeroProps {
  children?: ReactNode;
}

export const Hero: FC<HeroProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <Box
      xs={{
        height: '100vh',
        position: 'relative',
        backgroundColor: theme.colors.test100,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        overflow: 'hidden',
      }}
      l={{ borderRadius: 0 }}
    >
      <Box
        xs={{
          width: '100%',
          height: '100vh',
          position: 'absolute',
          top: 0,
          right: 0,
        }}
        l={{ width: '50%' }}
      >
        {isBrowser() && (
          <StaticImage
            css={{
              width: '100%',
              height: '100%',
            }}
            src="./images/hero.jpg"
            alt="background"
          />
        )}

        <BackgroundMask />
      </Box>

      <Container>
        <Flex
          xs={{
            paddingTop: 56,
            paddingBottom: 56,
            position: 'relative',
            zIndex: 1,
            height: '100vh',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            gap: 20,
          }}
          l={{
            justifyContent: 'center',
          }}
        >
          <Span
            xs={{
              ...theme.text.medium800,
              color: theme.colors.test500,
            }}
            xl={theme.text.medium900}
            xxl={theme.text.medium1000}
          >
            <I18n name="title__security_both_hard_and_soft" alwaysMultiLine />
          </Span>

          <Span xxl={theme.text.medium300}>
            <I18n name="title__security_both_hard_and_soft_desc" />
          </Span>
        </Flex>
      </Container>
      {children}
    </Box>
  );
};
