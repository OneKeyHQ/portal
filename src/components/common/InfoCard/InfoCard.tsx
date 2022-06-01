import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box } from '../../base/Box';

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
      <Box>{title}</Box>

      {children}

      {imageNode}
    </Box>
  );
};
