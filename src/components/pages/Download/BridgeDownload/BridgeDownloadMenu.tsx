import { FC, ReactNode } from 'react';

import { Menu } from '@headlessui/react';

import { useOneKeyVersion } from '../../../../data';
import { Box } from '../../../base';

export interface BridgeDownloadMenuProps {
  children?: ReactNode;
}

export const BridgeDownloadMenu: FC<BridgeDownloadMenuProps> = (props) => {
  const { children } = props;

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
    <Menu>
      <Menu.Button<'button'>>More</Menu.Button>
      <Menu.Items<'div'>>
        <Box>{bridge.version}</Box>
        {options.map((option) => (
          <Menu.Item<'div'> key={option.url}>
            <a href={option.url}>{option.name}</a>
          </Menu.Item>
        ))}
      </Menu.Items>

      {children}
    </Menu>
  );
};
