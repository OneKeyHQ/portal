import { ComponentClass, FC, FunctionComponent, HTMLProps } from 'react';

import { CSSObject, Interpolation, Theme, jsx } from '@emotion/react';
import deepmerge from 'deepmerge';

import { mediaBreakpoints } from '../../../theme';

export interface ResponsiveStyleProps {
  xs?: Interpolation<Theme> | CSSObject;
  s?: Interpolation<Theme> | CSSObject;
  m?: Interpolation<Theme> | CSSObject;
  l?: Interpolation<Theme> | CSSObject;
  xl?: Interpolation<Theme> | CSSObject;
  xxl?: Interpolation<Theme> | CSSObject;
}

export type ResponsiveStyleKeys = keyof ResponsiveStyleProps;

export interface StyleProps extends ResponsiveStyleProps {
  css?: Interpolation<Theme> | CSSObject;
}

export interface BoxProps
  extends Omit<HTMLProps<HTMLElement>, 'as'>,
    StyleProps {
  children?: React.ReactNode;
  as?: string | FunctionComponent | ComponentClass;
  externalProps?: StyleProps;
  hiddenRange?: [ResponsiveStyleKeys, ResponsiveStyleKeys];
  isMounted?: [ResponsiveStyleKeys, ResponsiveStyleKeys];
}

const mq = (bp: number) => `@media (min-width: ${bp}px)`;

export const Box: FC<BoxProps> = (props) => {
  const {
    children,
    as = 'div',
    css = {},
    xs = {},
    s = {},
    m = {},
    l = {},
    xl = {},
    xxl = {},
    externalProps = {},
    ...otherProps
  } = props;

  const {
    css: externalCss = {},
    xs: externalXs = {},
    s: externalS = {},
    m: externalM = {},
    l: externalL = {},
    xl: externalXl = {},
    xxl: externalXxl = {},
    ...otherExternalProps
  } = externalProps;

  const innerCSS = deepmerge.all([
    xs,
    {
      [mq(mediaBreakpoints.small)]: s,
      [mq(mediaBreakpoints.medium)]: m,
      [mq(mediaBreakpoints.large)]: l,
      [mq(mediaBreakpoints.xlarge)]: xl,
      [mq(mediaBreakpoints.xxlarge)]: xxl,
    },
    css,
    externalCss,
    externalXs,
    externalS,
    externalM,
    externalL,
    externalXl,
    externalXxl,
  ] as CSSObject[]);

  const jsxProps = {
    css: innerCSS,
    ...otherProps,
    ...otherExternalProps,
  };

  return jsx(as, jsxProps, children);
};
