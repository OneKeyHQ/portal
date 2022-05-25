import { FC } from 'react';

import { useTheme } from '@emotion/react';

import { useHover, useMediaQuery } from '../../../../../hooks';
import { Box, Flex, Span } from '../../../../base';

import { ComingSoon } from './ComingSoon';

export interface ItemProps {
  image: string;
  title: string;
  description: string;
  hoverImage?: string;
  status?: 'coming-soon' | 'available';
}

export const Item: FC<ItemProps> = (props) => {
  const { image, title, description, hoverImage, status } = props;
  const theme = useTheme();
  const mediaQuery = useMediaQuery();
  const { hoverProps, isHovered } = useHover({
    timeout: 100,
    isDisabled: status === 'coming-soon',
  });

  const backgroundImage =
    hoverImage && (isHovered || !mediaQuery.medium) ? hoverImage : image;

  return (
    <Flex
      {...hoverProps}
      css={{
        opacity: status === 'coming-soon' ? 0.5 : 1,
        flexDirection: 'column',
        gap: 24,
        flex: 1,
      }}
    >
      <Box
        xs={{
          margin: '0 auto',
          width: '100%',
          height: 384,
          maxWidth: 310,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'auto 80%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          transition: theme.transitions.allEaseOut,
        }}
      />
      <Flex css={{ flexDirection: 'column', gap: 24 }}>
        <Box
          css={{
            height: 1,
            width: '100%',
            backgroundColor: theme.colors.test300,
          }}
        />
        <Flex css={{ flexDirection: 'column', gap: 8 }}>
          <Flex
            xs={{
              alignItems: 'center',
              ...theme.text.medium500,
              color: theme.colors.white,
            }}
            m={{ ...theme.text.medium600 }}
          >
            {title}

            {status === 'coming-soon' && <ComingSoon xs={{ marginLeft: 8 }} />}
          </Flex>

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
        </Flex>
      </Flex>
    </Flex>
  );
};
