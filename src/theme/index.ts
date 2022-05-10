export { useTheme } from '@emotion/react';

export const theme = {
  colors: {
    gray300: '#F7F7FB',
    gray400: '#F3F4F6',
    gray500: '#CECED3',
    gray600: '#9C9DA7',
    gray700: '#6B6D7A',
    gray800: '#393C4E',
    gray900: '#080B22',
    brand50: '#EBF9EC',
    brand100: '#D7F4DA',
    brand200: '#A3E5A9',
    brand300: '#67D572',
    brand400: '#33C641',
    brand500: '#00B812',
    brand600: '#00930E',
    brand700: '#006F0B',
    brand800: '#005809',
    brand900: '#004206',
    transparent: 'transparent',
  },
  background: {
    test100: 'linear-gradient(0deg, #F0F1F2, #F0F1F2), #EEEEEE',
    test500: '#101111',
  },
  gradients: {},
  text: {},
  font: {
    size50: '12px',
    size75: '14px',
    size100: '16px',
    size200: '18px',
    size300: '20px',
    size400: '24px',
    size500: '30px',
    size600: '36px',
    size700: '48px',
    size800: '60px',
    size900: '72px',
    size1000: '84px',
    size1100: '96px',

    weight: {
      thin: 100,
      ultraLight: 200,
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 800,
      black: 900,
    },
  },
  transitions: {
    allCubicBezier: 'all .3s cubic-bezier(.4,0,.2,1)',
    allEaseOut: 'all .3s ease-out',
    allEaseIn: 'all .3s ease-in',
    allEase: 'all .3s ease',
    allLinear: 'all .3s linear',
  },
  transforms: {
    rotate180: 'rotate(180deg)',
    rotate90: 'rotate(90deg)',
    rotate0: 'rotate(0deg)',
  },
  zIndex: {
    top: 10000,
    modal: 9000,
    overlay: 8000,
  },
};

export type MediaBreakpointsKey = keyof typeof mediaBreakpoints;

export const mediaBreakpoints = {
  mobile: 576,
  tablet: 768,
  laptop: 992,
  desktop: 1400,
  xxl: 1600,
  xxxl: 1800,
};

export const mediaBreakpointsKeys = Object.keys(
  mediaBreakpoints,
) as MediaBreakpointsKey[];

export const containerMaxWidth = {
  sm: 540,
  md: 720,
  lg: 1200,
  xl: 1300,
  xxl: 1400,
  xxxl: 1500,
};

export const LanguageMap = {
  zh: '中文',
  en: 'English',
};

export type LanguageMapKeys = keyof typeof LanguageMap;

declare module '@emotion/react' {
  type CustomTheme = typeof theme;

  export interface Theme extends CustomTheme {
    mediaBreakpoints: typeof mediaBreakpoints;
  }
}
