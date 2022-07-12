import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import {
  Box,
  Button,
  Container,
  Flex,
  Link,
  Section,
  Span,
} from '../../../../base';
import { useMultiChainSupportMedia } from '../../../../common';

export interface MultiChainSupportSectionProps {
  children?: ReactNode;
}

export const MultiChainSupportSection: FC<MultiChainSupportSectionProps> = (
  props,
) => {
  const { children } = props;
  const MultiChainSupportMediaCardData = useMultiChainSupportMedia();
  const { mainTitle, button, link, imageNode, description } =
    MultiChainSupportMediaCardData;
  const theme = useTheme();

  return (
    <Section>
      <Container>
        <Box
          xs={{ paddingTop: 72, paddingBottom: 72 }}
          m={{ paddingTop: 100, paddingBottom: 100 }}
          l={{ paddingTop: 120, paddingBottom: 120 }}
        >
          <Box
            xs={{
              borderRadius: 40,
              position: 'relative',
              backgroundColor: theme.colors.test100,
              padding: '48px 36px',
            }}
            m={{
              padding: 0,
            }}
          >
            <Flex
              xs={{
                gap: 20,
                flexDirection: 'column',
              }}
              m={{
                gap: 0,
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
              }}
            >
              <Flex
                xs={{
                  gap: 20,
                  flexDirection: 'column',
                }}
                m={{
                  gap: 24,
                  paddingLeft: 72,
                  paddingTop: 72,
                }}
              >
                <Span
                  xs={{
                    color: theme.colors.test500,
                    ...theme.text.medium700,
                  }}
                  m={theme.text.medium800}
                >
                  {mainTitle}
                </Span>
                <Span
                  xs={{
                    color: theme.colors.test400,
                    ...theme.text.normal200,
                  }}
                  m={theme.text.normal300}
                >
                  {description}
                </Span>

                <Box>
                  <Link to={link}>
                    <Button variant="outlined">{button}</Button>
                  </Link>
                </Box>
              </Flex>
              <Box
                xs={{
                  maxWidth: 420,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
                m={{
                  marginRight: 0,
                }}
              >
                {imageNode}
              </Box>
            </Flex>
          </Box>
        </Box>
        {children}
      </Container>
    </Section>
  );
};
