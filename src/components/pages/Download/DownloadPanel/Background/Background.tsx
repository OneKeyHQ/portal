import { FC, ReactNode, useEffect } from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import { Loader } from 'pixi.js';

import { Box } from '../../../../base';
import { useCurrentTabAtom } from '../atom';

import browserExtensionImage from './images/browser.jpg';
import desktopImage from './images/desktop.jpg';
import mobileImage from './images/mobile.jpg';
import webImage from './images/web.jpg';

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

  const imageStyle = {
    marginLeft: 'auto',
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  } as const;

  return (
    <Box
      xs={{
        position: 'absolute',
        height: '100%',
        width: '100%',
      }}
    >
      <Box
        xs={{ width: '100%', height: '100%' }}
        l={{ width: '50%', marginLeft: 'auto' }}
      >
        {currentTab === 'browserExtension' && (
          <StaticImage
            style={imageStyle}
            src="./images/browser.jpg"
            alt="browser"
          />
        )}

        {currentTab === 'desktop' && (
          <StaticImage
            style={imageStyle}
            src="./images/desktop.jpg"
            alt="desktop"
          />
        )}

        {currentTab === 'mobile' && (
          <StaticImage
            style={imageStyle}
            src="./images/mobile.jpg"
            alt="mobile"
          />
        )}

        {(currentTab === 'web' || currentTab === 'bridge') && (
          <StaticImage style={imageStyle} src="./images/web.jpg" alt="web" />
        )}
      </Box>

      <Box
        xs={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          top: 0,
          right: 0,
          zIndex: 10,
          background:
            'linear-gradient(180deg, rgba(215, 218, 220, 0) 51.88%, rgba(231, 236, 239, 0.97) 71.45%, #E7ECEF 77.01%)',
        }}
        l={{ display: 'none' }}
      />

      {children}
    </Box>
  );
};
