import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Flex, Span } from '../../../../base';

export interface ContentProps {
  children?: ReactNode;
}

export const Content: FC<ContentProps> = (props) => {
  const { children } = props;
  const theme = useTheme();
  const { medium300, medium600, normal200 } = theme.text;

  return (
    <Flex xs={{ gap: 24, flexGrow: 1, color: theme.colors.white }}>
      <Flex xs={{ flexDirection: 'column', gap: 64 }}>
        <Flex xs={{ flexDirection: 'column', gap: 40 }}>
          <Flex xs={{ flexDirection: 'column', gap: 16 }}>
            <Span xs={medium600}>Dimensions & weight</Span>
            <Flex xs={{ flexDirection: 'column', gap: 4 }}>
              <Span xs={medium300}>Size</Span>
              <Span xs={normal200}>72mm x 18.6mm x 11.75mm</Span>
            </Flex>
            <Flex xs={{ flexDirection: 'column', gap: 4 }}>
              <Span xs={medium300}>Weight</Span>
              <Span xs={normal200}>34g</Span>
            </Flex>
          </Flex>
        </Flex>
        <Flex xs={{ flexDirection: 'column', gap: 40 }}>
          <Flex xs={{ flexDirection: 'column', gap: 16 }}>
            <Span xs={medium600}>Microcontrollers & connector</Span>
            <Flex xs={{ flexDirection: 'column', gap: 4 }}>
              <Span xs={medium300}>Connector</Span>
              <Span xs={normal200}>USB Type-C</Span>
            </Flex>
            <Flex xs={{ flexDirection: 'column', gap: 4 }}>
              <Span xs={medium300}>Certification level</Span>
              <Span xs={normal200}>CC EAL5+</Span>
            </Flex>
            <Flex xs={{ flexDirection: 'column', gap: 4 }}>
              <Span xs={medium300}>Chips</Span>
              <Span xs={normal200}>ST33J2M0</Span>
            </Flex>
          </Flex>
        </Flex>
        <Flex xs={{ flexDirection: 'column', gap: 40 }}>
          <Flex xs={{ flexDirection: 'column', gap: 16 }}>
            <Span xs={medium600}>Materials</Span>
            <Span xs={normal200}>Brushed stainless steel and plastic.</Span>
          </Flex>
        </Flex>
        <Flex xs={{ flexDirection: 'column', gap: 40 }}>
          <Flex xs={{ flexDirection: 'column', gap: 16 }}>
            <Span xs={medium600}>Compatibility</Span>
            <Span xs={normal200}>
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
            <Span xs={normal200}>
              1 hardware wallet, 1 USB-C to USB-A cable, 1 getting started
              leaflet, 3 recovery sheets, 1 keychain strap
            </Span>
          </Flex>
        </Flex>
      </Flex>

      {children}
    </Flex>
  );
};
