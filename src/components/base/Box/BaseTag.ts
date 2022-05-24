import { FC, HTMLProps } from 'react';

import { jsx } from '@emotion/react';

import { Box, BoxProps } from './Box';

function factory(as: string, config: Record<string, any> = {}) {
  const component = (props: BoxProps) => jsx(Box, { as, ...config, ...props });

  if (process.env.NODE_ENV === 'development') {
    component.displayName = `BaseTag ${as}`;
  }

  return component;
}

export const Section: FC<BoxProps> = factory('section');
export const Nav: FC<BoxProps> = factory('nav');
export const Article: FC<BoxProps> = factory('article');
export const Main: FC<BoxProps> = factory('main');
export const Header: FC<BoxProps> = factory('header');
export const Footer: FC<BoxProps> = factory('footer');
export const Aside: FC<BoxProps> = factory('aside');
export const Span: FC<BoxProps> = factory('span');
export const P: FC<BoxProps> = factory('p');
export const H1: FC<BoxProps> = factory('h1');
export const H2: FC<BoxProps> = factory('h2');
export const H3: FC<BoxProps> = factory('h3');
export const H4: FC<BoxProps> = factory('h4');
export const H5: FC<BoxProps> = factory('h5');
export const H6: FC<BoxProps> = factory('h6');
export const Hr: FC<BoxProps> = factory('hr');
export const Ul: FC<BoxProps> = factory('ul');
export const Ol: FC<BoxProps> = factory('ol');
export const Li: FC<BoxProps> = factory('li');
export const Img: FC<BoxProps & HTMLProps<HTMLImageElement>> = factory('img', {
  draggable: false,
});
export const Anchor: FC<BoxProps & HTMLProps<HTMLAnchorElement>> = factory('a');
