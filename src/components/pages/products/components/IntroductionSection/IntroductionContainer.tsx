import { FC, ReactNode } from 'react';

import { Box } from '../../../../base';

export interface IntroductionContainerProps {
  children?: ReactNode;
}

export const IntroductionContainer: FC<IntroductionContainerProps> = (
  props,
) => {
  const { children } = props;

  return (
    <Box
      xs={{ paddingLeft: 24, paddingRight: 24 }}
      m={{ paddingLeft: 32, paddingRight: 32 }}
      xl={{ paddingLeft: 36, paddingRight: 36 }}
      xxl={{ paddingLeft: 40, paddingRight: 40 }}
    >
      {children}
    </Box>
  );
};
