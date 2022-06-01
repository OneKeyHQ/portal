import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Container } from '../../../../base';

export interface TabsProps {
  children?: ReactNode;
}

export const Tabs: FC<TabsProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <Box
      css={{
        paddingTop: 32,
        paddingBottom: 32,
        color: theme.colors.white,
        backgroundColor: theme.colors.test500,
      }}
    >
      <Container>Tabs</Container>
      {children}
    </Box>
  );
};
