import { CSSObject, useTheme } from '@emotion/react';

const { assign } = Object;

export const buttonBaseStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '12px 16px',
  cursor: 'pointer',
  borderWidth: 1,
  borderStyle: 'solid',
  borderRadius: 100,
};

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonVariant = 'filled' | 'outlined' | 'text';
export type ThemeColor = 'brand' | 'dark' | 'gray';

export interface UseButtonStyleProps {
  size?: ButtonSize;
  variant?: ButtonVariant;
  themeColor?: ThemeColor;
  disabled?: boolean;
  fillHeight?: boolean;
}

export function useButtonStyle(
  useButtonStyleProps: UseButtonStyleProps,
): CSSObject {
  const theme = useTheme();
  const { colors: themeColors } = theme;
  const {
    size = 'medium',
    variant = 'filled',
    themeColor = 'brand',
    disabled = false,
    fillHeight = false,
  } = useButtonStyleProps;

  const buttonStyle = {
    ...buttonBaseStyle,
  };

  if (disabled) {
    assign(buttonStyle, {
      cursor: 'not-allowed',
    });
  }

  if (fillHeight) {
    assign(buttonStyle, {
      height: '100%',
    });
  }

  if (size === 'small') {
    assign(buttonStyle, {
      padding: '8px 16px',
      ...theme.text.normal200,
    });
  } else if (size === 'medium') {
    assign(buttonStyle, {
      padding: '14px 16px',
      ...theme.text.medium300,
    });
  } else if (size === 'large') {
    assign(buttonStyle, {
      padding: '18px 32px',
      ...theme.text.medium300,
    });
  }

  if (themeColor === 'brand') {
    if (variant === 'filled') {
      assign(buttonStyle, {
        backgroundColor: themeColors.brandAlt400,
        borderColor: themeColors.brandAlt400,
        color: themeColors.test500,
        ':hover': {
          color: themeColors.white,
          backgroundColor: themeColors.test500,
          borderColor: themeColors.test500,
        },
        ':disabled': {
          color: themeColors.test300,
          backgroundColor: themeColors.test200,
          borderColor: themeColors.test200,
        },
      });
    } else if (variant === 'outlined') {
      assign(buttonStyle, {
        backgroundColor: themeColors.transparent,
        borderColor: themeColors.test500,
        color: themeColors.test500,
        ':hover': {
          color: themeColors.white,
          backgroundColor: themeColors.test500,
          borderColor: themeColors.test500,
        },
        ':disabled': {
          backgroundColor: themeColors.transparent,
          borderColor: themeColors.test200,
          color: themeColors.test200,
        },
      });
    } else if (variant === 'text') {
      assign(buttonStyle, {
        backgroundColor: themeColors.transparent,
        borderColor: themeColors.transparent,
        color: themeColors.test500,
        ':hover': {
          color: themeColors.test300,
        },
        ':disabled': {
          color: themeColors.test200,
        },
      });
    }
  } else if (themeColor === 'dark') {
    if (variant === 'outlined') {
      assign(buttonStyle, {
        backgroundColor: themeColors.transparent,
        borderColor: themeColors.white,
        color: themeColors.white,
        ':hover': {
          color: themeColors.test500,
          backgroundColor: themeColors.white,
          borderColor: themeColors.white,
        },
        ':disabled': {
          opacity: 0.5,
        },
      });
    }
  }

  return buttonStyle;
}
