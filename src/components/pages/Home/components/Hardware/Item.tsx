import { FC } from 'react';

import { useTheme } from '@emotion/react';

import { useHover, useMediaQuery } from '../../../../../hooks';
import { Box, Flex, Link, Span } from '../../../../base';

import { ComingSoon } from './ComingSoon';

export interface ItemProps {
  image: string;
  title: string;
  description: string;
  hoverImage?: string;
  status?: 'coming-soon' | 'available';
  link?: string;
}

export const Item: FC<ItemProps> = (props) => {
  const {
    image,
    title,
    description,
    hoverImage = '',
    status,
    link = '',
  } = props;
  const theme = useTheme();
  const mediaQuery = useMediaQuery();
  const { hoverProps, isHovered } = useHover({
    timeout: 100,
    isDisabled: status === 'coming-soon',
  });

  const showProductImage = hoverImage && (isHovered || !mediaQuery.medium);

  return (
    <Box xs={{ flex: 1 }}>
      <Link to={link}>
        <Flex
          {...hoverProps}
          css={{
            opacity: status === 'coming-soon' ? 0.5 : 1,
            flexDirection: 'column',
            gap: 24,
          }}
        >
          <Box
            xs={{
              margin: '0 auto',
              width: '100%',
              height: 384,
              maxWidth: 310,
              backgroundImage: `url(${image})`,
              backgroundSize: 'auto 100%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          >
            {hoverImage && (
              <Box
                xs={{
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url(${hoverImage})`,
                  backgroundSize: 'auto 100%',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  opacity: showProductImage ? 1 : 0,
                  transition: theme.transitions.allEaseOut,
                }}
              />
            )}
          </Box>
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

                {status === 'coming-soon' && (
                  <ComingSoon xs={{ marginLeft: 8 }} />
                )}
              </Flex>

              <Span
                xs={{
                  ...theme.text.normal200,
                  transition: theme.transitions.allEaseOut,
                  color: isHovered
                    ? theme.colors.white
                    : theme.background.test300,
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
      </Link>
    </Box>
  );
};
