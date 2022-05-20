import { FC } from 'react';

import { Button, ButtonProps } from '../Button';
import { Logo } from '../Logo';

export type LaunchAppButtonProps = ButtonProps;

export const LaunchAppButton: FC<LaunchAppButtonProps> = (props) => (
  <a href="https://app.onekey.so/" target="_blank" rel="noreferrer">
    <Button
      {...props}
      rightIcon={
        <Logo
          css={{
            width: 26,
            height: 26,
          }}
        />
      }
    >
      Launch App
    </Button>
  </a>
);
