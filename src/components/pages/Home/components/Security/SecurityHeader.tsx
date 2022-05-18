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
        <Span
          xs={{
            ...theme.text.medium500,
            color: '#8a9195',
          }}
          s={{ ...theme.text.medium600 }}
          m={{ ...theme.text.medium700 }}
        >
          SECURITY
        </Span>
        <Span
          xs={{ ...theme.text.medium800, color: '#101111' }}
          s={{ ...theme.text.medium900 }}
          m={{ ...theme.text.medium1000 }}
          l={{ ...theme.text.medium1100 }}
        >
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
