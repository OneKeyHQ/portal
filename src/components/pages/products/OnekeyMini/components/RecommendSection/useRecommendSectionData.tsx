import ProImage from './images/pro.svg';
import TouchImage from './images/touch.svg';

export type RecommendSectionDataItem = {
  name: string;
  description: string;
  price: number;
  image: string;
};

// OneKey Mini $58
// OneKey Touch $135
// OneKey Pro $195

export function useRecommendSectionData(): RecommendSectionDataItem[] {
  return [
    {
      name: 'OneKey Touch',
      description:
        'Secure, buy, exchange, grow your crypto and manage your NFTs with our new Bluetooth-enabled hardware wallet.',
      price: 135,
      image: TouchImage,
    },
    {
      name: 'OneKey Pro',
      description:
        'Secure, trade, grow your crypto and manage your NFTs with our new Bluetooth-enabled hardware wallet.',
      price: 195,
      image: ProImage,
    },
  ];
}
