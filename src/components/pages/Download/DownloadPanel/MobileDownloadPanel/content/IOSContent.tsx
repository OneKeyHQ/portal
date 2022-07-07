import { FC, ReactNode } from 'react';

import { Divider, Flex } from '../../../../../base';
import { DownloadButton } from '../../DownloadButton';
import { FAQ } from '../../FAQ';
import { Title } from '../../Title';
import { useOneKeyDownloadData } from '../../useOneKeyDownloadData';

import { ContentContainer } from './ContentContainer';

export interface IOSContentProps {
  children?: ReactNode;
}

export const IOSContent: FC<IOSContentProps> = (props) => {
  const { children } = props;

  const {
    platforms: { ios, web },
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
      text: web.name,
      icon: web.icon,
      url: web.url,
      infos: web.description,
    },
  ];

  return (
    <ContentContainer>
      <Title name={mobile.pageTitle} />

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
