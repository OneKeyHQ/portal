import React, { ReactNode } from 'react';

import { Divider } from '../../../../../../base/Divider';
import { Flex } from '../../../../../../base/Flex';
import { DownloadButton } from '../../../DownloadButton';
import { FAQ } from '../../../FAQ';
import { Title } from '../../../Title';
import { useOneKeyDownloadData } from '../../../useOneKeyDownloadData';

import { AndroidDownloadButton } from './AndroidDownloadButton';

export interface MobileContentProps {
  children?: ReactNode;
}

export const MobileContent: React.FC<MobileContentProps> = (props) => {
  const { children } = props;
  const {
    platforms: { ios },
    types: { mobile },
  } = useOneKeyDownloadData();

  return (
    <>
      <Flex
        xs={{
          flex: 1,
          gap: 32,
          flexDirection: 'column',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <Title text={mobile.pageTitle} />

        <Flex xs={{ gap: 16 }}>
          <DownloadButton
            icon={ios.icon}
            text={ios.name}
            url={ios.url}
            information={ios.description}
          />

          <AndroidDownloadButton />
        </Flex>
      </Flex>

      <Divider />

      {ios.faq && <FAQ title={ios.faq.title} questions={ios.faq.questions} />}

      {children}
    </>
  );
};
