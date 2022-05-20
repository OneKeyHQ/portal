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
      width: 128,
    },
    svg: {
      transition: theme.transitions.allEase,
    },
    ':active svg': {
      marginRight: -20,
      transform: 'scale(1.1)',
    },
  };

  const style = {
    cursor: disabled ? 'not-allowed' : 'pointer',
    height: 64,
    width: 64,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.background.test500,
    borderRadius: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: theme.transitions.allEase,
    opacity: 0.5,
  };

  return (
    <Box
      {...otherProps}
      css={{
        ...style,
        ...(disabled ? {} : activeStyle),
      }}
    >
      <Box
        css={{
          transform: direction === 'right' ? 'rotate(0deg)' : 'rotate(-180deg)',
        }}
      >
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.5866 11.4999L10.7983 1.70684L12.2129 0.292969L24.4139 12.4999L12.2129 24.7068L10.7983 23.293L20.5866 13.4999H0V11.4999H20.5866Z"
            fill="currentColor"
          />
        </svg>
      </Box>

      {children}
    </Box>
  );
};
