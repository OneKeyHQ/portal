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
  const { children, name, subItems, path, ...otherProps } = props;
  const { hoverProps, isHovered } = useHover({
    timeout: 100,
  });
  const theme = useTheme();

  return (
    <Box
      xs={{
        position: 'relative',
      }}
    >
      <a href={path} target="_blank" rel="noreferrer">
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
        </Box>
      </a>

      {subItems && <HoverPanel isActive={isHovered} subItems={subItems} />}
    </Box>
  );
};
