import { FC } from 'react';

import { useTransform } from 'framer-motion';

import {
  useElementInViewportProgress,
  useMediaQueryMapValues,
  useWindowSize,
} from '../../../../../../hooks';
import {
  Box,
  CanvasPlayer,
  Container,
  Flex,
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
    [0.7, 1.4],
    [0, 59],
  );

  const { height: windowHeight = 0 } = useWindowSize();

  const canvasSize = useMediaQueryMapValues({
    xsmall: { width: 540, height: 421 },
    small: { width: 540, height: 421 },
    medium: { width: 540, height: 421 },
    large: { width: 540, height: 421 },
    xlarge: { width: 644, height: 502 },
    xxlarge: { width: 792, height: 618 },
  });

  const stickyPosition =
    windowHeight > canvasSize.height + 200
      ? {
          top: `calc(50% - ${canvasSize.height / 2}px)`,
        }
      : {
          top: 100,
        };

  return (
    <Section>
      <Container>
        <Flex
          xs={{
            paddingLeft: 20,
            paddingTop: 87,
            paddingBottom: 87,
            alignItems: 'center',
            position: 'relative',
          }}
          m={{
            paddingTop: 100,
            paddingBottom: 100,
          }}
          l={{
            paddingTop: 120,
            paddingBottom: 120,
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
                m={{ marginRight: 20 }}
                l={{ marginRight: 40 }}
                xxl={{ marginRight: 50 }}
              >
                <Progress height={canvasSize.height} />
              </Box>

              {/* item 1 */}
              <Box>
                <Flex
                  css={{
                    flexDirection: 'column',
                    gap: 24,
                    height: 700,
                  }}
                >
                  <TextContent
                    title={productsData[0]?.title}
                    description={productsData[0]?.description}
                  />

                  <Box>
                    <Box>{productsData[0]?.button}</Box>
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

                  <Box>{productsData[1]?.button}</Box>
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
                    ...stickyPosition,
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
                    images={[
                      ...new Array(60)
                        .fill(0)
                        .map((_, i) => `/home-intro/home-intro${i}.jpg`),
                    ]}
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
