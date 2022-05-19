import { FC } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Flex, Img, Span } from '../../../../base';

export interface StartItemProps {
  name: string;
  description: string;
  image: string;
  path: string;
}

export const StartItem: FC<StartItemProps> = (props) => {
  const { name, description, image, path } = props;
  const theme = useTheme();

  return (
    <Box
      xs={{
        flex: 1,
        position: 'relative',
        transition: theme.transitions.allEaseOut,
        ':hover': {
          cursor: 'pointer',
          opacity: 0.6,
        },
      }}
    >
      <a href={path}>
        <Box css={{ height: 1, width: '100%', backgroundColor: '#101111' }} />
        <Flex
          xs={{
            paddingTop: 32,
            textAlign: 'center',
            gap: 24,
            flexDirection: 'column',
            alignItems: 'center',
          }}
          l={{
            textAlign: 'left',
            flexDirection: 'row',
          }}
        >
          <Img alt="icon-png" src={image} css={{ width: 88, height: 88 }} />
          <Flex
            css={{
              flexDirection: 'column',
              gap: 8,
              color: theme.background.test500,
            }}
          >
            <Span
              xs={{
                ...theme.text.medium600,
              }}
            >
              {name}
            </Span>
            <Span
              xs={{
                ...theme.text.normal200,
              }}
            >
              {description}
            </Span>
          </Flex>
        </Flex>
      </a>
    </Box>
  );
};
