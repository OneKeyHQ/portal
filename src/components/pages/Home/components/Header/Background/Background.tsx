import { FC } from 'react';

import { useMediaQuery } from '../../../../../../hooks';
import { Img, VideoPlayer } from '../../../../../base';

import mobileImage from './mobile.jpg';
import posterImage from './poster.jpg';

export const Background: FC = () => {
  const mediaQuery = useMediaQuery();

  const style = {
    position: 'absolute',
    zIndex: 1,
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  } as const;

  const videoPlayer = (
    <VideoPlayer
      src="/video/home-hero.mp4"
      poster={posterImage}
      loop={false}
      style={style}
    />
  );

  const image = <Img xs={style} alt="background" src={mobileImage} />;

  return mediaQuery.medium ? videoPlayer : image;
};
