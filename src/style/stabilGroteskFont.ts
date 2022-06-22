import { css } from '@emotion/react';

import { staticAssetPrefix } from '../utils';

const path = staticAssetPrefix('/fonts/StabilGrotesk');

export const stabilGroteskFont = css`
  @font-face {
    font-family: 'Stabil Grotesk';
    font-display: block;
    font-weight: 400;
    font-style: normal;
    src: url('${path}/StabilGrotesk-Light.woff2') format('woff2'),
      url('${path}/StabilGrotesk-Light.woff') format('woff');
  }

  @font-face {
    font-family: 'Stabil Grotesk';
    font-display: block;
    font-weight: 600;
    font-style: normal;
    src: url('${path}/StabilGrotesk-Medium.woff2') format('woff2'),
      url('${path}/StabilGrotesk-Medium.woff') format('woff');
  }
`;
