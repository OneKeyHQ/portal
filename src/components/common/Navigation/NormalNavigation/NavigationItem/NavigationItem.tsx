/* eslint-disable no-nested-ternary */
import { FC, ReactNode, createElement } from 'react';

import { useTheme } from '@emotion/react';

import { useHover } from '../../../../../hooks';
import { MenuItem, MenuItems } from '../../../../base';
import { Box } from '../../../../base/Box';
import { Link } from '../../../../base/Link';
import { NavigationDataItem } from '../../useNavigationData';

export interface NavigationItemProps extends NavigationDataItem {
  children?: ReactNode;
  panelComponent?: FC<{
    isActive: boolean;
    subItems: NavigationDataItem['subItems'];
  }>;
}

export const NavigationItem: FC<NavigationItemProps> = (props) => {
  const { name, subItems, path, panelComponent, ...otherProps } = props;
  const { hoverProps, isHovered } = useHover({
    timeout: 100,
  });
  const theme = useTheme();

  const contentNode = (
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
  );

  return (
    <Box xs={{ position: 'relative' }}>
      {/* only a link */}
      {path && <Link to={path}>{contentNode}</Link>}
      {!path && contentNode}

      {/* sub */}
      {!panelComponent && subItems && (
        <MenuItems isActive={isHovered}>
          {subItems.map((item) => (
            <Link key={item.name} to={item.path || ''}>
              <MenuItem>{item.name}</MenuItem>
            </Link>
          ))}
        </MenuItems>
      )}
      {panelComponent &&
        createElement(panelComponent, { isActive: isHovered, subItems })}
    </Box>
  );
};
