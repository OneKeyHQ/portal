import { FC } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Span } from '../../../../base';

export interface ItemProps {
  image: string;
  title: string;
  description: string;
  hoverImage?: string;
}

export const Item: FC<ItemProps> = (props) => {
  const { image, title, description, hoverImage } = props;
  const theme = useTheme();

  return (
    <Box
      css={{
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        flex: 1,
      }}
    >
      <Box
        xs={{
          margin: '0 auto',
          width: 310,
          height: 384,
          backgroundImage: `url(${image})`,
          backgroundSize: 'auto 80%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          transition: theme.transitions.allEaseOut,
          ':hover': hoverImage
            ? {
                backgroundImage: `url(${hoverImage})`,
                backgroundSize: 'auto 95%',
              }
            : {},
        }}
      />
      <Box css={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <Box
          css={{
            height: 1,
            width: '100%',
            backgroundColor: '#ffffff',
          }}
        />
        <Box css={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <Span css={{ ...theme.text.medium600, color: '#ffffff' }}>
            {title}
          </Span>
          <Span
            css={{
              ...theme.text.normal300,
              color: theme.background.test300,
              ':hover': {
                color: theme.colors.white,
              },
            }}
          >
            {description}
          </Span>
        </Box>
      </Box>
    </Box>
  );
};
