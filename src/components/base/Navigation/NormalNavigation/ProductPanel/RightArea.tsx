import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Span } from '../../../Box';

export interface RightAreaProps {
  children?: ReactNode;
}

export const RightArea: FC<RightAreaProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <Box
      xs={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',

        padding: 64,
      }}
    >
      <Box
        xs={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        <Box xs={{ display: 'block' }}>
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 48H12C9.79086 48 8 46.2091 8 44V12H52C54.2091 12 56 13.7909 56 16V48H32L19 59"
              stroke="black"
              strokeWidth="4"
              strokeMiterlimit="10"
            />
            <path
              d="M27 24.8696V24.8696C27 22.1802 29.1802 20 31.8696 20H32.5059C34.9879 20 37 22.0304 37 24.5124V24.5124C37 26.2136 36.0295 27.777 34.5 28.5217V28.5217C32.9705 29.2665 32 30.8186 32 32.5198V34"
              stroke="black"
              strokeWidth="4"
              strokeMiterlimit="10"
            />
            <circle cx="32" cy="39" r="3" fill="#101111" />
          </svg>
        </Box>
        <Box xs={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          <Span
            xs={{
              ...theme.text.medium600,
              color: '#101111',
            }}
          >
            Getting Started
          </Span>
          <Box xs={{ display: 'block' }}>
            <Box xs={{}} />
          </Box>
        </Box>
        <Span
          xs={{
            ...theme.text.normal300,
            color: '#8a9195',
          }}
        >
          Get started quickly from 0 to 1, and most of the questions you may
          encounter can be answered here.
        </Span>
      </Box>

      {children}
    </Box>
  );
};
