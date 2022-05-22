import { StaticImage } from 'gatsby-plugin-image';

export function useFeatureData() {
  return [
    {
      image: (
        <StaticImage
          src="./images/home-software-01.png"
          alt="Beginner friendly"
        />
      ),
      title: 'Beginner friendly',
      description:
        "Use our products with ease whether you are an experienced practitioner or a beginner, even it's for your grandma.",
      link: 'https://help.onekey.so/hc/en-us/sections/360001102996',
    },
    {
      image: (
        <StaticImage
          src="./images/home-software-02.png"
          alt="Software and hardware, better together"
        />
      ),
      title: 'Software and hardware, better together',
      description:
        'Wanna be safe and easy at the same time when investing cryptos? You can have both here.',
      link: 'https://help.onekey.so/hc/en-us/articles/360002184256-Why-Use-Hardware-Wallets-to-Manage-Private-Keys-',
    },
    {
      image: (
        <StaticImage
          src="./images/home-software-03.png"
          alt="The hub for your cryptos"
        />
      ),
      title: 'The hub for your cryptos',
      description:
        'Invest, trade, track DeFi & NFT portfolios, fiat on-off-ramps, and even more.',
      link: 'https://onekey.so/cryptos',
    },
    {
      image: (
        <StaticImage
          src="./images/home-software-04.png"
          alt="Ultra-fast customer service response"
        />
      ),
      title: 'Ultra-fast customer service response',
      description:
        'Our customer service and engineers respond rapidly to your needs.',
      link: 'https://help.onekey.so/hc/en-us',
    },
  ];
}
