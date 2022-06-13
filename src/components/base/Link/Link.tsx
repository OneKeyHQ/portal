import { FC, cloneElement } from 'react';

import { Link as InnerLink } from 'gatsby';

import { Anchor, Box, BoxProps } from '../Box';

export interface LinkProps extends BoxProps {
  to: string;
  toLanguage?: string;
  target?: React.HTMLAttributeAnchorTarget;
}

export const Link: FC<LinkProps> = (props) => {
  const { to, children, target = '_blank', ...omittedProps } = props;

  if (!to) {
    return cloneElement(children as React.ReactElement);
  }

  const isExternal = to.startsWith('http');

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
  return (
    <Box
      // @ts-ignore
      as={InnerLink}
      to={to}
      externalProps={omittedProps}
    >
      {children}
    </Box>
  );
};
