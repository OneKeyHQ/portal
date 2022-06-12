import { ReactNode } from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import { ButtonProps } from '../../../base';

export type FeatureSectionData = {
  subtitle: string;
  title: string;
  description: string;
  items: FeatureSectionDataItem[];
};

export type FeatureSectionDataItem = {
  description: string[];
  name: string;
  imageNode: ReactNode;
  button?: {
    text: string;
    link: string;
    variant: ButtonProps['variant'];
  };
};

export function useFeatureSectionData(): FeatureSectionData {
  return {
    subtitle: 'PROFESSIONAL’S CHOICE',
    title: 'What Makes OneKey Earn the Trust of Top Pro Institutions',
    description:
      'OneKey provides best-in-class security for encrypted assets without compromising accessibility and day-to-day operations. The future is always unpredictable and our mission is to give everyone the ability to keep their crypto assets safe.',
    items: [
      {
        name: 'Open source',
        description: [
          'We make original software and firmware code open source at Github which makes anyone able to check and verify it.',
          "We believe that only by doing so can we clarify ourselves to ensure that OneKey's ethics are scrutinized by the masses.",
        ],
        imageNode: (
          <StaticImage src="./images/security-01.jpg" alt="Open source" />
        ),
        button: {
          text: 'Learn More',
          link: 'https://github.com/OneKeyHQ/',
          variant: 'outlined',
        },
      },
      {
        name: 'Secure element',
        description: [
          'We have observed that some wallets store the most valuable private keys directly in the microprocessor (MCU), which is quite scary.',
          'In contrast, OneKey uses a Secure Element to protect your crypto assets - the ATECC608A from Microchip, to be exact.',
          'With the exquisitely designed SHA-256 response control, we can use it to effectively prevent replay and eavesdropping attacks.',
        ],
        imageNode: (
          <StaticImage src="./images/security-02.jpg" alt="Secure element" />
        ),
      },
      {
        name: 'Cold keys',
        description: [
          'We do not store the private key in your device microprocessor (MCU), but in a separate security chip ATECC608A.',
          'Likewise, no matter how you use your OneKey hardware wallet, your private key never touched the internet from start to finish.',
          "Specifically, OneKey helps you confirm and authorize every on-chain transaction, the signing process is done on your device, not your PC or phone. This prevents malicious programs from spoofing or tricking you into high-risk operations: such as sending crypto assets to a bad guy's disguised address.",
        ],
        imageNode: (
          <StaticImage src="./images/security-03.jpg" alt="Cold keys" />
        ),
      },
    ],
  };
}
