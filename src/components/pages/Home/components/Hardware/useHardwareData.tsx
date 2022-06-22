import { useEffect } from 'react';

import { Loader } from 'pixi.js';

import { useOneKeyProduct } from '../../../../../data/useOneKeyProduct';

import miniOutlineImage from './images/mini.svg';
import miniHover from './images/miniHover.png';
import todoOutlineImage from './images/todo.svg';
import touchOutlineImage from './images/touch.svg';
import touchHover from './images/touchHover.png';

export function useHardwareData() {
  const oneKeyProduct = useOneKeyProduct();

  useEffect(() => {
    new Loader().add(miniHover).add(touchHover).load();
  }, []);
  return [
    {
      image: miniOutlineImage,
      hoverImage: miniHover,
      title: oneKeyProduct.mini.name,
      description: 'Mini sized, safety without compromise.',
      status: 'available',
      link: oneKeyProduct.mini.shopLink,
    },
    {
      image: touchOutlineImage,
      title: oneKeyProduct.touch.name,
      hoverImage: touchHover,
      description:
        'All-new design, secure chip supercharged, beautiful and true color display.',
      status: 'available',
    },
    {
      image: todoOutlineImage,
      title: oneKeyProduct.touch.name,
      hoverImage: '',
      description:
        'Biometric tech, optical encryption, so many reasons to go Pro.',
      status: 'coming-soon',
    },
  ] as const;
}
