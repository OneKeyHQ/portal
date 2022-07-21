import { FC, ReactNode } from 'react';

import { Button, I18n } from '../../../../../base';

export interface AddToCartButtonProps {
  children?: ReactNode;
}

export const AddToCartButton: FC<AddToCartButtonProps> = (props) => {
  const { children } = props;

  return (
    <Button variant="filled" size="small">
      <I18n name="action__add_to_cart" />
      {children}
    </Button>
  );
};
