import { FC } from 'react';

import { useTheme } from '@emotion/react';

import { Box, BoxProps, Span } from '../../../../base';

export interface ItemProps extends BoxProps {
  title?: string;
  description?: string;
}

export const Item: FC<ItemProps> = (props) => {
  const { title, description, ...otherProps } = props;
  const theme = useTheme();

  return (
    <Box
      xs={{
        transition: theme.transitions.allEaseOut,
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        gap: 26,
        opacity: 0.6,
        ':hover': {
          opacity: 1,
        },
      }}
      xl={{
        gap: 32,
      }}
      externalProps={otherProps}
    >
      <Box css={{ height: 1, width: '100%', backgroundColor: '#101111' }} />
      <Box css={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Span
          xs={{ color: '#101111', ...theme.text.medium600 }}
          xl={{ ...theme.text.medium700 }}
        >
          {title}
        </Span>
        <Span
          xs={{
            ...theme.text.normal300,
            color: '#101111',
          }}
          xl={{ ...theme.text.normal400 }}
        >
          {description}
        </Span>
      </Box>
    </Box>
  );
};
