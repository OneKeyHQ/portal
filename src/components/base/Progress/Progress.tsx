import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box } from '../Box';

export interface ProgressProps {
  children?: ReactNode;
  activeIndex: number;
  amount: number;
  containerColor?: string;
  activeColor?: string;
}

export const Progress: FC<ProgressProps> = (props) => {
  const {
    children,
    activeIndex = 0,
    amount = 0,
    containerColor,
    activeColor,
  } = props;
  const theme = useTheme();

  return (
    <Box
      xs={{
        overflow: 'hidden',
        label: 'progress',
        width: 175,
        height: 3,
        background: containerColor || theme.colors.white,
      }}
    >
      <Box
        xs={{
          transition: theme.transitions.allEaseOut,
          height: '100%',
          background: activeColor || theme.colors.gray900,
          width: `${((activeIndex + 1) / amount) * 100}%`,
          willChange: 'width',
        }}
      />

      {children}
    </Box>
  );
};
