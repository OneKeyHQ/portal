import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Container, Flex } from '../../../../base';
import { SectionTitle } from '../../../../common';

import { Content, ContentProps } from './Content';
import { SideImage } from './SideImage';

export interface TechnicalSpecificationsSectionProps extends ContentProps {
  children?: ReactNode;
  title: string;
  images: {
    largeImageUrl: string;
    mediumImageUrl: string;
    smallImageUrl: string;
  };
}

export const TechnicalSpecificationsSection: FC<
  TechnicalSpecificationsSectionProps
> = (props) => {
  const { children, title, images, content } = props;
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
          <SectionTitle color={theme.colors.white}>{title}</SectionTitle>
        </Box>

        <Flex
          xs={{ flexDirection: 'column', paddingTop: 40, gap: 40 }}
          m={{ justifyContent: 'center' }}
          l={{ flexDirection: 'row' }}
        >
          <Flex xs={{ flex: 1, justifyContent: 'center' }}>
            <SideImage {...images} />
          </Flex>

          <Content content={content} />
        </Flex>
      </Container>
      {children}
    </Box>
  );
};
