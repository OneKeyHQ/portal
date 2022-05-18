import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Button, Flex, Span } from '../../../../base';

export interface SecurityHeaderProps {
  children?: ReactNode;
}

export const SecurityHeader: FC<SecurityHeaderProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <Flex
      css={{
        flexDirection: 'column',
        gap: 24,
        flexGrow: 1,
      }}
    >
      <Flex css={{ flexDirection: 'column', gap: 8 }}>
        <Span css={{ ...theme.text.medium700, color: '#8a9195' }}>
          SECURITY
        </Span>
        <Span css={{ ...theme.text.medium1100, color: '#101111' }}>
          Security,
          <br /> both hard and soft.
        </Span>
      </Flex>

      <Box>
        <Button variant="outline">Learn More</Button>
      </Box>

      {children}
    </Flex>
  );
};
