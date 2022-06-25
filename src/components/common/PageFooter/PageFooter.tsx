import { FC } from 'react';

import { useTheme } from '@emotion/react';

import { useMediaQuery } from '../../../hooks';
import { useTranslation } from '../../../i18n';
import { Box, Footer } from '../../base/Box';
import { Container } from '../../base/Container';
import { Flex } from '../../base/Flex';
import { MediaLinkList } from '../MediaLinkList';

import { Copyright } from './Copyright';
import { EmailSubscribe } from './EmailSubscribe';
import { Logo } from './Logo';
import { MenuList } from './MenuList';

export interface PageFooterProps {
  isShowEmailSubscribe?: boolean;
  isShowMediaLinks?: boolean;
}

export const PageFooter: FC<PageFooterProps> = (props) => {
  const { isShowEmailSubscribe = true, isShowMediaLinks = true } = props;
  const theme = useTheme();
  const media = useMediaQuery();
  const { t } = useTranslation();

  console.log(
    'footer__navigation__ethereum',
    t('footer__navigation__ethereum'),
  );

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
          xs={{ display: 'block' }}
          m={{ display: 'flex', justifyContent: 'space-between' }}
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
              m={{ padding: 0 }}
            >
              {media.medium && isShowMediaLinks && (
                <MediaLinkList color={theme.colors.white} />
              )}

              {media.medium && (
                <Box xs={{ paddingBottom: 46 }} l={{ paddingBottom: 0 }}>
                  <Copyright />
                </Box>
              )}
            </Flex>
          </Flex>

          <Box xs={{ maxWidth: 867, flex: 1 }}>
            {/* menu list */}
            <MenuList />

            {/* email */}
            {isShowEmailSubscribe && (
              <Box xs={{ paddingTop: 80, maxWidth: 480 }} l={{ maxWidth: 780 }}>
                <EmailSubscribe />
              </Box>
            )}
          </Box>

          {!media.medium && (
            <Box xs={{ paddingTop: 20, paddingBottom: 80 }}>
              {isShowMediaLinks && <MediaLinkList color={theme.colors.white} />}

              <Box xs={{ paddingTop: 8 }}>
                <Copyright />
              </Box>
            </Box>
          )}
        </Box>
      </Container>
    </Footer>
  );
};
