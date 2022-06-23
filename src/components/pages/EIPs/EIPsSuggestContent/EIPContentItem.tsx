import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Flex, Span } from '../../../base';
import { SuggestListItem } from '../suggestList';

export interface EIPContentItemProps extends SuggestListItem {
  children?: ReactNode;
}

export const EIPContentItem: FC<EIPContentItemProps> = (props) => {
  const { children, title, id } = props;
  const theme = useTheme();

  return (
    <Box>
      <Flex xs={{ alignItems: 'center' }}>
        <Box
          xs={{
            ...theme.text.medium400,
            background: theme.colors.brandAlt300,
            padding: '4px 10px',
            borderRadius: 8,
          }}
        >
          {id.replace('-', ' ')}
        </Box>
        <Span xs={{ paddingLeft: 6, fontSize: 22 }}>🔥</Span>
      </Flex>
      <Box
        xs={{
          ...theme.text.medium200,
          paddingTop: 4,
          color: theme.colors.test300,
          paddingRight: '5%',
        }}
      >
        {id} {title}
      </Box>{' '}
      {children}
    </Box>
  );
};
