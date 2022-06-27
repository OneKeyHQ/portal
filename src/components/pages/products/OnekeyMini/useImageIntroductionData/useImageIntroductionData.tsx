import { StaticImage } from 'gatsby-plugin-image';

export function useImageIntroductionData() {
  const name1 = 'Mini sized';
  const name2 = 'Security built right in';
  const name3 = 'OneKey Platform';

  const items = [
    {
      name: name1,
      description: 'Mini sized, safety without compromise.',
      images: {
        s: <StaticImage src="./images/s/hardware0.jpg" alt={name1} />,
        m: <StaticImage src="./images/m/hardware0.jpg" alt={name1} />,
        l: <StaticImage src="./images/l/hardware0.jpg" alt={name1} />,
        xl: <StaticImage src="./images/xl/hardware0.jpg" alt={name1} />,
      },
    },
    {
      name: name2,
      description:
        'Secure chip adds another layer of security. We use cutting edge technology to protect sensitive information, like world-class banks.',
      images: {
        s: <StaticImage src="./images/s/hardware1.jpg" alt={name2} />,
        m: <StaticImage src="./images/m/hardware1.jpg" alt={name2} />,
        l: <StaticImage src="./images/l/hardware1.jpg" alt={name2} />,
        xl: <StaticImage src="./images/xl/hardware1.jpg" alt={name2} />,
      },
    },
    {
      name: name3,
      description:
        'With one wallet, you can manage your DeFi and NFT portfolios, trade across 30+ networks, and connect to any decentralized application.',
      images: {
        s: <StaticImage src="./images/s/hardware2.jpg" alt={name3} />,
        m: <StaticImage src="./images/m/hardware2.jpg" alt={name3} />,
        l: <StaticImage src="./images/l/hardware2.jpg" alt={name3} />,
        xl: <StaticImage src="./images/xl/hardware2.jpg" alt={name3} />,
      },
    },
  ];

  return items;
}
