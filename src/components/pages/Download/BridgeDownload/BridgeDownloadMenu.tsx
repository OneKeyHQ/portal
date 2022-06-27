import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { useOneKeyVersion } from '../../../../data';
import {
  Box,
  Button,
  ChevronDownIcon,
  Link,
  MenuItem,
  MenuItems,
  useMenu,
} from '../../../base';

export interface BridgeDownloadMenuProps {
  children?: ReactNode;
}

export const BridgeDownloadMenu: FC<BridgeDownloadMenuProps> = (props) => {
  const { children } = props;
  const theme = useTheme();
  const menu = useMenu();

  const { formattedData } = useOneKeyVersion();
  const { bridge } = formattedData;

  const options = [
    bridge.mac,
    bridge.win,
    bridge.linux32Deb,
    bridge.linux64Deb,
    bridge.linux32Rpm,
    bridge.linux64Rpm,
  ];

  return (
    <Box xs={{ position: 'relative' }}>
      <Button
        {...menu.menuTriggerProps}
        variant="outlined"
        rightIcon={<ChevronDownIcon width={24} height={24} />}
      >
        Download
      </Button>

      <MenuItems {...menu.menuItemsProps}>
        <Box
          xs={{
            paddingBottom: 6,
            textAlign: 'center',
            color: theme.colors.test300,
            ...theme.text.normal100,
          }}
        >
          {bridge.version}
        </Box>

        {options.map((option) => (
          <Link to={option.url} key={option.name}>
            <MenuItem>{option.name}</MenuItem>
          </Link>
        ))}
      </MenuItems>

      {children}
    </Box>
  );
};
