import { FC } from 'react';

import { useTheme } from '@emotion/react';
import { useTransform } from 'framer-motion';

import { useElementInViewportProgress } from '../../../../../hooks';
import {
  Box,
  Button,
  CanvasPlayer,
  Container,
  LaunchAppButton,
  Section,
  Span,
} from '../../../../base';

import { Progress } from './Progress';

export const Products: FC = () => {
  const theme = useTheme();
  const { ref, elementInViewportProgress } = useElementInViewportProgress(0);
  const motionValue = useTransform(
    elementInViewportProgress,
    [0, 1.5],
    [0, 59],
  );

  return (
    <Section>
      <Container>
        <Box
          css={{
            paddingLeft: 20,
            paddingTop: 87,
            paddingBottom: 87,
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <Box
            xs={{ display: 'flex', gap: 80 }}
            xxl={{
              gap: 200,
            }}
          >
            {/* left */}
            <Box css={{ display: 'flex', gap: 24 }}>
              <Box
                xs={{
                  marginRight: 30,
                }}
              >
                <Progress />
              </Box>

              {/* item 1 */}
              <Box>
                <Box
                  css={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 24,
                    height: 500,
                  }}
                >
                  <Box
                    css={{ display: 'flex', flexDirection: 'column', gap: 16 }}
                  >
                    <Span css={{ ...theme.text.medium900 }}>
                      Advanced on-chain wallet app
                    </Span>
                    <Span css={{ ...theme.text.normal400 }}>
                      Use the OneKey App separately to store and use your crypto
                      assets in a secure and convenient manner. Each user's
                      assets are secured appropriately and stored locally.
                    </Span>
                  </Box>
                  <Box>
                    <LaunchAppButton />
                  </Box>
                </Box>

                {/* item2 */}
                <Box
                  css={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 24,
                    height: 500,
                  }}
                >
                  <Box
                    css={{ display: 'flex', flexDirection: 'column', gap: 8 }}
                  >
                    <Span css={{ ...theme.text.medium900 }}>
                      Need more security? No problem.
                    </Span>

                    <Span css={{ ...theme.text.normal400 }}>
                      Hardware wallets take the securitisation of digital assets
                      to another level. From physically isolating hackers to
                      preventing Trojan horses and software attacks. All
                      transfers must be approved by the hardware wallet, so you
                      don't have to worry about the loss or theft of your mobile
                      phone.
                    </Span>
                  </Box>

                  <Box>
                    <Button variant="outline">Go to shop</Button>
                  </Box>
                </Box>
              </Box>
            </Box>

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
                    width: 644,
                    height: 502,
                    borderRadius: 24,
                    overflow: 'hidden',
                  }}
                >
                  <CanvasPlayer
                    width={1288 / 2}
                    height={1004 / 2}
                    images={new Array(60)
                      .fill(0)
                      .map((_, i) => `/canvas/image${i}.jpg`)}
                    frame={parseInt(motionValue.get().toFixed(0))}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Section>
  );
};
