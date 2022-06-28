import { FC, ReactNode } from 'react';

import { Flex } from '../../../../../base';

export interface ContentItemProps {
  children?: ReactNode;
}

export const ContentItem: FC<ContentItemProps> = (props) => {
  const { children } = props;

  return <Flex xs={{ flexDirection: 'column', gap: 16 }}>{children}</Flex>;
};
