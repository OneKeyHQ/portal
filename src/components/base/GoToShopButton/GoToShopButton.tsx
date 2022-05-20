import { AnchorHTMLAttributes, FC, ReactNode } from 'react';

import { Button, ButtonProps } from '../Button';

export interface GoToShopButtonProps {
  children?: ReactNode;
  buttonProps?: ButtonProps;
  linkProps?: AnchorHTMLAttributes<HTMLAnchorElement>;
}

export const GoToShopButton: FC<GoToShopButtonProps> = (props) => {
  const { children, buttonProps = {}, linkProps = {} } = props;

  return (
    <a
      href="https://shop.onekey.so/"
      target="_blank"
      rel="noreferrer"
      {...linkProps}
    >
      <Button variant="outline" {...buttonProps}>
        Go to shop {children}
      </Button>
    </a>
  );
};
