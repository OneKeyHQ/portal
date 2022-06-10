import { FC, ReactNode } from 'react';

import { Box, Flex, StarHalfIcon, StarIcon } from '../../../../../base';

export interface ReviewProps {
  children?: ReactNode;
}

export const Review: FC<ReviewProps> = (props) => {
  const { children } = props;

  return (
    <Box>
      <Flex>
        <StarIcon width={24} height={24} />
        <StarIcon width={24} height={24} />
        <StarIcon width={24} height={24} />
        <StarIcon width={24} height={24} />
        <StarHalfIcon width={24} height={24} />
      </Flex>
      {children}
    </Box>
  );
};
