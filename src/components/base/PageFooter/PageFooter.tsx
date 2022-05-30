import { FC } from 'react';

import { useTheme } from '@emotion/react';

import { useMediaQuery } from '../../../hooks';
import { Box, Footer } from '../Box';
import { Container } from '../Container';
import { Flex } from '../Flex';

import { Copyright } from './Copyright';
import { EmailSubscribe } from './EmailSubscribe';
import { Logo } from './Logo';
import { MediaLinkList } from './MediaLinkList';
import { MenuList } from './MenuList';

export interface PageFooterProps {
  isShowEmailSubscribe?: boolean;
  isShowMediaLinks?: boolean;
}

export const PageFooter: FC<PageFooterProps> = (props) => {
  const { isShowEmailSubscribe = true, isShowMediaLinks = false } = props;
  const theme = useTheme();
  const media = useMediaQuery();

  return (
    <Footer
      xs={{
        backgroundColor: theme.background.test500,
        borderTopLeftRadius: 64,
        borderTopRightRadius: 64,
      }}
      m={{
        paddingTop: 88,
        paddingBottom: 138,
      }}
    >
      <Container>
        <Box
          xs={{
            display: 'block',
          }}
          m={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Flex
            m={{ justifyContent: 'space-between', flexDirection: 'column' }}
          >
            {/* Logo */}
            <Logo />

            <Flex
              xs={{
                paddingTop: 20,
                paddingBottom: 80,
                flexDirection: 'column',
                gap: 32,
              }}
              m={{
                padding: 0,
              }}
            >
              {media.medium && isShowMediaLinks && <MediaLinkList />}

              {/* Copyright */}
              <Copyright />
            </Flex>
          </Flex>

          <Box
            xs={{
              maxWidth: 867,
              flex: 1,
            }}
          >
            {/* menu list */}
            <MenuList />

            {/* email */}
            {isShowEmailSubscribe && (
              <Box xs={{ paddingTop: 80 }}>
                <EmailSubscribe />
              </Box>
            )}
          </Box>

          {!media.medium && <MediaLinkList />}
        </Box>
      </Container>
    </Footer>
  );
};
