import { useEffect } from 'react';

import { Loader } from 'pixi.js';

import image1 from './images/1.svg';
import image2 from './images/2.svg';
import hardware from './images/home-hardware-mini-2.png';

export function useHardwareData() {
  useEffect(() => {
    new Loader().add(hardware).load();
  }, []);

  return [
    {
      image: image1,
      hoverImage: hardware,
      title: 'OneKey Mini',
      description: 'Mini sized, safety without compromise.',
      status: 'available',
    },
    {
      image: image2,
      title: 'OneKey Touch',
      hoverImage: '',
      description:
        'Secure, buy, exchange, grow your crypto and manage your NFTs with our new Bluetooth-enabled hardware wallet. ',
      status: 'coming-soon',
    },
    {
      image: image2,
      title: 'OneKey Pro',
      hoverImage: '',
      description:
        'Secure, trade, grow your crypto and manage your NFTs with our new Bluetooth-enabled hardware wallet. ',
      status: 'coming-soon',
    },
  ] as const;
}
