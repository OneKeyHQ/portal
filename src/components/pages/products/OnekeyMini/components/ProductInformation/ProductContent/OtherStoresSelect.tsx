import { FC, ReactNode } from 'react';

import { ChevronDownIcon, Flex } from '../../../../../../base';

export interface OtherStoresSelectProps {
  children?: ReactNode;
}

export const OtherStoresSelect: FC<OtherStoresSelectProps> = (props) => {
  const { children } = props;

  return (
    <Flex>
      Other Stores <ChevronDownIcon width={24} height={24} /> {children}
    </Flex>
  );
};
