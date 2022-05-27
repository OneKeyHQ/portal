import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, BoxProps, Flex, Span } from '../../../../base';

export interface ItemProps extends BoxProps {
  title?: string;
  description?: string;
  active?: boolean;
  image: ReactNode;
}

export const Item: FC<ItemProps> = (props) => {
  const { title, description, image, active = false, ...otherProps } = props;
  const theme = useTheme();

  return (
    <Flex
      xs={{
        transition: theme.transitions.allEaseOut,
        flexDirection: 'column',
        gap: 26,
        opacity: active ? 1 : 0.5,
        ':hover': {
          opacity: 1,
        },
      }}
      xl={{
        gap: 32,
      }}
      {...otherProps}
    >
      <Box
        css={{
          height: 1,
          width: '100%',
          backgroundColor: theme.colors.test500,
        }}
      />
      <Flex css={{ flexDirection: 'column', gap: 8 }}>
        <Span
          xs={{ color: theme.colors.test500, ...theme.text.medium600 }}
          xl={{ ...theme.text.medium700 }}
        >
          {title}
        </Span>
        <Span
          xs={{ ...theme.text.normal300, color: theme.colors.test500 }}
          xl={{ ...theme.text.normal400 }}
        >
          {description}
        </Span>
      </Flex>

      {/* for preload image */}
      <Box
        xs={{
          width: 1,
          height: 1,
          opacity: 0,
          position: 'absolute',
        }}
      >
        {image}
      </Box>
    </Flex>
  );
};
