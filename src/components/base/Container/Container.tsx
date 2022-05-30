import { FC, ReactNode } from 'react';

import { useMediaQueryMapValues, useWindowSize } from '../../../hooks';
import { Box, BoxProps } from '../Box';

export interface ContainerProps extends BoxProps {
  children?: ReactNode;
}

export const defaultContainerWidth = {
  medium: 960 - 32 * 2,
  large: 1220 - 48 * 2,
  xlarge: 1440 - 64 * 2,
  xxlarge: 1736 - 92 * 2,
};

export function useCurrentContainerWidth() {
  const { width: windowWidth = 0 } = useWindowSize();

  return useMediaQueryMapValues({
    small: windowWidth,
    ...defaultContainerWidth,
  });
}

export const Container: FC<ContainerProps> = (props) => {
  const { children, ...externalProps } = props;

  return (
    <Box
      xs={{
        margin: '0 auto',
        maxWidth: '100%',
        paddingLeft: 24,
        paddingRight: 24,
        label: 'Container',
      }}
      s={{
        paddingLeft: 24,
        paddingRight: 24,
      }}
      m={{
        paddingLeft: 0,
        paddingRight: 0,
        maxWidth: defaultContainerWidth.medium,
      }}
      l={{
        maxWidth: defaultContainerWidth.large,
      }}
      xl={{
        maxWidth: defaultContainerWidth.xlarge,
      }}
      xxl={{
        maxWidth: defaultContainerWidth.xxlarge,
      }}
      externalProps={externalProps}
    >
      {children}
    </Box>
  );
};
