import { StaticImage } from 'gatsby-plugin-image';

export function useCardsData() {
  return [
    {
      mainTitle: 'Set up your OneKey hardware wallet',
      button: 'Getting started',
      link: 'https://help.onekey.so/hc/en-us/articles/4930350875919',
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
      link: 'https://onekey.so/tokens',
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
