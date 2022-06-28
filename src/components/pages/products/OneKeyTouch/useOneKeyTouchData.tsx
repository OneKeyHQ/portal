import { useFeatureSectionData } from './useFeatureSectionData';
import { useProductInformationData } from './useProductInformationData';
import { useTechnicalSpecificationsSectionData } from './useTechnicalSpecificationsData';

export function useOneKeyTouchData() {
  const productInformationData = useProductInformationData();
  const feature = useFeatureSectionData();
  const technicalSpecifications = useTechnicalSpecificationsSectionData();

  return {
    title: 'OneKey Touch',

    productInformationData,
    feature,
    technicalSpecifications,
  };
}
