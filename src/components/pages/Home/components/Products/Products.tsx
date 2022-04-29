import { FC } from 'react';

import { Box, Button } from '../../../../base';

import placeholderImage from './placeholder.png';

export const Products: FC = () => (
  <div>
    <div
      css={{
        paddingLeft: 87,
        paddingRight: 87,
        paddingTop: 87,
        paddingBottom: 87,
        display: 'flex',
        alignItems: 'center',
        label: 'Frame 67',
        position: 'relative',
      }}
    >
      <div css={{ display: 'flex', gap: 200, flexGrow: 1 }}>
        <div css={{ display: 'flex', gap: 24 }}>
          <div css={{ display: 'flex', flexDirection: 'column', gap: 336 }}>
            <div css={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div css={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <span css={{ fontSize: 36, color: '#101111' }}>
                  Advanced on-chain wallet app
                </span>
                <span css={{ fontSize: 16, color: '#313638' }}>
                  Use the OneKey App separately to store and use your crypto
                  assets in a secure and convenient manner. Each user's assets
                  are secured appropriately and stored locally.
                </span>
              </div>
              <Button>Launch App</Button>
            </div>
            <div css={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div css={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <span css={{ fontSize: 36, color: '#101111' }}>
                  Need more security? No problem.
                </span>
                <span css={{ fontSize: 16, color: '#313638' }}>
                  Hardware wallets take the securitisation of digital assets to
                  another level. From physically isolating hackers to preventing
                  Trojan horses and software attacks. All transfers must be
                  approved by the hardware wallet, so you don't have to worry
                  about the loss or theft of your mobile phone.
                </span>
              </div>
              <Button variant="outline">Go to shop</Button>
            </div>
          </div>
        </div>

        <Box position="relative" flex={1}>
          <img
            alt="cover"
            src={placeholderImage}
            css={{
              top: `calc(50% - ${502 / 2}px)`,
              position: 'sticky',
              width: 644,
              height: 502,
            }}
          />
        </Box>
      </div>
    </div>
  </div>
);
