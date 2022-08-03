import { FC, ReactNode } from 'react';

import { I18n } from '../../../../../base';
import { Box } from '../../../../../base/Box';
import { Button } from '../../../../../base/Button';
import { Flex } from '../../../../../base/Flex';
import { useBuy } from '../../../hooks/useBuy';

export interface AddToCartProps {
  children?: ReactNode;
  shopProductId: string;
}

export const AddToCart: FC<AddToCartProps> = (props) => {
  const { children, shopProductId } = props;
  const { buyButtonProps } = useBuy({
    shopProductId,
  });

  return (
    <Flex xs={{ gap: 12 }}>
      <Button variant="filled" {...buyButtonProps}>
        <Box xs={{ minWidth: 120 }}>
          <I18n name="action__add_to_cart" />
        </Box>
      </Button>

      {children}
    </Flex>
  );
};
