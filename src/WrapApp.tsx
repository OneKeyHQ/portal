import React, { FC } from 'react';

import { ThemeProvider } from '@emotion/react';
// eslint-disable-next-line import/no-unresolved
import { ClickToComponent } from 'click-to-react-component';

import './style/global.less';
import './style/stabilGroteskFont.less';
import { theme } from './theme';

type WrapAppComponent = FC<{
  children: React.ReactNode;
}>;

const WrapApp: WrapAppComponent = (props) => {
  const { children } = props;

  return (
    <ThemeProvider theme={theme}>
      {children}
      <ClickToComponent />
    </ThemeProvider>
  );
};

export default WrapApp;
