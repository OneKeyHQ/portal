import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Container, Flex, Span } from '../../../../base';

import { Content } from './Content';
import { SideImage } from './SideImage';

export interface TechnicalSpecificationsSectionProps {
  children?: ReactNode;
}

export const TechnicalSpecificationsSection: FC<
  TechnicalSpecificationsSectionProps
> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <Box
      xs={{
        backgroundColor: theme.colors.test400,
        borderRadius: 40,
        paddingTop: 70,
        paddingBottom: 70,
      }}
      m={{
        padding: 70,
        borderRadius: 0,
      }}
    >
      <Container>
        <Box xs={{ textAlign: 'center' }}>
          <Span xs={{ ...theme.text.medium800, color: theme.colors.white }}>
            Technical Specifications
          </Span>
        </Box>

        <Flex
          xs={{ flexDirection: 'column', paddingTop: 40, gap: 40 }}
          m={{ flexDirection: 'row', gap: 100 }}
        >
          <Box xs={{ flexGrow: 1 }}>
            <SideImage />
          </Box>
          <Content />
        </Flex>
      </Container>
      {children}
    </Box>
  );
};