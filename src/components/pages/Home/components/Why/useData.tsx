import { StaticImage } from 'gatsby-plugin-image';

export function useData() {
  return [
    {
      image: <StaticImage src="./images/Home1.jpg" alt="Beginner friendly" />,
      title: 'Beginner friendly',
      description:
        'Whether you are an OG, beginner or purchasing for your grandma! Use our products with ease.',
    },
    {
      image: (
        <StaticImage
          src="./images/Home2.jpg"
          alt="Software and hardware, better together"
        />
      ),
      title: 'Software and hardware, better together',
      description: 'Wana trade and invest securely with ease? You can here. ',
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
