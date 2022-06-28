import { useFeatureSectionData } from './useFeatureSectionData';
import { useProductInformationData } from './useProductInformationData';

export function useOneKeyTouchData() {
  const productInformationData = useProductInformationData();
  const feature = useFeatureSectionData();

  return {
    title: 'OneKey Touch',

    productInformationData,
    feature,
  };
}
