import { FC, ReactNode } from 'react';

import { Flex } from '../../../../../base';

export interface ContentItemDescriptionsProps {
  children?: ReactNode;
}

export const ContentItemDescriptions: FC<ContentItemDescriptionsProps> = (
  props,
) => {
  const { children } = props;

  return (
    <Flex
      xs={{
        flexDirection: 'column',
      }}
    >
      {children}
    </Flex>
  );
};
