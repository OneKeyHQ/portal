import { FC } from 'react';

import { Box, BoxProps } from '../Box';

import { ButtonVariant, ThemeColor, useButtonStyle } from './useButtonStyle';

export interface ButtonProps extends BoxProps {
  disabled?: boolean;
  variant?: ButtonVariant;
  themeColor?: ThemeColor;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    disabled = false,
    variant = 'filled',
    themeColor = 'brand',
    rightIcon,
    leftIcon,
    ...otherProps
  } = props;

  const buttonStyle = useButtonStyle({
    themeColor,
    variant,
    disabled,
  });

  return (
    <Box as="button" disabled={disabled} {...otherProps} xs={buttonStyle}>
      {leftIcon && <Box css={{ marginRight: 8 }}>{leftIcon}</Box>}
      {children}
      {rightIcon && <Box css={{ marginLeft: 8 }}>{rightIcon}</Box>}
    </Box>
  );
};
