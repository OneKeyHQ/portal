import { FC, ReactNode } from 'react';

import { Box } from '../../../../base';

export interface ListContentProps {
  children?: ReactNode;
}

export const ListContent: FC<ListContentProps> = (props) => {
  const { children } = props;

  return <Box>{children}</Box>;
};
