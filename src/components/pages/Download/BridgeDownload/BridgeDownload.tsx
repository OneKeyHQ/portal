import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Flex, Span } from '../../../base';

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
          <Box xs={theme.text.medium700}>OneKey Bridge</Box>

          <Span
            xs={{
              ...theme.text.normal200,
              color: theme.colors.test300,
            }}
          >
            Enhances the transfer stability between the OneKey hardware wallet
            and the browser.
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
