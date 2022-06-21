import React, { FC } from 'react';

import { Global, ThemeProvider } from '@emotion/react';
// eslint-disable-next-line import/no-unresolved
import { ClickToComponent } from 'click-to-react-component';

import { ResponsiveIndicator } from './components/base';
import { OpenBrowserBanner } from './components/common';
import './style/global.less';
import { stabilGroteskFont } from './style/stabilGroteskFont';
import { theme } from './theme';

type WrapAppComponent = FC<{
  children: React.ReactNode;
}>;

const WrapApp: WrapAppComponent = (props) => {
  const { children } = props;

  return (
    <ThemeProvider theme={theme}>
      <Global styles={stabilGroteskFont} />
      {children}
      <ClickToComponent />
      <ResponsiveIndicator />
      <OpenBrowserBanner />
    </ThemeProvider>
  );
};

export default WrapApp;
