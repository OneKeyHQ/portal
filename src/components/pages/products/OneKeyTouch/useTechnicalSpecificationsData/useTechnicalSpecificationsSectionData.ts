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
          title: 'Size and Weight',
          content: [
            {
              title2: 'Size',
              description: '88.4 × 52.5 × 9.2 (mm)',
            },
            {
              title2: 'Weight',
              description: 'N/A',
            },
          ],
        },
        {
          title: 'Chip and Connector',
          content: [
            {
              title2: 'Connector',
              description: 'USB Type-C',
            },
            {
              title2: 'Certifications and Standards',
              description: 'CE, RoHS and CSPRNG',
            },
            {
              title2: 'Chips',
              description: 'STM32H757XIH6',
            },
          ],
        },
        {
          title: 'Display',
          content: [
            {
              title2: 'Screen',
              description: '3.1-inch',
            },
            {
              title2: 'Display',
              description: 'IPS Display (Color)',
            },
            {
              title2: 'Resolution',
              description: '480 × 800',
            },
          ],
        },
      ],
      right: [
        {
          title: 'Power and Battery',
          content: [
            {
              description: '800 mAh',
            },
          ],
        },
        {
          title: 'Wireless',
          content: [
            {
              description: 'Bluetooth',
            },
          ],
        },
        {
          title: 'Materials',
          content: [
            {
              description: 'Aluminium Alloy',
            },
          ],
        },
        {
          title: 'Compatibility',
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
          title: 'In the Box',
          content: [
            {
              descriptions: [
                '1 hardware wallet',
                '1 usb type-c cable',
                '3 recovery sheet',
                '1 sticker',
              ],
            },
          ],
        },
      ],
    },
  };
}
