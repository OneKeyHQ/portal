import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { useHover } from '../../../../../hooks';
import { Box } from '../../../Box';
import { NavigationDataItem } from '../../useNavigationData';

import { HoverPanel } from './HoverPanel';

export interface NavigationItemProps extends NavigationDataItem {
  children?: ReactNode;
}

export const NavigationItem: FC<NavigationItemProps> = (props) => {
  const { children, name, subItems, ...otherProps } = props;
  const { hoverProps, isHovered } = useHover();
  const theme = useTheme();

  return (
    <Box
      xs={{
        position: 'relative',
      }}
    >
      <Box
        {...otherProps}
        {...hoverProps}
        xs={{
          ...theme.text.medium300,
          color: theme.background.test500,
          cursor: 'pointer',

          ':hover': {
            color: '#878888',
          },
        }}
      >
        {name}
        {children}
      </Box>

      {subItems && <HoverPanel isActive={isHovered} subItems={subItems} />}
    </Box>
  );
};
