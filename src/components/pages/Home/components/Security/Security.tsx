import { FC } from 'react';

import { useTheme } from '@emotion/react';

import {
  Box,
  Button,
  Container,
  Flex,
  Img,
  Section,
  Span,
} from '../../../../base';

import placeholderImage from './images/placeholder.png';
import { Item } from './Item';
import { useData } from './useData';

export const Security: FC = () => {
  const theme = useTheme();
  const data = useData();

  return (
    <Section>
      <Container>
        <Flex
          xs={{
            flexDirection: 'column',
            paddingTop: 16,
            paddingBottom: 16,
            backgroundColor: '#ffffff',
            gap: 46,
            label: 'Security',
          }}
          m={{
            flexDirection: 'row',
          }}
        >
          {/* left */}
          <Flex
            xs={{
              flex: 1,
              flexDirection: 'column',
              gap: 68,
            }}
          >
            <Flex
              css={{
                flexDirection: 'column',
                gap: 24,
                flexGrow: 1,
              }}
            >
              <Flex css={{ flexDirection: 'column', gap: 8 }}>
                <Span css={{ ...theme.text.medium700, color: '#8a9195' }}>
                  SECURITY
                </Span>
                <Span css={{ ...theme.text.medium1100, color: '#101111' }}>
                  Security,
                  <br /> both hard and soft.
                </Span>
              </Flex>

              <Box>
                <Button variant="outline">Learn More</Button>
              </Box>
            </Flex>

            <Flex
              css={{
                flexDirection: 'column',
                gap: 32,
                flexGrow: 1,
              }}
            >
              {data.map((item) => (
                <Item {...item} />
              ))}
            </Flex>
          </Flex>

          {/* right */}
          <Box
            css={{
              flex: 1,
              borderRadius: 40,
              overflow: 'hidden',
              height: 'fit-content',
            }}
          >
            <Img
              alt="sideImage.png"
              src={placeholderImage}
              css={{ display: 'block', width: '100%' }}
            />
          </Box>
        </Flex>
      </Container>
    </Section>
  );
};
