import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Span } from '../../base/Box';

export interface InfoCardProps {
  children?: ReactNode;
  imageNode?: ReactNode;
  title?: string | ReactNode;
}

export const InfoCard: FC<InfoCardProps> = (props) => {
  const { children, imageNode, title } = props;
  const theme = useTheme();

  return (
    <Box
      css={{
        position: 'relative',
        backgroundColor: theme.colors.test100,
      }}
    >
      <Span css={{ ...theme.text.medium800, color: theme.colors.test500 }}>
        {title}
      </Span>

      {children}

      <Box
        css={{
          width: 420,
          height: 420,
        }}
      >
        {imageNode}
      </Box>
    </Box>
  );
};
