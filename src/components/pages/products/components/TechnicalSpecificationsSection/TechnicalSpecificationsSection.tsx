import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Container, Flex, Span } from '../../../../base';

import { Content } from './Content';
import { SideImage } from './SideImage';
import { useTechnicalSpecificationsSectionData } from './useTechnicalSpecificationsSectionData';

export interface TechnicalSpecificationsSectionProps {
  children?: ReactNode;
}

export const TechnicalSpecificationsSection: FC<
  TechnicalSpecificationsSectionProps
> = (props) => {
  const { children } = props;
  const theme = useTheme();

  const sectionData = useTechnicalSpecificationsSectionData();

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
            {sectionData.title}
          </Span>
        </Box>

        <Flex
          xs={{ flexDirection: 'column', paddingTop: 40, gap: 40 }}
          l={{ flexDirection: 'row', gap: 100 }}
        >
          <Flex
            xs={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
          >
            <SideImage {...sectionData.images} />
          </Flex>

          <Content />
        </Flex>
      </Container>
      {children}
    </Box>
  );
};
