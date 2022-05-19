import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Span } from '../../../../base';

export interface ItemProps {
  imageNode: ReactNode;
  title: string;
  description: string;
}

export const Item: FC<ItemProps> = (props) => {
  const { imageNode, title, description } = props;
  const theme = useTheme();

  return (
    <Box
      xs={{
        maxWidth: 754,
      }}
    >
      <Box
        css={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          textAlign: 'center',
          maxWidth: 581,
          margin: '0 auto',
        }}
      >
        <Span
          css={{
            ...theme.text.medium900,
            color: '#101111',
          }}
        >
          {title}
        </Span>
        <Span
          css={{
            ...theme.text.normal500,
            color: '#101111',
          }}
        >
          {description}
        </Span>
      </Box>

      {imageNode}
    </Box>
  );
};
