import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box } from '../../../../base';

export interface ProgressProps {
  children?: ReactNode;
}

export const Progress: FC<ProgressProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <Box
      xs={{
        width: 1,
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.16)',
      }}
    >
      <Box
        xs={{
          width: '100%',
          height: 320,
          position: 'sticky',
          background: theme.colors.white,
          top: `calc(50% - ${320}px)`,
        }}
      />
      {children}
    </Box>
  );
};
