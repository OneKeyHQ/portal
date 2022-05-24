import { FC, cloneElement } from 'react';

import { Anchor, Box, BoxProps } from '../Box';

export interface LinkProps extends BoxProps {
  to: string;
  toLanguage?: string;
  target?: React.HTMLAttributeAnchorTarget;
}

export const Link: FC<LinkProps> = (props) => {
  const {
    to,
    toLanguage,
    children,
    target = '_blank',
    ...omittedProps
  } = props;
  const isExternal = to.startsWith('http');

  if (!to) {
    return cloneElement(children as React.ReactElement);
  }

  if (isExternal) {
    return (
      <Anchor
        target={target}
        rel="noreferrer"
        href={to}
        externalProps={omittedProps}
      >
        {children}
      </Anchor>
    );
  }

  // todo: inner i18n route
  return <Box>{children}</Box>;
};
