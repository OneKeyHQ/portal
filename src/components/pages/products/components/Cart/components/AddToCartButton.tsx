import { FC, ReactNode } from 'react';

import { Button, ButtonProps, I18n } from '../../../../../base';

export interface AddToCartButtonProps {
  children?: ReactNode;
  buttonProps: ButtonProps;
}

export const AddToCartButton: FC<AddToCartButtonProps> = (props) => {
  const { children, buttonProps } = props;

  return (
    <Button fillHeight variant="filled" size="small" {...buttonProps}>
      <I18n name="action__add_to_cart" />
      {children}
    </Button>
  );
};
