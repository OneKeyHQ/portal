import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import {
  AndroidIcon,
  AppStoreIcon,
  Container,
  Divider,
  Flex,
  Span,
} from '../../../../../base';
import { DownloadButton } from '../../DownloadButton';
import { FAQ } from '../../FAQ';

export interface ContentProps {
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

export const Content: FC<ContentProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <Container xs={{ height: '100%' }}>
      <Flex
        xs={{
          height: '100%',
          width: '50%',
          paddingBottom: 40,
          paddingTop: 140,
          paddingRight: 64,
          paddingLeft: 0,
          position: 'relative',
          zIndex: 1,
          flexDirection: 'column',
          gap: 16,
        }}
      >
        <Flex
          xs={{
            flex: 1,
            gap: 32,
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Span xs={{ ...theme.text.medium900 }}>
            Bring your <br /> crypto assets <br /> to mobile, too.
          </Span>

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
      </Flex>

      {children}
    </Container>
  );
};
