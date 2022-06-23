import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { useHover } from '../../../../../../../hooks';
import { Box, Flex, Link, MenuItem } from '../../../../../../base';

export interface HoverPanelProps {
  children?: ReactNode;
  subItems: {
    name: string;
    url: string;
  }[];
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
        boxShadow:
          '0px 0px 1px rgba(0, 0, 0, 0.08), 0px 8px 12px rgba(0, 0, 0, 0.08)',
        position: 'absolute',
        left: '50%',
        width: '100%',
        top: 80,
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
          <Link key={item.name} to={item.url}>
            <MenuItem>{item.name}</MenuItem>
          </Link>
        ))}
        {children}
      </Flex>
    </Box>
  );
};
