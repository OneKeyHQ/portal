import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Flex, H1, Span } from '../../../../base';

export interface ItemProps {
  image: string | ReactNode;
  title: string;
  description: string;
}

export const Item: FC<ItemProps> = (props) => {
  const { image, title, description } = props;
  const theme = useTheme();

  return (
    <Flex
      xs={{
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#dadee1',
        borderRadius: 32,
        backgroundColor: '#f0f1f2',
        flexDirection: 'column',
        overflow: 'hidden',
        marginLeft: 24,
        transition: theme.transitions.allEaseOut,
      }}
      m={{
        minHeight: 688,
        ':hover': {
          marginTop: -20,
          boxShadow: '0px 24px 48px rgba(0, 0, 0, 0.08)',
        },
      }}
      l={{
        marginLeft: 64,
      }}
      xl={{
        height: 780,
      }}
    >
      <Box
        css={{
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,
          backgroundColor: theme.colors.white,
        }}
      >
        {image}
      </Box>
      <Box
        css={{
          padding: 40,
          flexDirection: 'column',
        }}
      >
        <H1
          xs={{
            ...theme.text.medium500,
            color: '#101111',
            paddingBottom: 16,
          }}
          s={{
            ...theme.text.medium600,
          }}
          m={{
            ...theme.text.medium700,
          }}
        >
          {title}
        </H1>
        <Span
          xs={{ ...theme.text.normal200, color: '#313638' }}
          m={{ ...theme.text.normal300 }}
        >
          {description}
        </Span>
      </Box>
    </Flex>
  );
};
