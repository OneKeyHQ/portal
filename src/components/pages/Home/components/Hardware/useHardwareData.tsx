import { useEffect } from 'react';

import { Loader } from 'pixi.js';

import { useOneKeyMiniData } from '../../../../../data/useOneKeyMiniData';

import image1 from './images/1.svg';
import image2 from './images/2.svg';
import hardware from './images/home-hardware-mini-2.png';

export function useHardwareData() {
  const oneKeyData = useOneKeyMiniData();

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
      link: oneKeyData.shopLink,
    },
    {
      image: image2,
      title: 'OneKey Touch',
      hoverImage: '',
      description:
        'All-new design, secure chip supercharged, beautiful and true color display.',
      status: 'coming-soon',
    },
    {
      image: image2,
      title: 'OneKey Pro',
      hoverImage: '',
      description:
        'Biometric tech, optical encryption, so many reasons to go Pro.',
      status: 'coming-soon',
    },
  ] as const;
}
