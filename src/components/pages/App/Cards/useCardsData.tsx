import { StaticImage } from 'gatsby-plugin-image';

export function useCardsData() {
  return [
    {
      mainTitle: 'Set up your OneKey hardware wallet',
      button: 'Getting started',
      imageNode: (
        <StaticImage
          draggable={false}
          src="./images/1.png"
          alt="illustration1"
        />
      ),
    },
    {
      mainTitle: 'Multi-Chain Support',
      button: 'Check the full list',
      imageNode: (
        <StaticImage
          draggable={false}
          src="./images/2.png"
          alt="illustration2"
        />
      ),
    },
  ];
}
