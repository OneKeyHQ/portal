import { FC } from 'react';

import { Box, Ul } from '../../../base/Box';
import { NavigationDataItem } from '../useNavigationData';

import { MobileMenuItem } from './MobileMenuItem';

interface MobileMenuItemsProps {
  mobileMenus: NavigationDataItem[];
}

export const MobileMenuItems: FC<MobileMenuItemsProps> = (props) => {
  const { mobileMenus } = props;

  return (
    <Box
      xs={{
        paddingBottom: 28,
      }}
    >
      <Ul
        xs={{
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}
      >
        {mobileMenus.map((menuItem) => (
          <MobileMenuItem key={menuItem.name} menuItem={menuItem} />
        ))}
      </Ul>
    </Box>
  );
};
