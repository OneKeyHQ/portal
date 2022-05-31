import React from 'react';

import { useMediaQuery } from '../../../../../../hooks';
import { isBrowser } from '../../../../../../utils';
import { Box, Img, VideoPlayer } from '../../../../../base';

import defaultBackgroundImage from './images/background.jpg';
import homeVideoEnd from './images/homeVideoEnd.jpg';
import mobileBackground from './images/mobileBackground.jpg';

export const Background: React.FC = () => {
  const style = {
    position: 'absolute',
    zIndex: 1,
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  } as const;

  const [isVideoEnd, setIsVideoEnd] = React.useState(false);
  const mediaQuery = useMediaQuery();

  const onVideoEnded = () => {
    setIsVideoEnd(true);
  };

  return (
    <>
      <Box xs={{ display: 'block' }} m={{ display: 'none' }}>
        <Box
          xs={{
            backgroundImage: `url(${mobileBackground})`,
            backgroundSize: 'cover',
            ...style,
          }}
        />
      </Box>
      <Box xs={{ display: 'none' }} m={{ display: 'block' }}>
        <Img src={defaultBackgroundImage} alt="background" css={style} />
        {isBrowser() && (
          <VideoPlayer
            onEnded={onVideoEnded}
            src={
              mediaQuery.xlarge
                ? '/video/home-hero-animation-4k.mp4'
                : '/video/home-hero-animation.mp4'
            }
            loop={false}
            style={style}
          />
        )}

        <Img
          src={homeVideoEnd}
          alt="background"
          css={{
            ...style,
            transition: 'opacity 0.3s linear',
            opacity: isVideoEnd ? 1 : 0,
          }}
        />
      </Box>
    </>
  );
};
