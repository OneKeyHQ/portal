import { FC, ReactNode } from 'react';

import { Divider, Flex } from '../../../../../base';
import { DownloadButton } from '../../DownloadButton';
import { FAQ } from '../../FAQ';
import { Title } from '../../Title';
import { useOneKeyDownloadData } from '../../useOneKeyDownloadData';

import { ContentContainer } from './ContentContainer';

export interface AndroidContentProps {
  children?: ReactNode;
}

export const AndroidContent: FC<AndroidContentProps> = (props) => {
  const { children } = props;

  const {
    platforms: { ios, androidGooglePlay },
    types: { mobile },
  } = useOneKeyDownloadData();

  const buttons = [
    {
      text: ios.name,
      icon: ios.icon,
      url: ios.url,
      infos: ios.description.split('<br/>'),
    },
    {
      text: androidGooglePlay.name,
      icon: androidGooglePlay.icon,
      url: androidGooglePlay.url,
      infos: androidGooglePlay.description,
    },
  ];

  return (
    <ContentContainer>
      <Title text={mobile.pageTitle} />

      <Flex xs={{ gap: 16 }}>
        {buttons.map((item) => (
          <DownloadButton
            buttonSize="medium"
            key={item.text}
            icon={item.icon}
            text={item.text}
            url={item.url}
            information={item.infos}
          />
        ))}
      </Flex>

      <Divider />

      {ios.faq && <FAQ title={ios.faq.title} questions={ios.faq.questions} />}

      {children}
    </ContentContainer>
  );
};
