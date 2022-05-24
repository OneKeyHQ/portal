import { FC } from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import { useMediaQuery } from '../../../../../../hooks';
import { isBrowser } from '../../../../../../utils';
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

  if (!isBrowser()) {
    return (
      <StaticImage
        style={style}
        quality={100}
        layout="constrained"
        alt="background"
        src="./background.jpg"
      />
    );
  }

  return mediaQuery.medium ? videoPlayer : image;
};
