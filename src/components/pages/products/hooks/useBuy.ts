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
  const [amount, setAmount] = useAtom(amountAtom);
  const currentProductAmount = amount[shopProductId] || 1;

  const buy = () => {
    navigate(`https://shop.onekey.so/cart/${shopProductId}:1`);
  };

  return {
    currentProductAmount,
    setCurrentProductAmount: (newAmount: number) => {
      console.log(newAmount);

      setAmount((prev) => ({ ...prev, [shopProductId]: newAmount }));
    },
    buyButtonProps: {
      onClick: buy,
    },
  };
}
