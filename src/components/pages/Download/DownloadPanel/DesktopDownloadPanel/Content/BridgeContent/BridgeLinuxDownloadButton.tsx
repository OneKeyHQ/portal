import { FC, ReactNode } from 'react';

import {
  Box,
  Button,
  ButtonProps,
  ChevronDownIcon,
  Link,
  LinuxIcon,
  MenuItem,
  MenuItems,
  useMenu,
} from '../../../../../../base';
import { InfoText } from '../../../DownloadButton/InfoText';
import { useOneKeyDownloadData } from '../../../useOneKeyDownloadData';

export interface BridgeLinuxDownloadButtonProps {
  children?: ReactNode;
  buttonType: ButtonProps['variant'];
}

export const BridgeLinuxDownloadButton: FC<BridgeLinuxDownloadButtonProps> = (
  props,
) => {
  const { children, buttonType } = props;
  const menu = useMenu();

  const {
    platforms: {
      bridgeLinux64Deb,
      bridgeLinux64Rpm,
      bridgeLinux32Deb,
      bridgeLinux32Rpm,
    },
  } = useOneKeyDownloadData();

  const menus = [
    { name: bridgeLinux64Deb.name, url: bridgeLinux64Deb.url },
    { name: bridgeLinux64Rpm.name, url: bridgeLinux64Rpm.url },
    { name: bridgeLinux32Deb.name, url: bridgeLinux32Deb.url },
    { name: bridgeLinux32Rpm.name, url: bridgeLinux32Rpm.url },
  ];

  return (
    <Box xs={{ flex: 1, maxWidth: 220, position: 'relative', zIndex: 1 }}>
      <Box>
        <Button
          {...menu.menuTriggerProps}
          fillWidth
          variant={buttonType}
          size="large"
          leftIcon={<LinuxIcon width={24} height={24} />}
          rightIcon={<ChevronDownIcon width={24} height={24} />}
        >
          Linux
        </Button>

        <MenuItems {...menu.menuItemsProps}>
          {menus.map((item) => (
            <Link key={item.name} to={item.url}>
              <MenuItem>{item.name}</MenuItem>
            </Link>
          ))}
        </MenuItems>
      </Box>

      <Box xs={{ textAlign: 'center' }}>
        <InfoText>{bridgeLinux64Deb.description}</InfoText>
      </Box>

      {children}
    </Box>
  );
};
