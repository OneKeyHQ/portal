import largeImageUrl from './images/large.svg';
import mediumImageUrl from './images/medium.svg';
import smallImageUrl from './images/small.svg';

export function useTechnicalSpecificationsSectionData() {
  return {
    title: 'Technical Specifications',
    images: {
      largeImageUrl,
      mediumImageUrl,
      smallImageUrl,
    },
    content: {
      left: [
        {
          title: 'Size and Weight',
          content: [
            {
              title2: 'Size',
              description: '71 x 34 x 6.8 (mm)',
            },
            {
              title2: 'Weight',
              description: '15.6g',
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
              description: 'STM32F405RGT6',
            },
          ],
        },
        {
          title: 'Display',
          content: [
            {
              title2: 'Screen',
              description: '1.44-inch',
            },
            {
              title2: 'Display',
              description: 'IPS Display (Color)',
            },
            {
              title2: 'Resolution',
              description: '128 x 128',
            },
          ],
        },
      ],
      right: [
        {
          title: 'Power and Battery',
          content: [
            {
              description: 'N/A',
            },
          ],
        },
        {
          title: 'Wireless',
          content: [
            {
              description: 'N/A',
            },
          ],
        },
        {
          title: 'Materials',
          content: [
            {
              description: 'Plastic',
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
                '1 sticker',
                '2 recovery sheet',
              ],
            },
          ],
        },
      ],
    },
  };
}
