import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, H1, Span } from '../../base';

import { useCryptos } from './useCryptos';

export interface MainTitleProps {
  children?: ReactNode;
}

export const MainTitle: FC<MainTitleProps> = (props) => {
  const { children } = props;
  const cryptosPageData = useCryptos();
  const theme = useTheme();

  return (
    <Box xs={{ textAlign: 'center', paddingTop: '16vh', paddingBottom: '8vh' }}>
      <H1
        css={{ color: theme.colors.test500 }}
        xs={theme.text.medium800}
        l={theme.text.medium900}
        xl={theme.text.medium1000}
      >
        {cryptosPageData.mainTitle.title}
        <br />

        <Span xs={{ color: theme.colors.brandAlt400 }}>
          {cryptosPageData.mainTitle.subtitle}
        </Span>
      </H1>

      <br />

      <Span
        css={{ color: theme.colors.test400 }}
        xs={theme.text.normal200}
        m={theme.text.normal300}
      >
        {cryptosPageData.mainTitle.description}
      </Span>

      {children}
    </Box>
  );
};
