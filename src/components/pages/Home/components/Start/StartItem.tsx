import { FC } from 'react';

import { useTheme } from '@emotion/react';

import { DownloadTypes } from '../../../../../data/useDownloadData';
import { Box, Flex, Link, Span } from '../../../../base';
import { PlatformIcon } from '../../../../common';

export interface StartItemProps {
  name: string;
  description: string;
  image: DownloadTypes;
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
      }}
      m={{
        transition: theme.transitions.allEaseOut,
        willChange: 'opacity',
        opacity: 0.4,
        ':hover': {
          opacity: 1,
        },
      }}
    >
      <Link
        css={{
          cursor: 'none',
          color: theme.colors.test500,
          ':hover': {
            cursor: 'none',
            color: theme.colors.test500,
          },
        }}
        to={path}
      >
        <Box
          css={{
            height: 1,
            width: '100%',
            backgroundColor: theme.colors.test500,
          }}
        />
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
          <PlatformIcon iconType={image} width={88} height={88} />

          <Flex
            css={{
              flexDirection: 'column',
              gap: 8,
              color: theme.colors.test500,
            }}
          >
            <Span xs={{ ...theme.text.medium600 }}>{name}</Span>
            <Span xs={{ ...theme.text.normal200 }}>{description}</Span>
          </Flex>
        </Flex>
      </Link>
    </Box>
  );
};
