import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Flex, Span } from '../../base';

export interface MainTitleProps {
  children?: ReactNode;
}

export const MainTitle: FC<MainTitleProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <Flex
      xs={{
        height: 400,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 80,
      }}
    >
      <Span xs={{ ...theme.text.medium1000 }}>Affiliate Program</Span>
      <Span xs={{ ...theme.text.normal400, paddingTop: 20 }}>
        Asia's most trusted and easy-to-use hardware wallet.
      </Span>

      {children}
    </Flex>
  );
};
