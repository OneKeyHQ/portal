import { StaticImage } from 'gatsby-plugin-image';

import { GoToShopButton } from '../../../../base';
import { DownloadButton } from '../../../../common/DownloadButton';

export function useProductsData() {
  return [
    {
      image: (
        <StaticImage
          alt="Advanced on-chain wallet app"
          src="./images/product-image1.jpg"
        />
      ),
      title: 'Advanced on-chain wallet app.',
      description:
        "Use OneKey App separately to store and use your crypto assets in a secure and convenient manner. Each user's assets are appropriately secured and stored locally.",
      button: <DownloadButton />,
      frames: new Array(60).fill(0).map((_, i) => `/home-intro/image${i}.jpg`),
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
      button: <GoToShopButton />,
    },
  ];
}
