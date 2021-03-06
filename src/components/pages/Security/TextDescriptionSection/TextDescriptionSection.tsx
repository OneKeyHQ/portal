import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import {
  Box,
  Container,
  Divider,
  Flex,
  H3,
  P,
  Section,
  Span,
} from '../../../base';
import { SectionTitle } from '../../../common';

import { useTextDescriptionSectionData } from './useTextDescriptionSectionData';

export interface TextDescriptionSectionProps {
  children?: ReactNode;
}

export const TextDescriptionSection: FC<TextDescriptionSectionProps> = (
  props,
) => {
  const { children } = props;
  const textDescriptionSectionData = useTextDescriptionSectionData();
  const theme = useTheme();

  return (
    <Section
      xs={{ paddingTop: 72, paddingBottom: 72 }}
      xl={{ paddingTop: 120, paddingBottom: 120 }}
    >
      <Container>
        <Flex
          xs={{ gap: 32, flexDirection: 'column', alignItems: 'center' }}
          m={{ gap: 36 }}
          xl={{ gap: 80 }}
        >
          <Box
            xs={{ textAlign: 'center', maxWidth: 760 }}
            m={{ maxWidth: 660 }}
            xl={{ maxWidth: 860 }}
          >
            <SectionTitle>{textDescriptionSectionData.title}</SectionTitle>

            <Box xs={{ paddingTop: 8 }}>
              <Span
                css={{ color: theme.colors.test400 }}
                xs={theme.text.normal200}
                xl={theme.text.normal500}
              >
                {textDescriptionSectionData.description}
              </Span>
            </Box>
          </Box>

          <Flex
            xs={{ gap: 36, flexDirection: 'column' }}
            m={{ gap: 24, flexDirection: 'row' }}
            xl={{ gap: 80 }}
            xxl={{ gap: 90 }}
          >
            {textDescriptionSectionData.items.map((item, index) => (
              <Flex
                key={item.name}
                xs={{ gap: 16, flexDirection: 'column', flex: 1 }}
              >
                <Span
                  css={{ color: theme.colors.test300 }}
                  xs={theme.text.medium500}
                >
                  {`0${index + 1}`}
                </Span>
                <Divider color={theme.colors.test300} />
                <H3
                  xs={{
                    ...theme.text.medium500,
                    color: theme.colors.test500,
                  }}
                  m={theme.text.medium600}
                  xl={theme.text.medium700}
                >
                  {item.name}
                </H3>
                <P
                  css={{ color: theme.colors.test400 }}
                  xs={theme.text.normal300}
                >
                  {item.description}
                </P>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Container>
      {children}
    </Section>
  );
};
