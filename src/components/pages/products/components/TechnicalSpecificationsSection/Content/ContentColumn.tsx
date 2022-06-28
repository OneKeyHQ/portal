import { FC, ReactNode } from 'react';

import { Flex } from '../../../../../base/Flex';

export interface ContentColumnProps {
  children?: ReactNode;
}

export const ContentColumn: FC<ContentColumnProps> = (props) => {
  const { children } = props;

  return (
    <Flex xs={{ flexDirection: 'column', gap: 64, flex: 1 }}>{children}</Flex>
  );
};
