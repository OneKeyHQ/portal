import { StaticImage } from 'gatsby-plugin-image';

export function useData() {
  return [
    {
      image: <StaticImage src="./images/Home1.jpg" alt="Beginner friendly" />,
      title: 'Beginner friendly',
      description:
        "Use our products with ease whether you are an experienced practitioner or a beginner, even it's for your grandma.",
    },
    {
      image: (
        <StaticImage
          src="./images/Home2.jpg"
          alt="Software and hardware, better together"
        />
      ),
      title: 'Software and hardware, better together',
      description:
        'Wanna be safe and easy at the same time when investing cryptos? You can have both here.',
    },
    {
      image: (
        <StaticImage src="./images/Home3.jpg" alt="The hub for your cryptos" />
      ),
      title: 'The hub for your cryptos',
      description:
        'Invest, trade, track DeFi & NFT portfolios, fiat on-off-ramps, and even more.',
    },
    {
      image: (
        <StaticImage
          src="./images/Home4.jpg"
          alt="Ultra-fast customer service response"
        />
      ),
      title: 'Ultra-fast customer service response',
      description:
        'Our customer service and engineers respond rapidly to your needs.',
    },
  ];
}