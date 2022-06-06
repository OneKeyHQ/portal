import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import {
  AndroidIcon,
  AppStoreIcon,
  Box,
  Button,
  Container,
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
    <Container xs={{ height: '100%' }}>
      <Flex
        xs={{
          height: '100%',
          width: '50%',
          paddingBottom: 40,
          paddingTop: 140,
          paddingRight: 64,
          paddingLeft: 0,
          position: 'relative',
          zIndex: 1,
          flexDirection: 'column',
          gap: 16,
        }}
      >
        <Flex
          xs={{
            flex: 1,
            gap: 32,
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Span xs={{ ...theme.text.medium900 }}>
            Bring your <br /> crypto assets <br /> to mobile, too.
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
              <Span xs={{ ...theme.text.normal100 }}>
                v2.12.3, for iOS 13.0+
              </Span>
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
    </Container>
  );
};
