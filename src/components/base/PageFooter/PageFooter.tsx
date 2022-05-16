import { FC } from 'react';

import { useTheme } from '@emotion/react';

import { useMediaQuery } from '../../../hooks';
import { Box, Footer } from '../Box';
import { Container } from '../Container';

import { EmailSubscribe } from './EmailSubscribe';
import { Logo } from './Logo';
import { MediaLinkList } from './MediaLinkList';
import { MenuList } from './MenuList';

export const PageFooter: FC = () => {
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
          <Box
            m={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'column',
            }}
          >
            {/* Logo */}
            <Logo />

            {media.medium && <MediaLinkList />}
          </Box>

          <Box>
            {/* menu list */}
            <MenuList />

            {/* email */}
            <EmailSubscribe />
          </Box>

          {!media.medium && <MediaLinkList />}
        </Box>
      </Container>
    </Footer>
  );
};
