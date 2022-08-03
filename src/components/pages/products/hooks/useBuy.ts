import { navigate } from 'gatsby';

export type UseBuyButtonParams = {
  shopProductId: string;
};

export function useBuy(useBuyButtonParams: UseBuyButtonParams) {
  const { shopProductId } = useBuyButtonParams;

  const buy = () => {
    navigate(`https://shop.onekey.so/cart/${shopProductId}:1`);
  };

  return {
    buyButtonProps: {
      onClick: buy,
    },
  };
}
