import React, { FC } from 'react';

import { Divider } from '../../../../../../base/Divider';
import { Flex } from '../../../../../../base/Flex';
import { DownloadButton } from '../../../DownloadButton';
import { FAQ } from '../../../FAQ';
import { Title } from '../../../Title';
import { useOneKeyDownloadData } from '../../../useOneKeyDownloadData';

export interface BrowserContentProps {
  children?: React.ReactNode;
}

export const BrowserContent: FC<BrowserContentProps> = (props) => {
  const { children } = props;
  const {
    platforms: { chrome, edge, firefox },
    types: { browser },
  } = useOneKeyDownloadData();

  const buttons = [
    {
      text: chrome.name,
      icon: chrome.icon,
      url: chrome.url,
      infos: [],
    },
    {
      text: firefox.name,
      icon: firefox.icon,
      url: firefox.url,
      infos: [],
    },
    {
      text: edge.name,
      icon: edge.icon,
      url: edge.url,
      infos: [],
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
        <Title name={browser.pageTitle} />

        <Flex xs={{ gap: 16 }}>
          {buttons.map((item) => (
            <DownloadButton
              key={item.text}
              icon={item.icon}
              text={item.text}
              url={item.url}
              information={item.infos}
            />
          ))}
        </Flex>
      </Flex>

      <Divider />

      {edge.faq && (
        <FAQ title={edge.faq.title} questions={edge.faq.questions} />
      )}

      {children}
    </>
  );
};
