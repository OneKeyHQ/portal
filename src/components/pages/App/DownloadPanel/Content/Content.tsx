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
          <Button
            leftIcon={<AppStoreIcon {...iconSize} />}
            size="large"
            variant="outlined"
          >
            App Store
          </Button>

          <Button
            leftIcon={<AndroidIcon {...iconSize} />}
            variant="outlined"
            size="large"
          >
            Android
          </Button>
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
