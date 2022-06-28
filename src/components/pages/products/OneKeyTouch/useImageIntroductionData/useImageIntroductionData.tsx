import { StaticImage } from 'gatsby-plugin-image';

export function useImageIntroductionData() {
  const name1 = 'Touch it, feel it';
  const name2 = 'Carry On';
  const name3 = 'One platform, manage all';

  const items = [
    {
      name: ['Touch it,', 'feel it'],
      description: `The world's first hardware wallet with Multi-Touch tech and true color display.`,
      images: {
        s: <StaticImage src="./images/small/touch-hardware0.jpg" alt={name1} />,
        m: <StaticImage src="./images/large/touch-hardware0.jpg" alt={name1} />,
        l: <StaticImage src="./images/large/touch-hardware0.jpg" alt={name1} />,
        xl: (
          <StaticImage src="./images/large/touch-hardware0.jpg" alt={name1} />
        ),
      },
    },
    {
      name: name2,
      description: 'Putting over 1,000 cryptos in your pocket.',
      images: {
        s: <StaticImage src="./images/small/touch-hardware1.jpg" alt={name2} />,
        m: <StaticImage src="./images/large/touch-hardware1.jpg" alt={name2} />,
        l: <StaticImage src="./images/large/touch-hardware1.jpg" alt={name2} />,
        xl: (
          <StaticImage src="./images/large/touch-hardware1.jpg" alt={name2} />
        ),
      },
    },
    {
      name: ['One platform,', 'manage all'],
      description:
        'Industry-leading client to manage all your crypto assets, safely.',
      images: {
        s: <StaticImage src="./images/small/touch-hardware2.jpg" alt={name3} />,
        m: <StaticImage src="./images/large/touch-hardware2.jpg" alt={name3} />,
        l: <StaticImage src="./images/large/touch-hardware2.jpg" alt={name3} />,
        xl: (
          <StaticImage src="./images/large/touch-hardware2.jpg" alt={name3} />
        ),
      },
    },
  ];

  return items;
}
