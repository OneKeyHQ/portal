import { FC } from 'react';

import { Box, BoxProps } from '../Box';

import { UseButtonStyleProps, useButtonStyle } from './useButtonStyle';

export interface ButtonProps
  extends Omit<BoxProps, 'size'>,
    UseButtonStyleProps {
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
    fillHeight,
    fillWidth,
    size,
    ...otherProps
  } = props;

  const buttonStyle = useButtonStyle({
    fillHeight,
    fillWidth,
    themeColor,
    variant,
    disabled,
    size,
  });

  return (
    <Box
      as="button"
      disabled={disabled}
      xs={buttonStyle}
      externalProps={otherProps}
    >
      {leftIcon && <Box css={{ marginRight: 8 }}>{leftIcon}</Box>}
      {children}
      {rightIcon && <Box css={{ marginLeft: 8 }}>{rightIcon}</Box>}
    </Box>
  );
};
