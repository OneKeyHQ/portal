import { useEffect } from 'react';

import { Loader } from 'pixi.js';

import { useOneKeyMiniData } from '../../../../../data/useOneKeyMiniData';

import miniOutlineImage from './images/mini.svg';
import miniHover from './images/miniHover.png';
import todoOutlineImage from './images/todo.svg';
import touchOutlineImage from './images/touch.svg';
import touchHover from './images/touchHover.png';

export function useHardwareData() {
  const oneKeyData = useOneKeyMiniData();
  useEffect(() => {
    new Loader().add(miniHover).add(touchHover).load();
  }, []);
  return [
    {
      image: miniOutlineImage,
      hoverImage: miniHover,
      title: 'OneKey Mini',
      description: 'Mini sized, safety without compromise.',
      status: 'available',
      link: oneKeyData.shopLink,
    },
    {
      image: touchOutlineImage,
      title: 'OneKey Touch',
      hoverImage: touchHover,
      description:
        'All-new design, secure chip supercharged, beautiful and true color display.',
      status: 'available',
    },
    {
      image: todoOutlineImage,
      title: 'OneKey Pro',
      hoverImage: '',
      description:
        'Biometric tech, optical encryption, so many reasons to go Pro.',
      status: 'coming-soon',
    },
  ] as const;
}
