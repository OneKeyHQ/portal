import { FC, ReactNode } from 'react';

import { Box, Flex } from '../../../../../base';
import { useProductCompareData } from '../useProductCompareData';

import { CompareItem } from './CompareItem';

export interface CompareProps {
  children?: ReactNode;
}

export const Compare: FC<CompareProps> = (props) => {
  const { children } = props;

  const data = useProductCompareData();

  return (
    <Box
      xs={{
        paddingTop: 48,
        paddingBottom: 120,
      }}
    >
      <Flex
        xs={{
          justifyContent: 'center',
          gap: 24,
        }}
      >
        {Object.values(data.items).map((item) => (
          <CompareItem {...item} />
        ))}
      </Flex>

      {children}
    </Box>
  );
};
