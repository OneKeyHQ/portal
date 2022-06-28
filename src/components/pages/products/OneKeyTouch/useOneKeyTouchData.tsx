import { useProductInformationData } from './useProductInformationData';

export function useOneKeyTouchData() {
  const productInformationData = useProductInformationData();

  return {
    title: 'OneKey Touch',

    productInformationData,
  };
}
