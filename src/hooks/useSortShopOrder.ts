import { useTranslation } from 'gatsby-plugin-react-i18next';

import { Shop } from '../data';

export function filterShops(array: (Shop | undefined)[]) {
  const isNotUndefined = (value?: Shop): value is Shop =>
    !!(value && value.name && value.url);

  return array.filter(isNotUndefined);
}

export function useSortShopOrder(shops: (Shop | undefined)[]) {
  const { i18n } = useTranslation();
  const { language } = i18n;

  const isChinese = language === 'zh_CN' || language === 'zh';
  const isYouzan = (string: string) => string.toLocaleLowerCase() === 'youzan';

  const array = filterShops(shops);

  const youzanShop = array.findIndex((item) => isYouzan(item.key));
  const youzan = array[youzanShop];

  if (youzan && isChinese) {
    array.splice(youzanShop, 1);
    array.unshift(youzan);
  }

  return array;
}
