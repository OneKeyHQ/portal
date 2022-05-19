import { FC } from 'react';

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
} from '../../../../../base';
import { useProductsData } from '../useProductsData';

import { Progress } from './Progress';
import { TextContent } from './TextContent';

export const NormalProductSection: FC = () => {
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
              gap: 160,
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
                  <TextContent
                    title={productsData[0]?.title}
                    description={productsData[0]?.description}
                  />

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
                  <TextContent
                    title={productsData[1]?.title}
                    description={productsData[1]?.description}
                  />

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
