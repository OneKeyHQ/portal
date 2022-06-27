import { suggestList } from './suggestList';

export function useCryptosTable() {
  return {
    thead: {
      coins: 'COINS',
      app: 'APP',
      classicAndMini: 'Classic & Mini',
      touchAndPro: 'Touch & Pro',
    },
    suggestList,
  };
}
