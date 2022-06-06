import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { isBrowser } from '../../../utils';
import { Box, Flex, LanguageIcon, Span } from '../../base';

export interface OpenBrowserBannerProps {
  children?: ReactNode;
}

export const OpenBrowserBanner: FC<OpenBrowserBannerProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  if (!isBrowser()) return null;

  const isWeChat = /micromessenger/i.test(window.navigator.userAgent);

  if (!isWeChat) return null;

  return (
    <Box
      xs={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        top: 0,
        right: 0,
        zIndex: 999999,
        background:
          'linear-gradient(180deg, rgba(215, 218, 220, 0.24) 0%, #E7ECEF 100%)',
      }}
    >
      <Flex xs={{ padding: 18, background: theme.colors.brandAlt400 }}>
        <LanguageIcon width={24} height={24} />
        <Span
          xs={{
            marginLeft: 8,
            ...theme.text.medium300,
          }}
        >
          Please open in your browser.
        </Span>
      </Flex>
      {children}
    </Box>
  );
};
