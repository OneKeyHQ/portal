import { navigate } from 'gatsby';
import { atom, useAtom } from 'jotai';

export type UseBuyButtonParams = {
  shopProductId: string;
};

const amountAtom = atom<{
  [key: string]: number;
}>({});

export function useBuy(useBuyButtonParams: UseBuyButtonParams) {
  const { shopProductId } = useBuyButtonParams;
  const items = [1, 2, 3, 4, 5, 6, 7, 8];
  const [amount, setAmount] = useAtom(amountAtom);
  const currentProductAmount = amount[shopProductId] || 1;

  const buy = () => {
    navigate(
      `https://shop.onekey.so/cart/${shopProductId}:${currentProductAmount}`,
    );
  };

  return {
    currentProductAmount,
    setCurrentProductAmount: (newAmount: number) => {
      console.log(newAmount);

      setAmount((prev) => ({ ...prev, [shopProductId]: newAmount }));
    },
    items,
    buyButtonProps: {
      onClick: buy,
    },
  };
}
