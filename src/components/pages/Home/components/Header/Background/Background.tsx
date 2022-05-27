import React from 'react';

import { isBrowser } from '../../../../../../utils';
import { Box, Img, VideoPlayer } from '../../../../../base';

import defaultBackgroundImage from './images/background.jpg';
import mobile from './images/mobile.jpg';

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
        <Img src={mobile} style={style} />
      </Box>
      <Box xs={{ display: 'none' }} m={{ display: 'block' }}>
        <Img src={defaultBackgroundImage} alt="background" css={style} />
        {isBrowser() && (
          <VideoPlayer src="/video/home-hero.mp4" loop={false} style={style} />
        )}
      </Box>
    </>
  );
};
