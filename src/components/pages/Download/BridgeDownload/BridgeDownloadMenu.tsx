import { FC, ReactNode, useState } from 'react';

import { useTheme } from '@emotion/react';

import { useOneKeyVersion } from '../../../../data';
import {
  Box,
  Button,
  ChevronDownIcon,
  Link,
  MenuItem,
  MenuItems,
} from '../../../base';

export interface BridgeDownloadMenuProps {
  children?: ReactNode;
}

export const BridgeDownloadMenu: FC<BridgeDownloadMenuProps> = (props) => {
  const { children } = props;
  const theme = useTheme();
  const [isHoverPanelVisible, setIsHoverPanelVisible] = useState(false);

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
        onClick={() => setIsHoverPanelVisible(!isHoverPanelVisible)}
        variant="outlined"
        rightIcon={<ChevronDownIcon width={24} height={24} />}
      >
        Download
      </Button>

      <MenuItems
        onClickOutside={() => setIsHoverPanelVisible(false)}
        isActive={isHoverPanelVisible}
      >
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
          <Link to={option.url} key={option.url}>
            <MenuItem>{option.name}</MenuItem>
          </Link>
        ))}
      </MenuItems>

      {children}
    </Box>
  );
};
