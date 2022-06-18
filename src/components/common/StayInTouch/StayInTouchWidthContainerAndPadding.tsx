import { FC, ReactNode } from 'react';

import { Box, Container } from '../../base';

import { StayInTouch } from './StayInTouch';

export interface StayInTouchWidthContainerAndPaddingProps {
  children?: ReactNode;
}

export const StayInTouchWidthContainerAndPadding: FC<
  StayInTouchWidthContainerAndPaddingProps
> = (props) => {
  const { children } = props;

  return (
    <Container>
      <Box xs={{ paddingTop: 40, paddingBottom: 40 }} m={{ paddingBottom: 80 }}>
        <StayInTouch />
      </Box>

      {children}
    </Container>
  );
};
