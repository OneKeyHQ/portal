import React, { FC, ReactNode } from 'react';

import { Box, BoxProps } from '../Box';

export interface AspectRatioProps extends BoxProps {
  children?: ReactNode;
  ratio: number;
}

export const AspectRatio: FC<AspectRatioProps> = (props) => {
  const { ratio = 4 / 3, children, ...otherProps } = props;

  const child = React.Children.only(children);

  return (
    <Box
      css={{
        position: 'relative',
        '& > *:not(style)': {
          overflow: 'hidden',
          position: 'absolute',
          top: '0',
          right: '0',
          bottom: '0',
          left: '0',
          width: '100%',
          height: '100%',
        },
        '& > img, & > video': {
          objectFit: 'cover',
        },
        ':before': {
          height: 0,
          content: `""`,
          display: 'block',
          paddingBottom: `${(1 / ratio) * 100}%`,
        },
      }}
      externalProps={otherProps}
    >
      {child}
    </Box>
  );
};
