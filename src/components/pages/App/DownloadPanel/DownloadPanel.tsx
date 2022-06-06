import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Container, Flex } from '../../../base';

import { Background } from './Background';
import { Content } from './Content';
import { Tabs } from './Tabs';

export interface DownloadPanelProps {
  children?: ReactNode;
}

export const DownloadPanel: FC<DownloadPanelProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <Box
      xs={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: 720,
        maxHeight: 960,
        backgroundColor: theme.colors.white,
      }}
    >
      <Box css={{ flex: 1, position: 'relative' }}>
        <Background />

        <Container xs={{ height: '100%' }}>
          <Flex
            xs={{
              width: '50%',
              alignItems: 'flex-end',
              height: '100%',
              paddingBottom: 40,
              paddingTop: 140,
              paddingRight: 64,
              paddingLeft: 0,
            }}
          >
            <Content />
          </Flex>
        </Container>
      </Box>

      <Tabs />

      {children}
    </Box>
  );
};
