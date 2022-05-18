import image1 from './images/1.svg';
import image2 from './images/2.svg';
import hardware from './images/home-hardware-mini-2.png';

export function useData() {
  return [
    {
      image: image1,
      hoverImage: hardware,
      title: 'OneKey Mini',
      description: 'Mini sized, safety without compromise.',
    },
    {
      image: image2,
      title: 'OneKey Touch',
      description:
        'Secure, buy, exchange, grow your crypto and manage your NFTs with our new Bluetooth-enabled hardware wallet. ',
    },
    {
      image: image2,
      title: 'OneKey Pro',
      description:
        'Secure, trade, grow your crypto and manage your NFTs with our new Bluetooth-enabled hardware wallet. ',
    },
  ];
}
