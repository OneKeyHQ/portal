import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Divider, Flex, Span } from '../../../../../base';

export interface OtherPlatformsProps {
  children?: ReactNode;
}

export const OtherPlatforms: FC<OtherPlatformsProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <Flex
      xs={{
        paddingTop: 40,
        color: theme.colors.test500,
        gap: 32,
        flexDirection: 'column',
      }}
    >
      <Span xs={{ ...theme.text.medium700 }}>Other platforms</Span>

      <Divider />

      <Box>content</Box>

      <Box>{children}</Box>
    </Flex>
  );
};
