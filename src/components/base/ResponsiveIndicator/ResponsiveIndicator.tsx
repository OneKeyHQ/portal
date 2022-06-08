import { FC, ReactNode, useState } from 'react';

import { useMediaQuery } from '../../../hooks';
import { Box } from '../Box';

export interface ResponsiveIndicatorProps {
  children?: ReactNode;
}

export const ResponsiveIndicator: FC<ResponsiveIndicatorProps> = (props) => {
  const { children } = props;
  const mediaQuery = useMediaQuery();
  const { small, medium, large, xlarge, xxlarge } = mediaQuery;
  let currentMediaQuery = 'xsmall';
  const [isHidden, setIsHidden] = useState(false);

  // click it and hide
  const handleClick = () => {
    setIsHidden(true);
  };

  if (isHidden || process.env.NODE_ENV === 'production') {
    return null;
  }

  if (xxlarge) {
    currentMediaQuery = 'xxlarge';
  } else if (xlarge) {
    currentMediaQuery = 'xlarge';
  } else if (large) {
    currentMediaQuery = 'large';
  } else if (medium) {
    currentMediaQuery = 'medium';
  } else if (small) {
    currentMediaQuery = 'small';
  }

  return (
    <Box
      onClick={handleClick}
      xs={{
        position: 'fixed',
        left: 0,
        bottom: 0,
        background: 'white',
        padding: '.3rem .6rem',
        fontWeight: 'bold',
        opacity: 0.8,
        zIndex: 99999,
      }}
    >
      {currentMediaQuery}
      <br />
      {/* {JSON.stringify(mediaQuery, null, 2)} */}
      {children}
    </Box>
  );
};
