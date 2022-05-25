import { AnchorHTMLAttributes, FC, ReactNode } from 'react';

import { Button, ButtonProps } from '../Button';

export interface GoToShopButtonProps {
  children?: ReactNode;
  overrides?: {
    link?: AnchorHTMLAttributes<HTMLAnchorElement>;
    button?: ButtonProps;
  };
}

export const GoToShopButton: FC<GoToShopButtonProps> = (props) => {
  const {
    children,
    overrides = {
      button: {},
      link: {},
    },
  } = props;

  const { button: buttonOverrides = {}, link: linkOverrides = {} } = overrides;

  return (
    <a
      href="https://shop.onekey.so/"
      target="_blank"
      rel="noreferrer"
      {...linkOverrides}
    >
      <Button variant="outlined" {...buttonOverrides}>
        Go to shop {children}
      </Button>
    </a>
  );
};
