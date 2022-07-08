import { useEffect, useMemo } from 'react';

import { useTheme } from '@emotion/react';
import { atom, useAtom } from 'jotai';

import { useOneKeyProduct } from '../../../../../data/useOneKeyProduct';
import { useShopMenu } from '../../useNavigationData';

type ProductItem = {
  key: string;
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
  const shopMenu = useShopMenu();

  const items = useMemo<ProductItem[]>(
    () => [
      {
        key: oneKeyProduct.mini.name,
        name: oneKeyProduct.mini.name,
        link: oneKeyProduct.mini.path,
        backgroundColor: theme.colors.test400,
        fontColor: theme.colors.white,
      },
      {
        key: oneKeyProduct.touch.name,
        name: oneKeyProduct.touch.name,
        link: oneKeyProduct.touch.path,
        backgroundColor: theme.colors.test200,
        fontColor: theme.colors.test500,
      },
      {
        key: oneKeyProduct.lite.name,
        name: oneKeyProduct.lite.name,
        link: oneKeyProduct.lite.path,
        backgroundColor: theme.colors.test100,
        fontColor: theme.colors.test500,
      },
      {
        ...shopMenu,
        link: shopMenu.path,
        backgroundColor: theme.colors.test100,
        fontColor: theme.colors.test500,
      },
    ],
    [oneKeyProduct, theme, shopMenu],
  );

  const [currentSelected, setCurrentSelected] = useCurrentSelected();

  useEffect(() => {
    if (items[0] && !currentSelected) {
      setCurrentSelected(items[0].key);
    }
  }, [currentSelected, items, setCurrentSelected]);

  const currentSelectedProduct =
    items.find((item) => item.key === currentSelected) ||
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
