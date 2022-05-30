import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box } from '../../../base';

export interface DownloadPanelProps {
  children?: ReactNode;
}

export const DownloadPanel: FC<DownloadPanelProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <Box
      xs={{
        height: '100vh',
        minHeight: 720,
        maxHeight: 960,
        backgroundColor: theme.colors.white,
      }}
    >
      {children}
    </Box>
  );
};
