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
    descriptionText: [
      {
        type: 'title1',
        content: 'Dimensions & weight',
        key: 'dimensions-weight',
        children: [
          {
            type: 'title2',
            content: 'Size',
            key: 'size',
            children: [
              {
                type: 'text',
                content: '71 x 34 x 6.8 (mm)',
              },
            ],
          },
          {
            type: 'title2',
            content: 'Weight',
            key: 'weight',
            children: [
              {
                type: 'text',
                content: '15.6g',
              },
            ],
          },
        ],
      },
      {
        type: 'title1',
        content: 'Microcontrollers & connector',
        key: 'microcontrollers-connector',
        children: [
          {
            type: 'title2',
            content: 'Connector',
            key: 'connector',
            children: [
              {
                type: 'text',
                content: 'USB Type-C',
              },
            ],
          },
          {
            type: 'title2',
            content: 'Certification level',
            key: 'certification-level',
            children: [
              {
                type: 'text',
                content: 'EAL6+',
              },
            ],
          },
          {
            type: 'title2',
            content: 'Chips',
            key: 'chips',
            children: [
              {
                type: 'text',
                content: 'STM32F405RGT6',
              },
            ],
          },
        ],
      },
      {
        type: 'title1',
        content: 'Materials',
        key: 'materials',
        children: [
          {
            type: 'text',
            content: 'Plastic',
          },
        ],
      },
      {
        type: 'title1',
        content: 'Compatibility',
        key: 'compatibility',
      },
    ],
  };
}
