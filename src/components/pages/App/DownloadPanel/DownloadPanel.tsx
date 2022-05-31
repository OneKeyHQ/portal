import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { AppleIcon, Box, Container } from '../../../base';

import { Background } from './Background';

export interface DownloadPanelProps {
  children?: ReactNode;
}

export const DownloadPanel: FC<DownloadPanelProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <Box
      xs={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: 720,
        maxHeight: 960,
        backgroundColor: theme.colors.white,
      }}
    >
      <Background />

      <Container>
        <AppleIcon width={20} />
      </Container>

      {children}
    </Box>
  );
};
