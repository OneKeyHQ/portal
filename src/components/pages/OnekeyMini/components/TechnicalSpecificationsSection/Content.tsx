import { FC, ReactNode } from 'react';

export interface ContentProps {
  children?: ReactNode;
}

export const Content: FC<ContentProps> = (props) => {
  const { children } = props;

  return (
    <div>
      <div css={{ display: 'flex', gap: 24, flexGrow: 1, label: 'Frame 3618' }}>
        <div css={{ display: 'flex', flexDirection: 'column', gap: 64 }}>
          <div css={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            <div css={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <span
                css={{
                  fontSize: 24,
                  fontWeight: 600,
                  lineHeight: '30px',
                  color: '#ffffff',
                }}
              >
                Dimensions & weight
              </span>
              <div css={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span
                  css={{
                    fontSize: 16,
                    fontWeight: 600,
                    lineHeight: '20px',
                    color: '#ffffff',
                  }}
                >
                  Size
                </span>
                <span
                  css={{
                    fontSize: 14,
                    fontWeight: 300,
                    lineHeight: '17px',
                    color: '#ffffff',
                  }}
                >
                  72mm x 18.6mm x 11.75mm
                </span>
              </div>
              <div css={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span
                  css={{
                    fontSize: 16,
                    fontWeight: 600,
                    lineHeight: '20px',
                    color: '#ffffff',
                  }}
                >
                  Weight
                </span>
                <span
                  css={{
                    fontSize: 14,
                    fontWeight: 300,
                    lineHeight: '17px',
                    color: '#ffffff',
                  }}
                >
                  34g
                </span>
              </div>
            </div>
          </div>
          <div css={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            <div css={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <span
                css={{
                  fontSize: 24,
                  fontWeight: 600,
                  lineHeight: '30px',
                  color: '#ffffff',
                }}
              >
                Microcontrollers & connector
              </span>
              <div css={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span
                  css={{
                    fontSize: 16,
                    fontWeight: 600,
                    lineHeight: '20px',
                    color: '#ffffff',
                  }}
                >
                  Connector
                </span>
                <span
                  css={{
                    fontSize: 14,
                    fontWeight: 300,
                    lineHeight: '17px',
                    color: '#ffffff',
                  }}
                >
                  USB Type-C
                </span>
              </div>
              <div css={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span
                  css={{
                    fontSize: 16,
                    fontWeight: 600,
                    lineHeight: '20px',
                    color: '#ffffff',
                  }}
                >
                  Certification level
                </span>
                <span
                  css={{
                    fontSize: 14,
                    fontWeight: 300,
                    lineHeight: '17px',
                    color: '#ffffff',
                  }}
                >
                  CC EAL5+
                </span>
              </div>
              <div css={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span
                  css={{
                    fontSize: 16,
                    fontWeight: 600,
                    lineHeight: '20px',
                    color: '#ffffff',
                  }}
                >
                  Chips
                </span>
                <span
                  css={{
                    fontSize: 14,
                    fontWeight: 300,
                    lineHeight: '17px',
                    color: '#ffffff',
                  }}
                >
                  ST33J2M0
                </span>
              </div>
            </div>
          </div>
          <div css={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            <div css={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <span
                css={{
                  fontSize: 24,
                  fontWeight: 600,
                  lineHeight: '30px',
                  color: '#ffffff',
                }}
              >
                Materials
              </span>
              <span
                css={{
                  fontSize: 14,
                  fontWeight: 300,
                  lineHeight: '17px',
                  color: '#ffffff80',
                }}
              >
                Brushed stainless steel and plastic.
              </span>
            </div>
          </div>
          <div css={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            <div css={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <span
                css={{
                  fontSize: 24,
                  fontWeight: 600,
                  lineHeight: '30px',
                  color: '#ffffff',
                }}
              >
                Compatibility
              </span>
              <span
                css={{
                  fontSize: 14,
                  fontWeight: 300,
                  lineHeight: '17px',
                  color: '#ffffff80',
                }}
              >
                64-bits desktop computer (Windows 8.1+, macOS 10.14+, Linux)
                excluding ARM Processors. Please note that our devices and the
                Ledger Live App are not compatible with Chromebooks. Also
                compatible with smartphones (iOS 13+ or Android 7+). The device
                is not suitable for mining
              </span>
            </div>
          </div>
          <div css={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            <div css={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <span
                css={{
                  fontSize: 24,
                  fontWeight: 600,
                  lineHeight: '30px',
                  color: '#ffffff',
                }}
              >
                Box Contents
              </span>
              <span
                css={{
                  fontSize: 14,
                  fontWeight: 300,
                  lineHeight: '17px',
                  color: '#ffffff80',
                }}
              >
                1 hardware wallet, 1 USB-C to USB-A cable, 1 getting started
                leaflet, 3 recovery sheets, 1 keychain strap
              </span>
            </div>
          </div>
        </div>
      </div>

      {children}
    </div>
  );
};
