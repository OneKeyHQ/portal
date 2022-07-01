import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Button, Flex, I18n, Link, Span } from '../../../../base';

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
            textTransform: 'uppercase',
          }}
          s={{ ...theme.text.medium600 }}
          xl={{ ...theme.text.medium700 }}
        >
          <I18n name="title__security" />
        </Span>
        <Span
          xs={{ ...theme.text.medium800, color: '#101111' }}
          s={{ ...theme.text.medium900 }}
          m={{ ...theme.text.medium1000 }}
          xxl={{ ...theme.text.medium1100 }}
        >
          <I18n
            name="title__security_desc"
            multiLine={['m', 'l', 'xl', 'xxl']}
            singleLine={['xs', 's']}
          />
        </Span>
      </Flex>

      <Box xs={{ width: 'fit-content' }}>
        <Link to="https://onekey.so/security">
          <Button variant="outlined">
            <I18n name="action__learn_more" />
          </Button>
        </Link>
      </Box>

      {children}
    </Flex>
  );
};
