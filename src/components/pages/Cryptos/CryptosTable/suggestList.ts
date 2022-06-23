import { currencies } from './currencies';

export const appSuggestList = [
  currencies.BTC,
  currencies.DASH,
  currencies.HECO,
];

export const classicSuggestList = [
  currencies.BTC,
  currencies.DASH,
  currencies.HECO,
  currencies.ETH,
];
export const miniSuggestList = classicSuggestList;

export const touchSuggestList = [
  currencies.BTC,
  currencies.DASH,
  currencies.HECO,
  currencies.ETH,
  currencies.BCH,
  currencies.BTG,
];
export const proSuggestList = touchSuggestList;

export const suggestList = Object.values(currencies)
  .map((currency) => ({
    currency,
    support: {
      app: appSuggestList.includes(currency),
      classic: classicSuggestList.includes(currency),
      mini: miniSuggestList.includes(currency),
      touch: touchSuggestList.includes(currency),
      pro: proSuggestList.includes(currency),
    },
  }))
  .filter(
    (currency) =>
      currency.support.app ||
      currency.support.classic ||
      currency.support.mini ||
      currency.support.touch ||
      currency.support.pro,
  );
