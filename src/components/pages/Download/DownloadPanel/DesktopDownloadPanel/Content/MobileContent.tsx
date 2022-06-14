import React, { ReactNode } from 'react';

import { Divider } from '../../../../../base/Divider';
import { Flex } from '../../../../../base/Flex';
import { AndroidIcon, AppStoreIcon } from '../../../../../base/Icon';
import { DownloadButton } from '../../DownloadButton';
import { FAQ } from '../../FAQ';
import { Title } from '../../Title';
import { useOneKeyDownloadData } from '../../useOneKeyDownloadData';

export interface MobileContentProps {
  children?: ReactNode;
}

export const MobileContent: React.FC<MobileContentProps> = (props) => {
  const { children } = props;
  const {
    platforms: { ios, androidGooglePlay },
    types: { mobile },
  } = useOneKeyDownloadData();

  const buttons = [
    {
      text: ios.name,
      icon: AppStoreIcon,
      infos: ios.description.split('<br/>'),
    },
    {
      text: androidGooglePlay.name,
      icon: AndroidIcon,
      infos: androidGooglePlay.description,
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
        <Title text={mobile.pageTitle} />

        <Flex xs={{ gap: 16 }}>
          {buttons.map((item) => (
            <DownloadButton
              key={item.text}
              icon={item.icon}
              text={item.text}
              information={item.infos}
            />
          ))}
        </Flex>
      </Flex>

      <Divider />

      {ios.faq && <FAQ title={ios.faq.title} questions={ios.faq.questions} />}

      {children}
    </>
  );
};
