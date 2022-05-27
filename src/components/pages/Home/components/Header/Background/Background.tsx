import { FC } from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import { useMediaQuery } from '../../../../../../hooks';
import { VideoPlayer } from '../../../../../base';

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

  return mediaQuery.medium ? (
    <VideoPlayer src="/video/home-hero.mp4" loop={false} style={style} />
  ) : (
    <StaticImage
      style={style}
      quality={100}
      layout="constrained"
      alt="background"
      src="./mobile.jpg"
    />
  );
};
