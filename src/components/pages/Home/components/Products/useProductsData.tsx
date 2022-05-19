import { StaticImage } from 'gatsby-plugin-image';

export function useProductsData() {
  return [
    {
      image: (
        <StaticImage
          alt="Advanced on-chain wallet app"
          src="./images/product-image1.jpg"
        />
      ),
      title: 'Advanced on-chain wallet app',
      description:
        "Use OneKey App separately to store and use your crypto assets in a secure and convenient manner. Each user's assets are appropriately secured and stored locally.",
    },
    {
      image: (
        <StaticImage
          alt="Need more security? No problem"
          src="./images/product-image2.jpg"
        />
      ),
      title: 'Need more security? No problem.',
      description:
        "Hardware wallets take the securitisation of digital assets to another level. From physically isolating hackers to preventing Trojan horses and software attacks. All transfers must be approved by the hardware wallet, so you don't have to worry about the loss or theft of your mobile phone.",
    },
  ];
}
