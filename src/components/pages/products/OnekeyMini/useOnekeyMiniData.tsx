import { useFeatureSectionData } from './useFeatureSectionData';
import { useImageIntroductionData } from './useImageIntroductionData';
import { useProductInformationData } from './useProductInformationData';
import { useTechnicalSpecificationsSectionData } from './useTechnicalSpecificationsData';

export function useOneKeyMiniData() {
  const imageIntroduction = useImageIntroductionData();
  const feature = useFeatureSectionData();
  const technicalSpecifications = useTechnicalSpecificationsSectionData();
  const productInformation = useProductInformationData();

  const onekeyMiniData = {
    title: 'Onekey Mini',

    productInformation,
    imageIntroduction,
    feature,
    technicalSpecifications,
  };

  return onekeyMiniData;
}
