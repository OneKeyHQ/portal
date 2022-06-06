import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import {
  AndroidIcon,
  AppStoreIcon,
  Box,
  Button,
  Divider,
  Flex,
  Span,
} from '../../../../base';

import { FAQ } from './FAQ';

export interface ContentProps {
  children?: ReactNode;
}

const iconSize = {
  width: 24,
  height: 24,
};

export const Content: FC<ContentProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <Box xs={{ position: 'relative', zIndex: 1 }}>
      <Flex xs={{ flexDirection: 'column', gap: 32 }}>
        <Span xs={{ ...theme.text.medium900 }}>
          Bring your crypto assets to mobile, too.
        </Span>

        <Flex xs={{ gap: 16 }}>
          <Flex xs={{ flexDirection: 'column', alignItems: 'center' }}>
            <Box xs={{ paddingBottom: 8 }}>
              <Button
                leftIcon={<AppStoreIcon {...iconSize} />}
                size="large"
                variant="outlined"
                xs={{ minWidth: 220 }}
              >
                App Store
              </Button>
            </Box>
            <Span xs={{ ...theme.text.normal100 }}>v2.12.3, for iOS 13.0+</Span>
            <Span xs={{ ...theme.text.normal100 }}>
              Not available on the Chinese App Store
            </Span>
          </Flex>

          <Flex xs={{ flexDirection: 'column', alignItems: 'center' }}>
            <Box xs={{ paddingBottom: 8 }}>
              <Button
                leftIcon={<AndroidIcon {...iconSize} />}
                variant="outlined"
                size="large"
                xs={{ minWidth: 220 }}
              >
                Android
              </Button>
            </Box>

            <Span xs={{ ...theme.text.normal100 }}>
              v2.12.3, for Android 8.0+
            </Span>
          </Flex>
        </Flex>

        <Divider />

        <FAQ
          titleString="iOS FAQ"
          questions={[
            {
              textString: 'How to register an account?',
            },
            {
              textString: 'How to activate discover page?',
            },
          ]}
        />
      </Flex>

      {children}
    </Box>
  );
};
