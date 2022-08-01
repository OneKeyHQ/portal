import { FC, ReactNode } from 'react';

import { detect } from 'detect-browser';

import { Flex } from '../../../../../../base';
import { DownloadButton } from '../../../DownloadButton';
import { Title } from '../../../Title';
import { useOneKeyDownloadData } from '../../../useOneKeyDownloadData';

import { BridgeLinuxDownloadButton } from './BridgeLinuxDownloadButton';

export interface BridgeContentProps {
  children?: ReactNode;
}

export const BridgeContent: FC<BridgeContentProps> = (props) => {
  const { children } = props;
  const {
    platforms: { bridgeWin, bridgeMac },
  } = useOneKeyDownloadData();
  const detectResult = detect();

  const buttonType = (systemType: string) =>
    detectResult?.os?.toLowerCase().includes(systemType)
      ? 'filled'
      : 'outlined';

  const normalButtons = [
    {
      text: bridgeMac.name,
      icon: bridgeMac.icon,
      infos: bridgeMac.description,
      url: bridgeMac.url,
      systemType: 'mac',
    },
    {
      text: bridgeWin.name,
      icon: bridgeWin.icon,
      infos: bridgeWin.description,
      url: bridgeWin.url,
      systemType: 'windows',
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

      <Flex xs={{ gap: 16 }}>
        {normalButtons.map((item) => (
          <DownloadButton
            key={item.text}
            icon={item.icon}
            text={item.text}
            url={item.url}
            information={item.infos}
            buttonType={buttonType(item.systemType)}
          />
        ))}

        <BridgeLinuxDownloadButton buttonType={buttonType('linux')} />
      </Flex>

      {children}
    </Flex>
  );
};
