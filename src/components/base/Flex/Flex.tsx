import { FC } from 'react';

import { Box, BoxProps } from '../Box';

export type FlexProps = BoxProps;

export const Flex: FC<FlexProps> = (props) => {
  const innerStyle = {
    display: 'flex',
  };

  return (
    <Box
      {...props}
      externalProps={{
        xs: {
          ...innerStyle,
        },
      }}
    />
  );
};
