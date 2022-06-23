import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Divider, Flex } from '../../../../base';
import { SuggestListItem } from '../../suggestList';
import { useEIPs } from '../../useEIPs';
import { EIPContentItem } from '../EIPContentItem';
import { SeeMore } from '../SeeMore';
import { useSeeMore } from '../useSeeMore';

import { SuggestStatus } from './SuggestStatus';

export interface ListContentProps {
  children?: ReactNode;
}

export const ListContent: FC<ListContentProps> = (props) => {
  const { children } = props;
  const EIPsData = useEIPs();
  const theme = useTheme();

  const borderStyle = `1px solid ${theme.colors.test200}`;

  const { buttonProps, list, hasMore } = useSeeMore<SuggestListItem>({
    list: EIPsData.suggestList,
    limit: 5,
  });

  return (
    <Box
      xs={{
        background: theme.colors.white,
        borderTop: borderStyle,
        borderBottom: borderStyle,

        paddingTop: 32,
        paddingBottom: 32,
      }}
    >
      {list.map((item) => (
        <Box key={item.id}>
          <Flex
            xs={{
              flexDirection: 'column',
              gap: 16,
              paddingLeft: 24,
              paddingRight: 24,
            }}
          >
            <EIPContentItem {...item} />

            <SuggestStatus isSupported={item.supports.mobileApp}>
              Mobile App
            </SuggestStatus>

            <SuggestStatus isSupported={item.supports.hardwareWallet}>
              Hardware Wallet
            </SuggestStatus>
          </Flex>

          <Box xs={{ paddingTop: 32, paddingBottom: 32 }}>
            <Divider color={theme.colors.test200} />
          </Box>
        </Box>
      ))}

      {hasMore && (
        <Flex
          xs={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <SeeMore {...buttonProps} />
        </Flex>
      )}

      {children}
    </Box>
  );
};
