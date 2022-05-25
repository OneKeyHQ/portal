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
    brand400: '#16D629',
    brand500: '#00B812',
    brand600: '#00930E',
    brand700: '#006F0B',
    brand800: '#005809',
    brand900: '#004206',
    brandAlt300: '#57E668',
    brandAlt400: '#45E555',
    brandAlt500: '#00B812',
    white: '#FFFFFF',
    transparent: 'transparent',
    test100: '#F0F1F2',
    test200: '#DADEE1',
    test300: '#8A9195',
    test400: '#313638',
    test500: '#101111',
  },
  background: {
    test100: '#F0F1F2',
    test300: '#8A9195',
    test500: '#101111',
  },
  gradients: {},
  text: {
    medium100: {
      fontWeight: 600,
      fontSize: 12,
      lineHeight: '15px',
    },
    medium200: {
      fontWeight: 600,
      fontSize: 14,
      lineHeight: '17px',
    },
    medium300: {
      fontWeight: 600,
      fontSize: 16,
      lineHeight: '20px',
    },
    medium400: {
      fontWeight: 600,
      fontSize: 18,
      lineHeight: '24px',
    },
    medium500: {
      fontWeight: 600,
      fontSize: 20,
      lineHeight: '26px',
    },
    medium600: {
      fontWeight: 600,
      fontSize: 24,
      lineHeight: '30px',
    },
    medium700: {
      fontWeight: 600,
      fontSize: 30,
      lineHeight: '36px',
    },
    medium800: {
      fontWeight: 600,
      fontSize: 40,
      lineHeight: '46px',
    },
    medium900: {
      fontWeight: 600,
      fontSize: 52,
      lineHeight: '56px',
    },
    medium1000: {
      fontWeight: 600,
      fontSize: 60,
      lineHeight: '64px',
    },
    medium1100: {
      fontWeight: 600,
      fontSize: 72,
      lineHeight: '76px',
    },
    medium1200: {
      fontWeight: 600,
      fontSize: 84,
      lineHeight: '88px',
    },
    medium1300: {
      fontWeight: 600,
      fontSize: 96,
      lineHeight: '100px',
    },
    normal100: {
      fontWeight: 400,
      fontSize: 12,
      lineHeight: '15px',
    },
    normal200: {
      fontWeight: 400,
      fontSize: 14,
      lineHeight: '17px',
    },
    normal300: {
      fontWeight: 400,
      fontSize: 16,
      lineHeight: '20px',
    },
    normal400: {
      fontWeight: 400,
      fontSize: 18,
      lineHeight: '24px',
    },
    normal500: {
      fontWeight: 400,
      fontSize: 20,
      lineHeight: '26px',
    },
    normal600: {
      fontWeight: 400,
      fontSize: 24,
      lineHeight: '30px',
    },
    normal700: {
      fontWeight: 400,
      fontSize: 30,
      lineHeight: '36px',
    },
    normal800: {
      fontWeight: 400,
      fontSize: 40,
      lineHeight: '46px',
    },
    normal900: {
      fontWeight: 400,
      fontSize: 52,
      lineHeight: '56px',
    },
    normal1000: {
      fontWeight: 400,
      fontSize: 60,
      lineHeight: '64px',
    },
    normal1100: {
      fontWeight: 400,
      fontSize: 72,
      lineHeight: '76px',
    },
    normal1200: {
      fontWeight: 400,
      fontSize: 84,
      lineHeight: '88px',
    },
    normal1300: {
      fontWeight: 400,
      fontSize: 96,
      lineHeight: '100px',
    },
  },
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
    motion: 'all 0.1s linear',
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
  small: 414,
  medium: 960,
  large: 1200,
  xlarge: 1440,
  xxlarge: 1920,
};

export const mediaBreakpointsKeys = Object.keys(
  mediaBreakpoints,
) as MediaBreakpointsKey[];

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
