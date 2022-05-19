import { FC } from 'react';

import { useTheme } from '@emotion/react';
import { useTransform } from 'framer-motion';

import {
  useElementInViewportProgress,
  useMediaQueryMapValues,
} from '../../../../../../hooks';
import {
  Box,
  Button,
  CanvasPlayer,
  Container,
  Flex,
  LaunchAppButton,
  Section,
  Span,
} from '../../../../../base';
import { useProductsData } from '../useProductsData';

import { Progress } from './Progress';

export const NormalProductSection: FC = () => {
  const theme = useTheme();
  const productsData = useProductsData();
  const { ref, elementInViewportProgress } = useElementInViewportProgress(0);
  const motionValue = useTransform(
    elementInViewportProgress,
    [0, 1.5],
    [0, 59],
  );

  const canvasSize = useMediaQueryMapValues({
    small: { width: 540, height: 421 },
    medium: { width: 540, height: 421 },
    large: { width: 540, height: 421 },
    xlarge: { width: 644, height: 502 },
    xxlarge: { width: 792, height: 618 },
  });

  return (
    <Section>
      <Container>
        <Flex
          css={{
            paddingLeft: 20,
            paddingTop: 87,
            paddingBottom: 87,
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <Flex
            xs={{ gap: 80 }}
            xxl={{
              gap: 200,
            }}
          >
            {/* left */}
            <Flex css={{ gap: 24 }}>
              <Box
                xs={{
                  marginRight: 30,
                }}
              >
                <Progress />
              </Box>

              {/* item 1 */}
              <Box>
                <Flex
                  css={{
                    flexDirection: 'column',
                    gap: 24,
                    height: 500,
                  }}
                >
                  <Box
                    css={{ display: 'flex', flexDirection: 'column', gap: 16 }}
                  >
                    <Span css={{ ...theme.text.medium900 }}>
                      {productsData[0]?.title}
                    </Span>
                    <Span css={{ ...theme.text.normal400 }}>
                      {productsData[0]?.description}
                    </Span>
                  </Box>
                  <Box>
                    <LaunchAppButton />
                  </Box>
                </Flex>

                {/* item2 */}
                <Flex
                  css={{
                    flexDirection: 'column',
                    gap: 24,
                    height: 500,
                  }}
                >
                  <Flex css={{ flexDirection: 'column', gap: 8 }}>
                    <Span css={{ ...theme.text.medium900 }}>
                      {productsData[1]?.title}
                    </Span>

                    <Span css={{ ...theme.text.normal400 }}>
                      {productsData[1]?.description}
                    </Span>
                  </Flex>

                  <Box>
                    <Button variant="outline">Go to shop</Button>
                  </Box>
                </Flex>
              </Box>
            </Flex>

            {/* right */}
            <Box>
              <div ref={ref} />

              <Box
                css={{
                  height: '100%',
                  position: 'relative',
                }}
              >
                <Box
                  css={{
                    top: `calc(50% - ${502 / 2}px)`,
                    position: 'sticky',
                    width: canvasSize.width,
                    height: canvasSize.height,
                    borderRadius: 24,
                    overflow: 'hidden',
                  }}
                >
                  <CanvasPlayer
                    width={canvasSize.width}
                    height={canvasSize.height}
                    images={new Array(60)
                      .fill(0)
                      .map((_, i) => `/canvas/image${i}.jpg`)}
                    frame={parseInt(motionValue.get().toFixed(0))}
                  />
                </Box>
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Section>
  );
};
