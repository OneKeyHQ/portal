import { FC } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Flex, Img, Span } from '../../../../base';

export interface StartItemProps {
  name: string;
  description: string;
  image: string;
}

export const StartItem: FC<StartItemProps> = (props) => {
  const { name, description, image } = props;
  const theme = useTheme();

  return (
    <Flex
      xs={{
        position: 'relative',
        flexDirection: 'column',
        gap: 32,
        flexGrow: 1,
        transition: theme.transitions.allEaseOut,
        ':hover': {
          opacity: 0.6,
        },
      }}
    >
      <Box css={{ height: 1, width: '100%', backgroundColor: '#101111' }} />
      <Flex
        xs={{ gap: 24, flexDirection: 'column', alignItems: 'center' }}
        m={{
          flexDirection: 'row',
        }}
      >
        <Img alt="icon-png" src={image} css={{ width: 88, height: 88 }} />
        <Flex css={{ flexDirection: 'column', gap: 8 }}>
          <Span
            css={{
              fontWeight: 600,
              fontSize: 30,
              lineHeight: '36px',
            }}
          >
            {name}
          </Span>
          <Span
            css={{
              fontWeight: 400,
              fontSize: 16,
              lineHeight: '20px',
            }}
          >
            {description}
          </Span>
        </Flex>
      </Flex>
    </Flex>
  );
};
