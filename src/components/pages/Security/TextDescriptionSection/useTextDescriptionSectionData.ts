import { useTranslation } from 'gatsby-plugin-react-i18next';

export function useTextDescriptionSectionData() {
  const { t } = useTranslation();

  return {
    title: t('title__earn_the_trust_of_top_and_professional_institutions'),
    description: t(
      'title__earn_the_trust_of_top_and_professional_institutions_desc',
    ),

    items: [
      {
        name: t('title__ce_and_rohs_certification'),
        description: t('title__ce_and_rohs_certification_desc'),
      },
      {
        name: t('title__ultrasonic_welding_process'),
        description: t('title__ultrasonic_welding_process_desc'),
      },
      {
        name: t('title__eal6_certification'),
        description: t('title__eal6_certification_desc'),
      },
    ],
  };
}
