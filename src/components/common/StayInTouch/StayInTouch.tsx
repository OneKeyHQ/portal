import { FC, ReactNode } from 'react';

import { useTheme } from '../../../theme';
import { Flex } from '../../base';
import { Box, Span } from '../../base/Box';
import { MediaLinkList } from '../MediaLinkList';

import { EmailSubscribe } from './EmailSubscribe';

export interface StayInTouchProps {
  children?: ReactNode;
}

export const StayInTouch: FC<StayInTouchProps> = (props) => {
  const { children } = props;
  const theme = useTheme();
  const { size: themeSize } = theme;

  return (
    <Box
      xs={{
        borderRadius: 40,
        backgroundColor: '#92baa3',
        paddingTop: 40,
        paddingBottom: 40,
        paddingLeft: 24,
        paddingRight: 24,
      }}
      l={{
        paddingTop: 70,
        paddingBottom: 70,
        paddingLeft: themeSize.l.column + themeSize.l.gutter,
        paddingRight: themeSize.l.column + themeSize.l.gutter,
      }}
      xl={{
        paddingLeft: themeSize.xl.column + themeSize.xl.gutter,
        paddingRight: themeSize.xl.column + themeSize.xl.gutter,
      }}
      xxl={{
        paddingLeft: themeSize.xxl.column + themeSize.xxl.gutter,
        paddingRight: themeSize.xxl.column + themeSize.xxl.gutter,
      }}
    >
      <Flex
        xs={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: 40,
        }}
        m={{
          flexDirection: 'row',
        }}
      >
        <Flex
          css={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: 20,
          }}
        >
          <Span
            css={{ color: theme.colors.test500 }}
            xs={{ ...theme.text.medium600 }}
            m={{ ...theme.text.medium700 }}
            l={{ ...theme.text.medium800 }}
          >
            Stay in Touch
          </Span>

          <MediaLinkList color={theme.colors.test500} />
        </Flex>

        <Box css={{ flex: 1 }}>
          <EmailSubscribe />
        </Box>
      </Flex>

      {children}
    </Box>
  );
};
