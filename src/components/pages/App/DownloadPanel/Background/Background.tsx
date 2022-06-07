import { FC, ReactNode, useEffect } from 'react';

import { Loader } from 'pixi.js';

import { Box, Img } from '../../../../base';
import { useCurrentTabAtom } from '../atom';

import browserExtensionImage from './images/browser.jpg';
import desktopImage from './images/desktop.jpg';
import mobileImage from './images/mobile.jpg';
import webImage from './images/web.jpg';

const imageMap = {
  browserExtension: browserExtensionImage,
  desktop: desktopImage,
  mobile: mobileImage,
  web: webImage,
};

export interface BackgroundProps {
  children?: ReactNode;
}

export const Background: FC<BackgroundProps> = (props) => {
  const { children } = props;
  const [currentTab] = useCurrentTabAtom();

  useEffect(() => {
    new Loader()
      .add([desktopImage, browserExtensionImage, webImage, mobileImage])
      .load();
  }, []);

  return (
    <Box
      xs={{
        position: 'absolute',
        height: '100%',
        width: '100%',
      }}
    >
      <Img
        xs={{
          marginLeft: 'auto',
          display: 'block',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        l={{ width: '50%' }}
        src={imageMap[currentTab]}
      />

      <Box
        xs={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          top: 0,
          right: 0,
          zIndex: 99999,
          background:
            'linear-gradient(180deg, rgba(215, 218, 220, 0) 51.88%, rgba(231, 236, 239, 0.97) 71.45%, #E7ECEF 77.01%)',
        }}
        l={{ display: 'none' }}
      />

      {children}
    </Box>
  );
};
