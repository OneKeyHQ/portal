import { useTranslation } from 'gatsby-plugin-react-i18next';

import normalImageUrl from './images/normal.svg';

export function useTechnicalSpecificationsSectionData() {
  const { t } = useTranslation();

  return {
    title: t('title__technical_specifications'),
    images: {
      largeImageUrl: normalImageUrl,
      mediumImageUrl: normalImageUrl,
      smallImageUrl: normalImageUrl,
    },
    content: {
      left: [
        {
          title: t('title__size_and_weight'),
          content: [
            {
              title2: t('title__size'),
              description: '88.4 × 52.5 × 9.2 (mm)',
            },
            {
              title2: t('title__weight'),
              description: 'N/A',
            },
          ],
        },
        {
          title: t('title__chip_and_connector'),
          content: [
            {
              title2: t('title__connector'),
              description: 'USB Type-C',
            },
            {
              title2: t('title__certifications_and_standards'),
              description: t('content__ce_rohs_and_csprng'),
            },
            {
              title2: t('title__chips'),
              description: 'STM32H757XIH6',
            },
          ],
        },
        {
          title: t('title__display'),
          content: [
            {
              title2: t('title__screen'),
              description: t('content__int_inch', {
                value: 3.1,
              }),
            },
            {
              title2: t('title__display'),
              description: t('title__ips_display_color'),
            },
            {
              title2: t('title__resolution'),
              description: '480 × 800',
            },
          ],
        },
      ],
      right: [
        {
          title: t('title__power_and_battery'),
          content: [
            {
              description: '800 mAh',
            },
          ],
        },
        {
          title: t('title__wireless'),
          content: [
            {
              description: t('content__bluetooth'),
            },
          ],
        },
        {
          title: t('title__materials'),
          content: [
            {
              description: t('content__aluminum_alloy'),
            },
          ],
        },
        {
          title: t('title__compatibility'),
          content: [
            {
              descriptions: [
                'Windows 10+,',
                'macOS 10.8+,',
                'Linux (Ubuntu 12.04+, Fedora 21+, Debian 8)',
              ],
            },
          ],
        },
        {
          title: t('title__in_the_box'),
          content: [
            {
              descriptions: [
                t('content__int_hardware_wallet', { value: 1 }),
                t('content__int_usb_type_c_cable', { value: 1 }),
                t('content__int_recovery_sheet', { value: 3 }),
                t('content__int_sticker', { value: 1 }),
              ],
            },
          ],
        },
      ],
    },
  };
}
