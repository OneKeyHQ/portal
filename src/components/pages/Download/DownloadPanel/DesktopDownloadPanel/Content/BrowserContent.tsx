import React, { FC } from 'react';

import { ChromeIcon, EdgeIcon, FirefoxIcon } from '../../../../../base';
import { Divider } from '../../../../../base/Divider';
import { Flex } from '../../../../../base/Flex';
import { DownloadButton } from '../../DownloadButton';
import { FAQ } from '../../FAQ';
import { Title } from '../../Title';

export interface BrowserContentProps {
  children?: React.ReactNode;
}

const faq = {
  title: '',
  questions: [
    {
      text: "Edge version hasn't support Hardware yet.",
    },
  ],
};

const buttons = [
  {
    text: 'Chrome',
    icon: ChromeIcon,
    infos: [],
  },
  {
    text: 'Firefox',
    icon: FirefoxIcon,
    infos: [],
  },
  {
    text: 'Edge',
    icon: EdgeIcon,
    infos: [],
  },
];

const title = ['Download', 'OneKey.'];

export const BrowserContent: FC<BrowserContentProps> = (props) => {
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
