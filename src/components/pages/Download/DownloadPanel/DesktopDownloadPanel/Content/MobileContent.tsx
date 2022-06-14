import React, { ReactNode } from 'react';

import { Divider } from '../../../../../base/Divider';
import { Flex } from '../../../../../base/Flex';
import { AndroidIcon, AppStoreIcon } from '../../../../../base/Icon';
import { DownloadButton } from '../../DownloadButton';
import { FAQ } from '../../FAQ';
import { Title } from '../../Title';

export interface MobileContentProps {
  children?: ReactNode;
}

const faq = {
  title: 'iOS FAQ',
  questions: [
    {
      text: 'How to register an account?',
    },
    {
      text: 'How to activate discover page?',
    },
  ],
};

const buttons = [
  {
    text: 'App Store',
    icon: AppStoreIcon,
    infos: ['v2.12.3, for iOS 13.0+', 'Not available on the Chinese App Store'],
  },
  {
    text: 'Android',
    icon: AndroidIcon,
    infos: ['v2.12.3, for Android 8.0+'],
  },
];

// Bring your <br /> crypto assets <br /> to mobile, too.
const title = ['Bring your', 'crypto assets', 'to mobile, too.'];

export const MobileContent: React.FC<MobileContentProps> = (props) => {
  const { children } = props;

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
        <Title text={title} />

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

      {faq && <FAQ title={faq.title} questions={faq.questions} />}

      {children}
    </>
  );
};
