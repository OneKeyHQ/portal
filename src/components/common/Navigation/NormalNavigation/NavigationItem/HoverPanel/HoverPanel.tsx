import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { useHover } from '../../../../../../hooks';
import { Link, MenuItem } from '../../../../../base';
import { Box } from '../../../../../base/Box';
import { Flex } from '../../../../../base/Flex';
import { NavigationDataItem } from '../../../useNavigationData';

export interface HoverPanelProps {
  children?: ReactNode;
  subItems: NavigationDataItem['subItems'];
  isActive: boolean;
}

export const HoverPanel: FC<HoverPanelProps> = (props) => {
  const { children, isActive = false, subItems } = props;
  const { hoverProps, isHovered } = useHover({
    timeout: 50,
  });
  const theme = useTheme();

  return (
    <Box
      {...hoverProps}
      xs={{
        display: isActive || isHovered ? 'block' : 'none',
        transition: theme.transitions.allEaseOut,
        padding: 6,
        borderRadius: 12,
        boxShadow: theme.shadow.hover,
        position: 'absolute',
        top: '200%',
        left: '50%',
        transform: 'translate(-50%, 0)',
        backgroundColor: theme.colors.white,
      }}
    >
      <Flex
        xs={{
          flexDirection: 'column',
          gap: 8,
        }}
      >
        {subItems?.map((item) => (
          <Link key={item.name} to={item.path || ''}>
            <MenuItem>{item.name}</MenuItem>
          </Link>
        ))}
        {children}
      </Flex>
    </Box>
  );
};
