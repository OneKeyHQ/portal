import { FC, ReactNode, useState } from 'react';

import { I18n } from '../../../../../base';
import { Box } from '../../../../../base/Box';
import { Button } from '../../../../../base/Button';
import { Flex } from '../../../../../base/Flex';
import { ChevronDownIcon } from '../../../../../base/Icon';
import { MenuItem, MenuItems } from '../../../../../base/Menu';
import { useBuy } from '../../../hooks/useBuy';

export interface AddToCartProps {
  children?: ReactNode;
  shopProductId: string;
}

export const AddToCart: FC<AddToCartProps> = (props) => {
  const { children, shopProductId } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    buyButtonProps,
    setCurrentProductAmount,
    currentProductAmount,
    items,
  } = useBuy({
    shopProductId,
  });

  const selectAmount = (menuProductAmount: number) => {
    setCurrentProductAmount(menuProductAmount);
    setIsMenuOpen(false);
  };

  return (
    <Flex xs={{ gap: 12 }}>
      {/* buttons */}
      <Box xs={{ position: 'relative' }}>
        <Button variant="outlined" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Flex
            xs={{
              width: 80,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            x{currentProductAmount} <ChevronDownIcon width={24} height={24} />
          </Flex>
        </Button>

        <MenuItems
          onClickOutside={() => setIsMenuOpen(false)}
          isActive={isMenuOpen}
        >
          {items.map((item) => (
            <MenuItem onClick={() => selectAmount(item)} key={item}>
              <Box xs={{ paddingLeft: 16, paddingRight: 16 }}>x{item}</Box>
            </MenuItem>
          ))}
        </MenuItems>
      </Box>

      <Button variant="filled" {...buyButtonProps}>
        <Box xs={{ minWidth: 120 }}>
          <I18n name="action__add_to_cart" />
        </Box>
      </Button>

      {children}
    </Flex>
  );
};
