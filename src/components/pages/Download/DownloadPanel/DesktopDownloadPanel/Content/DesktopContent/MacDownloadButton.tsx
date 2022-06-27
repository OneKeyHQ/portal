import { FC, ReactNode } from 'react';

import {
  AppleIcon,
  Box,
  Button,
  ButtonProps,
  ChevronDownIcon,
  Link,
  MenuItem,
  MenuItems,
  useMenu,
} from '../../../../../../base';
import { InfoText } from '../../../DownloadButton/InfoText';
import { useOneKeyDownloadData } from '../../../useOneKeyDownloadData';

export interface MacDownloadButtonProps {
  children?: ReactNode;
  buttonType: ButtonProps['variant'];
}

export const MacDownloadButton: FC<MacDownloadButtonProps> = (props) => {
  const { children, buttonType } = props;
  const menu = useMenu();

  const {
    platforms: { macIntel, macSilicon },
  } = useOneKeyDownloadData();

  const menus = [
    { name: macIntel.name, url: macIntel.url },
    { name: macSilicon.name, url: macSilicon.url },
  ];

  return (
    <Box xs={{ flex: 1, maxWidth: 220, position: 'relative' }}>
      <Box>
        <Button
          {...menu.menuTriggerProps}
          fillWidth
          variant={buttonType}
          size="large"
          leftIcon={<AppleIcon width={24} height={24} />}
          rightIcon={<ChevronDownIcon width={24} height={24} />}
        >
          macOS
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
        <InfoText>{macIntel.description}</InfoText>
      </Box>

      {children}
    </Box>
  );
};
