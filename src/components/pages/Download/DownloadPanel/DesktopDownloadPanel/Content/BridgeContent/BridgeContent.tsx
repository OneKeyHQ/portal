import { FC, ReactNode } from 'react';

import { Flex } from '../../../../../../base';
import { Title } from '../../../Title';

export interface BridgeContentProps {
  children?: ReactNode;
}

export const BridgeContent: FC<BridgeContentProps> = (props) => {
  const { children } = props;

  const normalButtons = [
    {
      text: win.name,
      icon: win.icon,
      infos: win.description,
      url: win.url,
      systemType: 'windows',
    },
    {
      text: linux.name,
      icon: linux.icon,
      infos: linux.description,
      url: linux.url,
      systemType: 'linux',
    },
  ];

  return (
    <Flex
      xs={{
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 32,
      }}
    >
      <Title name="title__onekey_bridge_desc" />

      {children}
    </Flex>
  );
};
