import { FC } from 'react';

import { useTheme } from '@emotion/react';

import { useHover } from '../../../../../hooks';
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
  const { hoverProps, isHovered } = useHover({
    timeout: 100,
  });

  return (
    <Box
      {...hoverProps}
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
          ...(hoverImage && isHovered
            ? {
                backgroundImage: `url(${hoverImage})`,
                backgroundSize: 'auto 95%',
              }
            : {}),
        }}
      />
      <Box css={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <Box
          css={{
            height: 1,
            width: '100%',
            backgroundColor: theme.colors.test300,
          }}
        />
        <Box css={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <Span
            xs={{
              ...theme.text.medium500,
              color: theme.colors.white,
            }}
            m={{ ...theme.text.medium600 }}
          >
            {title}
          </Span>
          <Span
            xs={{
              ...theme.text.normal200,
              transition: theme.transitions.allEaseOut,
              color: isHovered ? theme.colors.white : theme.background.test300,
            }}
            m={{
              ...theme.text.normal300,
            }}
          >
            {description}
          </Span>
        </Box>
      </Box>
    </Box>
  );
};
