import { FC, ReactNode } from 'react';

import { useTranslation } from 'gatsby-plugin-react-i18next';

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
  const { t } = useTranslation();

  return (
    <Box
      xs={{
        borderRadius: 40,
        backgroundColor: '#92baa3',
        padding: '40px 24px',
      }}
      m={{ padding: '70px 77px' }}
      xl={{ padding: '70px 111px' }}
      xxl={{ padding: '70px 136px' }}
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
            l={{ ...theme.text.medium700 }}
          >
            {t('title__stay_in_touch')}
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
