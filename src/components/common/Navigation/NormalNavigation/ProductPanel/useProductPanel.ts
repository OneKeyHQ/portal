import { useEffect, useMemo } from 'react';

import { useTheme } from '@emotion/react';
import { atom, useAtom } from 'jotai';

import { useOneKeyProduct } from '../../../../../data/useOneKeyProduct';

type ProductItem = {
  name: string;
  link: string;
  backgroundColor: string;
  fontColor: string;
};

export const currentSelectedAtom = atom<ProductItem['name']>('');

export const useCurrentSelected = () => useAtom(currentSelectedAtom);

export function useProductPanel() {
  const oneKeyProduct = useOneKeyProduct();
  const theme = useTheme();

  const items: ProductItem[] = useMemo(
    () => [
      {
        name: oneKeyProduct.mini.name,
        link: oneKeyProduct.mini.shopLink,
        backgroundColor: theme.colors.test400,
        fontColor: theme.colors.white,
      },
      {
        name: oneKeyProduct.touch.name,
        link: oneKeyProduct.touch.shopLink,
        backgroundColor: theme.colors.test200,
        fontColor: theme.colors.test500,
      },
      {
        name: oneKeyProduct.lite.name,
        link: oneKeyProduct.lite.shopLink,
        backgroundColor: theme.colors.test100,
        fontColor: theme.colors.test500,
      },
    ],
    [oneKeyProduct, theme],
  );

  const [currentSelected, setCurrentSelected] = useCurrentSelected();

  useEffect(() => {
    if (items[0] && !currentSelected) {
      setCurrentSelected(items[0].name);
    }
  }, [currentSelected, items, setCurrentSelected]);

  const currentSelectedProduct =
    items.find((item) => item.name === currentSelected) ||
    (items[0] as ProductItem);

  const {
    backgroundColor: currentProductBackgroundColor,
    fontColor: currentProductFontColor,
  } = currentSelectedProduct;

  return {
    items,
    currentSelected,
    setCurrentSelected,
    currentProductBackgroundColor,
    currentProductFontColor,
  };
}
