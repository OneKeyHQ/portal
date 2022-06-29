import { useFeatureSectionData } from './useFeatureSectionData';
import { useImageIntroductionData } from './useImageIntroductionData';
import { useProductInformationData } from './useProductInformationData';

export function useOneKeyLiteData() {
  const productInformationData = useProductInformationData();
  const feature = useFeatureSectionData();
  const imageIntroduction = useImageIntroductionData();

  return {
    title: 'OneKey Lite',

    imageIntroduction,
    productInformationData,
    feature,
  };
}
