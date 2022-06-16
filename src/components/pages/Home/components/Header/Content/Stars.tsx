import { FC, ReactNode } from 'react';

import { Flex } from '../../../../../base/Flex';
import { StarHalfIcon, StarIcon } from '../../../../../base/Icon';

export interface StarsProps {
  children?: ReactNode;
}

export const Stars: FC<StarsProps> = (props) => {
  const { children } = props;
  const sizeProps = {
    width: 16,
    height: 16,
  };

  return (
    <Flex>
      <StarIcon {...sizeProps} />
      <StarIcon {...sizeProps} />
      <StarIcon {...sizeProps} />
      <StarIcon {...sizeProps} />
      <StarHalfIcon {...sizeProps} />

      {children}
    </Flex>
  );
};
