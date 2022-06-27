import React, { ReactNode } from 'react';

import { detect } from 'detect-browser';

import { Divider } from '../../../../../base/Divider';
import { Flex } from '../../../../../base/Flex';
import { DownloadButton } from '../../DownloadButton';
import { FAQ } from '../../FAQ';
import { Title } from '../../Title';
import { useOneKeyDownloadData } from '../../useOneKeyDownloadData';

export interface DesktopContentProps {
  children?: ReactNode;
}

export const DesktopContent: React.FC<DesktopContentProps> = (props) => {
  const { children } = props;
  const detectResult = detect();
  const {
    platforms: { macSilicon, win, linux },
    types: { desktop },
  } = useOneKeyDownloadData();

  const buttons = [
    {
      text: macSilicon.name,
      icon: macSilicon.icon,
      infos: macSilicon.description,
      url: macSilicon.url,
      systemType: 'mac',
    },
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
    <>
      <Flex
        xs={{
          flex: 1,
          gap: 32,
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Title text={desktop.pageTitle} />

        <Flex xs={{ gap: 16 }}>
          {buttons.map((item) => (
            <DownloadButton
              key={item.text}
              icon={item.icon}
              text={item.text}
              url={item.url}
              information={item.infos}
              buttonType={
                detectResult?.os?.toLowerCase().includes(item.systemType)
                  ? 'filled'
                  : 'outlined'
              }
            />
          ))}
        </Flex>
      </Flex>

      <Divider />

      {desktop.faq && (
        <FAQ title={desktop.faq.title} questions={desktop.faq.questions} />
      )}

      {children}
    </>
  );
};
