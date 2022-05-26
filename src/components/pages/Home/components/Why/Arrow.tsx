import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, BoxProps } from '../../../../base';

export interface ArrowProps extends BoxProps {
  children?: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  disabled?: boolean;
}

export const Arrow: FC<ArrowProps> = (props) => {
  const { children, direction, disabled = false, ...otherProps } = props;
  const theme = useTheme();

  const activeStyle = {
    ':hover': {
      color: 'white',
      backgroundColor: '#101111',
      borderColor: '#101111',
      opacity: 1,
    },
    svg: {
      transform: 'scale(1)',
      transition: theme.transitions.allEase,
    },
    ':active svg': {
      transform: 'scale(1.1)',
    },
  };

  const style = {
    color: theme.background.test500,
    cursor: disabled ? 'not-allowed' : 'pointer',
    height: 64,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.background.test500,
    borderRadius: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: theme.transitions.allEase,
    opacity: disabled ? 0.4 : 0.5,
    paddingRight: 20,
    paddingLeft: 20,
  };

  return (
    <Box
      xs={{
        ...style,
        ...(disabled ? {} : activeStyle),
      }}
      externalProps={otherProps}
    >
      <Box
        css={{
          transform: direction === 'right' ? 'rotate(0deg)' : 'rotate(-180deg)',
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.12012 15L23.0401 15L23.0401 17L5.12012 17L5.12012 15Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25.671 14.8222L17.2412 6.04117L18.5989 4.62695L27.0287 13.408C28.4033 14.8399 28.4033 17.1615 27.0287 18.5935L18.5989 27.3745L17.2412 25.9603L25.671 17.1792C26.2959 16.5284 26.2959 15.4731 25.671 14.8222Z"
            fill="currentColor"
          />
        </svg>
      </Box>

      {children}
    </Box>
  );
};
