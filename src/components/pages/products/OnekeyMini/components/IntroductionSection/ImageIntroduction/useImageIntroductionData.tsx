import { StaticImage } from 'gatsby-plugin-image';

export function useImageIntroductionData() {
  return {
    items: [
      {
        name: 'Mini sized',
        description: 'Mini sized, safety without compromise.',
        sImage: <StaticImage src="./images/s/Hardware.jpg" alt="Mini sized" />,
        mImage: <StaticImage src="./images/m/Hardware.jpg" alt="Mini sized" />,
        lImage: <StaticImage src="./images/l/Hardware.jpg" alt="Mini sized" />,
        xlImage: (
          <StaticImage src="./images/xl/Hardware.jpg" alt="Mini sized" />
        ),
      },
      {
        name: 'Security built right in',
        description:
          'Secure chip adds another layer of security. We use cutting edge technology to protect sensitive information, like world-class banks.',
        sImage: (
          <StaticImage
            src="./images/s/Hardware-1.jpg"
            alt="Security built right in"
          />
        ),
        mImage: (
          <StaticImage
            src="./images/m/Hardware-1.jpg"
            alt="Security built right in"
          />
        ),
        lImage: (
          <StaticImage
            src="./images/l/Hardware-1.jpg"
            alt="Security built right in"
          />
        ),
        xlImage: (
          <StaticImage
            src="./images/xl/Hardware-1.jpg"
            alt="Security built right in"
          />
        ),
      },
      {
        name: 'OneKey Platform',
        description:
          'With one wallet, you can manage your DeFi and NFT portfolios, trade across 30+ networks, and connect to any decentralized application.',
        sImage: (
          <StaticImage src="./images/s/Hardware-2.jpg" alt="OneKey Platform" />
        ),
        mImage: (
          <StaticImage src="./images/m/Hardware-2.jpg" alt="OneKey Platform" />
        ),
        lImage: (
          <StaticImage src="./images/l/Hardware-2.jpg" alt="OneKey Platform" />
        ),
        xlImage: (
          <StaticImage src="./images/xl/Hardware-2.jpg" alt="OneKey Platform" />
        ),
      },
    ],
  };
}
