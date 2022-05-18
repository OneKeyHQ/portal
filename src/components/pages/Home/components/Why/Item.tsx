import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Span } from '../../../../base';

export interface ItemProps {
  image: string | ReactNode;
  title: string;
  description: string;
}

export const Item: FC<ItemProps> = (props) => {
  const { image, title, description } = props;
  const theme = useTheme();

  return (
    <Box
      css={{
        width: 421,
        listStyle: 'none',
      }}
    >
      <Box
        css={{
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: '#dadee1',
          borderBottomLeftRadius: 32,
          borderBottomRightRadius: 32,
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,
          backgroundColor: '#f0f1f2',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        <Box
          css={{
            borderTopLeftRadius: 32,
            borderTopRightRadius: 32,
            display: 'flex',
          }}
        >
          {image}
        </Box>
        <Box
          css={{
            paddingLeft: 40,
            paddingRight: 40,
            paddingTop: 40,
            paddingBottom: 40,
            display: 'flex',
          }}
        >
          <Box
            css={{
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}
          >
            <Span css={{ ...theme.text.medium700, color: '#101111' }}>
              {title}
            </Span>
            <Span css={{ ...theme.text.normal300, color: '#313638' }}>
              {description}
            </Span>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
