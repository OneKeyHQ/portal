import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Flex, I18n, Span } from '../../../base';

import { BridgeDownloadMenu } from './BridgeDownloadMenu';

export interface BridgeDownloadProps {
  children?: ReactNode;
}

export const BridgeDownload: FC<BridgeDownloadProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <Box
      xs={{
        paddingTop: 32,
        paddingBottom: 32,
        paddingLeft: 64,
        paddingRight: 64,
        background: theme.colors.test100,
        borderRadius: 40,
      }}
    >
      <Flex xs={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <Box
            xs={{
              ...theme.text.medium700,
              color: theme.colors.test500,
            }}
          >
            <I18n name="title__onekey_bridge" />
          </Box>

          <Span
            xs={{
              ...theme.text.normal200,
              color: theme.colors.test300,
            }}
          >
            <I18n name="title__onekey_bridge_desc" />
          </Span>
        </Box>

        <Box>
          <BridgeDownloadMenu />
        </Box>
      </Flex>

      {children}
    </Box>
  );
};
