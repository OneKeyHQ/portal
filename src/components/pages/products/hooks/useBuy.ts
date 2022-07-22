import { useState } from 'react';

import { navigate } from 'gatsby';

export type UseBuyButtonParams = {
  shopProductId: string;
};

export function useBuy(useBuyButtonParams: UseBuyButtonParams) {
  const { shopProductId } = useBuyButtonParams;
  const items = [1, 2, 3, 4, 5, 6, 7, 8];
  const [amount, setAmount] = useState(1);

  const buy = () => {
    navigate(`https://shop.onekey.so/cart/${shopProductId}:${amount}`);
  };

  return {
    amount,
    setAmount,
    items,
    buyButtonProps: {
      onClick: buy,
    },
  };
}
