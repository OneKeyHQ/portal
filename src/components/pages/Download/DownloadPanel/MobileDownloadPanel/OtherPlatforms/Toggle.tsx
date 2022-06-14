import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { AddIcon, Box } from '../../../../../base';

export interface ToggleProps {
  children?: ReactNode;
  isExpanded: boolean;
}

export const Toggle: FC<ToggleProps> = (props) => {
  const { children, isExpanded = false } = props;
  const theme = useTheme();

  return (
    <Box
      xs={{
        cursor: 'pointer',
        willChange: 'opacity, transform',
        transition: theme.transitions.allEaseOut,
        transform: isExpanded ? 'rotate(45deg)' : 'rotate(0deg)',
        ':hover': {
          opacity: 0.6,
        },
        ':active': {
          transform: 'scale(0.9)',
        },
      }}
    >
      <AddIcon width={24} height={24} />
      {children}
    </Box>
  );
};
