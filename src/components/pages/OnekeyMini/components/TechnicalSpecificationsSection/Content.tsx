import { FC } from 'react';

import { useTheme } from '@emotion/react';

import { Flex, Span } from '../../../../base';

export const Content: FC = () => {
  const theme = useTheme();
  const { medium300, medium600, normal200 } = theme.text;
  const m3 = { ...medium300, opacity: 0.5 };
  const n2 = { ...normal200, opacity: 0.5 };

  return (
    <Flex
      xs={{ flexDirection: 'column', color: theme.colors.white, gap: 64 }}
      m={{ paddingTop: 36 }}
      l={{ paddingTop: 56 }}
      xl={{ flexDirection: 'row' }}
    >
      <Flex xs={{ flexDirection: 'column', gap: 64, flex: 1 }}>
        <Flex xs={{ flexDirection: 'column', gap: 40 }}>
          <Flex xs={{ flexDirection: 'column', gap: 16 }}>
            <Span xs={medium600}>Dimensions & weight</Span>
            <Flex xs={{ flexDirection: 'column', gap: 4 }}>
              <Span xs={m3}>Size</Span>
              <Span xs={n2}>71 x 34 x 6.8 (mm)</Span>
            </Flex>
            <Flex xs={{ flexDirection: 'column', gap: 4 }}>
              <Span xs={m3}>Weight</Span>
              <Span xs={n2}>15.6g</Span>
            </Flex>
          </Flex>
        </Flex>
        <Flex xs={{ flexDirection: 'column', gap: 40 }}>
          <Flex xs={{ flexDirection: 'column', gap: 16 }}>
            <Span xs={medium600}>Microcontrollers & connector</Span>
            <Flex xs={{ flexDirection: 'column', gap: 4 }}>
              <Span xs={m3}>Connector</Span>
              <Span xs={n2}>USB Type-C</Span>
            </Flex>
            <Flex xs={{ flexDirection: 'column', gap: 4 }}>
              <Span xs={m3}>Certification level</Span>
              <Span xs={n2}>CC EAL5+</Span>
            </Flex>
            <Flex xs={{ flexDirection: 'column', gap: 4 }}>
              <Span xs={m3}>Chips</Span>
              <Span xs={n2}>ST33J2M0</Span>
            </Flex>
          </Flex>
        </Flex>
        <Flex xs={{ flexDirection: 'column', gap: 40 }}>
          <Flex xs={{ flexDirection: 'column', gap: 16 }}>
            <Span xs={medium600}>Materials</Span>
            <Span xs={n2}>Brushed stainless steel and plastic.</Span>
          </Flex>
        </Flex>
      </Flex>
      <Flex xs={{ flexDirection: 'column', gap: 64, flex: 1 }}>
        <Flex xs={{ flexDirection: 'column', gap: 40 }}>
          <Flex xs={{ flexDirection: 'column', gap: 16 }}>
            <Span xs={medium600}>Compatibility</Span>
            <Span xs={n2}>
              64-bits desktop computer (Windows 8.1+, macOS 10.14+, Linux)
              excluding ARM Processors. Please note that our devices and the
              Ledger Live App are not compatible with Chromebooks. Also
              compatible with smartphones (iOS 13+ or Android 7+). The device is
              not suitable for mining
            </Span>
          </Flex>
        </Flex>
        <Flex xs={{ flexDirection: 'column', gap: 40 }}>
          <Flex xs={{ flexDirection: 'column', gap: 16 }}>
            <Span xs={medium600}>Flex Contents</Span>
            <Span xs={n2}>
              1 hardware wallet, 1 USB-C to USB-A cable, 1 getting started
              leaflet, 3 recovery sheets, 1 keychain strap
            </Span>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
