import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Span } from '../../../../../base/Box';
import { Divider } from '../../../../../base/Divider';
import { Flex } from '../../../../../base/Flex';
import { AndroidIcon, AppStoreIcon } from '../../../../../base/Icon';
import { DownloadButton } from '../../DownloadButton';
import { FAQ } from '../../FAQ';

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

export const MobileContent: FC<MobileContentProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

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
        <Flex xs={{ flexDirection: 'column' }}>
          {title.map((item) => (
            <Span
              key={item}
              xs={{
                ...theme.text.medium900,
              }}
            >
              {item}
            </Span>
          ))}
        </Flex>

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
