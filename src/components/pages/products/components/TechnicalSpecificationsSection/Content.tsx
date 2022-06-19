import { FC } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Divider, Flex, Span } from '../../../../base';

type MarkdownContentItem = {
  type: string;
  content: string;
  key?: string;
  children?: MarkdownContentItem[];
};

type MarkdownContent = {
  content: MarkdownContentItem[];
};

export interface ContentProps {
  text?: MarkdownContent;
}

export const Content: FC<ContentProps> = () => {
  const theme = useTheme();
  const { medium300, medium600, normal200, normal100 } = theme.text;
  const m3 = { ...medium300, opacity: 0.5 };
  const n2 = { ...normal200, opacity: 0.5 };
  const n1 = { ...normal100, opacity: 0.5 };

  return (
    <Flex
      xs={{ flexDirection: 'column', color: theme.colors.white, gap: 64 }}
      m={{ paddingTop: 36 }}
      l={{ paddingTop: 56 }}
      xl={{ flexDirection: 'row' }}
    >
      <Flex xs={{ flexDirection: 'column', gap: 64, flex: 1 }}>
        {/*  */}
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
        {/*  */}
        <Flex xs={{ flexDirection: 'column', gap: 40 }}>
          <Flex xs={{ flexDirection: 'column', gap: 16 }}>
            <Span xs={medium600}>Microcontrollers & connector</Span>
            <Flex xs={{ flexDirection: 'column', gap: 4 }}>
              <Span xs={m3}>Connector</Span>
              <Span xs={n2}>USB Type-C</Span>
            </Flex>
            <Flex xs={{ flexDirection: 'column', gap: 4 }}>
              <Span xs={m3}>Certification level</Span>
              <Span xs={n2}>EAL6+</Span>
            </Flex>
            <Flex xs={{ flexDirection: 'column', gap: 4 }}>
              <Span xs={m3}>Chips</Span>
              <Span xs={n2}>STM32F405RGT6</Span>
            </Flex>
          </Flex>
        </Flex>

        {/*  */}
        <Flex xs={{ flexDirection: 'column', gap: 40 }}>
          <Flex xs={{ flexDirection: 'column', gap: 16 }}>
            <Span xs={medium600}>Materials</Span>
            <Span xs={n2}>Plastic</Span>
          </Flex>
        </Flex>
      </Flex>
      <Flex xs={{ flexDirection: 'column', gap: 64, flex: 1 }}>
        <Flex xs={{ flexDirection: 'column', gap: 40 }}>
          <Flex xs={{ flexDirection: 'column', gap: 16 }}>
            <Span xs={medium600}>Compatibility</Span>
            <Flex xs={{ flexDirection: 'column' }}>
              <Span xs={n2}>Windows 10+,</Span>
              <Span xs={n2}>macOS 10.8+,</Span>
              <Span xs={n2}>Linux (Ubuntu 12.04+, Fedora 21+, Debian 8)</Span>
            </Flex>
          </Flex>
        </Flex>
        <Flex xs={{ flexDirection: 'column', gap: 40 }}>
          <Flex xs={{ flexDirection: 'column', gap: 16 }}>
            <Span xs={medium600}>Flex Contents</Span>
            <Span xs={n2}>1 hardware wallet, 1 sticker, 2 recovery sheet</Span>
          </Flex>

          <Flex xs={{ flexDirection: 'column', gap: 1 }}>
            <Box xs={{ opacity: 0.5, paddingBottom: 12 }}>
              <Divider color={theme.colors.white} />
            </Box>

            <Span xs={n1}>1. There is no battery in the device.</Span>
            <Span xs={n1}>
              2. The device does not support Bluetooth connectivity.
            </Span>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
