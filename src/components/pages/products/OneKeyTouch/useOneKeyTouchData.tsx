import { useFeatureSectionData } from './useFeatureSectionData';
import { useImageIntroductionData } from './useImageIntroductionData';
import { useProductInformationData } from './useProductInformationData';
import { useTechnicalSpecificationsSectionData } from './useTechnicalSpecificationsData';

export function useOneKeyTouchData() {
  const productInformationData = useProductInformationData();
  const feature = useFeatureSectionData();
  const technicalSpecifications = useTechnicalSpecificationsSectionData();
  const imageIntroduction = useImageIntroductionData();

  return {
    title: 'OneKey Touch',

    imageIntroduction,
    productInformationData,
    feature,
    technicalSpecifications,
  };
}
