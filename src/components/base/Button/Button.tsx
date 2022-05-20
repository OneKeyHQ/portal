import { FC } from 'react';

import { CSSObject, useTheme } from '@emotion/react';

import { Box, BoxProps } from '../Box';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

export interface ButtonProps extends BoxProps {
  disabled?: boolean;
  variant?: ButtonVariant;
  themeColor?: 'brand' | 'white';
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
}

const { assign } = Object;

export const buttonBaseStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '12px 16px',
  fontStyle: 'normal',
  cursor: 'pointer',
  borderRadius: 100,
};

export const Button: FC<ButtonProps> = (props) => {
  const theme = useTheme();
  const {
    children,
    disabled = false,
    variant = 'primary',
    // isLoading = false,
    themeColor = 'brand',
    rightIcon,
    leftIcon,
    ...otherProps
  } = props;

  let color700 = '';
  let color800 = '';
  let color900 = '';

  if (themeColor === 'brand') {
    color700 = theme.colors.brand300;
    color800 = theme.colors.brand400;
    color900 = theme.colors.brand500;
  }

  const buttonStyle: CSSObject = {
    ...theme.text.medium300,
    ...buttonBaseStyle,
  };

  if (disabled) {
    const disabledStyle: CSSObject = {
      opacity: 0.5,
      cursor: 'not-allowed',
    };
    assign(buttonStyle, disabledStyle);
  }

  if (variant === 'primary') {
    const primaryButtonStyle = {
      color: 'black',
      background: theme.colors.brand400,
      borderWidth: 0,
      ':hover': {
        background: theme.colors.test500,
        color: theme.colors.white,
      },
      ':active': {
        background: color900,
      },
    };

    assign(buttonStyle, primaryButtonStyle);
  } else if (variant === 'secondary') {
    const secondaryButtonStyle = {
      color: color800,
      background: 'white',
      borderWidth: 0,
      ':hover': {
        background: theme.colors.test500,
        color: theme.colors.white,
      },
      ':active': {
        color: color900,
      },
    };

    assign(buttonStyle, secondaryButtonStyle);
  } else if (variant === 'outline') {
    const outlineButtonStyle = {
      color: themeColor === 'white' ? theme.colors.white : theme.colors.gray900,
      background: 'transparent',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor:
        themeColor === 'white' ? theme.colors.white : theme.colors.gray900,
      ':hover': {
        color: themeColor === 'white' ? theme.colors.brand400 : color700,
        borderColor: themeColor === 'white' ? theme.colors.brand400 : color700,
      },
      ':active': {
        color: color900,
        borderColor: color900,
      },
    };

    assign(buttonStyle, outlineButtonStyle);
  } else if (variant === 'ghost') {
    const ghostButtonStyle = {
      color: color800,
      background: 'white',
      borderWidth: 0,
      ':hover': {
        color: color700,
      },
      ':active': {
        color: color900,
        background: theme.colors.gray400,
      },
    };

    assign(buttonStyle, ghostButtonStyle);
  }

  return (
    <Box as="button" {...otherProps} xs={buttonStyle}>
      {leftIcon && <Box css={{ marginRight: 8 }}>{leftIcon}</Box>}
      {children}
      {rightIcon && <Box css={{ marginLeft: 8 }}>{rightIcon}</Box>}
    </Box>
  );
};
