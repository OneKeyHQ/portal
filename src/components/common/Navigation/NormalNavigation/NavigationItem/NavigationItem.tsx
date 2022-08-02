/* eslint-disable no-nested-ternary */
import { FC, ReactNode, createElement } from 'react';

import { useTheme } from '@emotion/react';
import { createPortal } from 'react-dom';

import { useHover } from '../../../../../hooks';
import { isBrowser } from '../../../../../utils';
import { MenuItem, MenuItems } from '../../../../base';
import { Box } from '../../../../base/Box';
import { Link } from '../../../../base/Link';
import { NavigationDataItem } from '../../useNavigationData';
import { useCurrentActiveMenuItem } from '../atom';

export type PanelComponentProps = {
  isActive: boolean;
  subItems: NavigationDataItem['subItems'];
};

export interface NavigationItemProps extends NavigationDataItem {
  children?: ReactNode;
  panelComponent?: FC<PanelComponentProps>;
  itemKey: string;
}

export const NavigationItem: FC<NavigationItemProps> = (props) => {
  const { name, subItems, path, itemKey, panelComponent, ...otherProps } =
    props;
  const [, setCurrentActiveMenuItem] = useCurrentActiveMenuItem();
  const { hoverProps, isHovered } = useHover({
    timeout: panelComponent ? 200 : 50,
    onHoverStart: () => {
      setCurrentActiveMenuItem(itemKey);
    },
  });
  const theme = useTheme();

  const contentNode = (
    <Box
      {...hoverProps}
      {...otherProps}
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

  const slot = isBrowser()
    ? document.getElementById('navigationSlot')
    : undefined;

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
      {/* special panel */}
      {panelComponent &&
        slot &&
        createPortal(
          createElement(panelComponent, {
            isActive: isHovered,
            subItems,
          }),
          slot,
        )}
    </Box>
  );
};
