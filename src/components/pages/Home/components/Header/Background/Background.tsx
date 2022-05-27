import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import { Box, Img, VideoPlayer } from '../../../../../base';

import defaultBackgroundImage from './images/background.jpg';

export const Background: React.FC = () => {
  const style = {
    position: 'absolute',
    zIndex: 1,
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  } as const;

  return (
    <>
      <Box xs={{ display: 'block' }} m={{ display: 'none' }}>
        <StaticImage
          style={style}
          quality={100}
          layout="constrained"
          alt="background"
          src="./images/mobile.jpg"
        />
      </Box>
      <Box xs={{ display: 'none' }} m={{ display: 'block' }}>
        <Img src={defaultBackgroundImage} alt="background" css={style} />
        <VideoPlayer src="/video/home-hero.mp4" loop={false} style={style} />
      </Box>
    </>
  );
};
