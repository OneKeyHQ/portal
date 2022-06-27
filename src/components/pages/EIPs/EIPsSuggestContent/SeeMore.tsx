import { FC, ReactNode } from 'react';

import { Box, Button, ButtonProps, ChevronDownIcon } from '../../../base';

export interface SeeMoreProps extends ButtonProps {
  children?: ReactNode;
}

export const SeeMore: FC<SeeMoreProps> = (props) => {
  const { children, ...otherProps } = props;

  return (
    <Box>
      <Button
        variant="text"
        rightIcon={<ChevronDownIcon width={24} height={24} />}
        {...otherProps}
      >
        See More
      </Button>
      {children}
    </Box>
  );
};
