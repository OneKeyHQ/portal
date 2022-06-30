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
      description: oneKeyProduct.mini.description,
      status: 'available',
      link: oneKeyProduct.mini.path,
    },
    {
      image: touchOutlineImage,
      title: oneKeyProduct.touch.name,
      hoverImage: touchHover,
      description: oneKeyProduct.touch.description,
      link: oneKeyProduct.touch.path,
      status: 'available',
    },
    {
      image: todoOutlineImage,
      title: oneKeyProduct.pro.name,
      hoverImage: '',
      description: oneKeyProduct.pro.description,
      status: 'coming-soon',
    },
  ] as const;
}
