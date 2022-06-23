import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Divider, Flex } from '../../../../base';
import { useEIPs } from '../../useEIPs';
import { EIPContentItem } from '../EIPContentItem';

import { SuggestStatus } from './SuggestStatus';

export interface ListContentProps {
  children?: ReactNode;
}

export const ListContent: FC<ListContentProps> = (props) => {
  const { children } = props;
  const EIPsData = useEIPs();
  const theme = useTheme();

  const borderStyle = `1px solid ${theme.colors.test200}`;

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
      {EIPsData.suggestList.map((item) => (
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

      {children}
    </Box>
  );
};
