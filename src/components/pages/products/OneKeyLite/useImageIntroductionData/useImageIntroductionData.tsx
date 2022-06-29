import { StaticImage } from 'gatsby-plugin-image';

export function useImageIntroductionData() {
  const name1 = 'Restore your wallet without typing one word.';
  const name2 = 'Scan. Set Code. Backed Up.';
  const name3 = 'Water resistance, also tear-resistant';

  const items = [
    {
      name: ['Restore', 'your wallet', 'without typing', 'one word.'],
      description: ``,
      images: {
        s: <StaticImage src="./images/small/hardware0.jpg" alt={name1} />,
        m: <StaticImage src="./images/large/hardware0.jpg" alt={name1} />,
        l: <StaticImage src="./images/large/hardware0.jpg" alt={name1} />,
        xl: <StaticImage src="./images/large/hardware0.jpg" alt={name1} />,
      },
    },
    {
      name: ['Scan.', 'Set Code.', 'Backed Up.'],
      description:
        "It's that simple. Making the most painful thing in DeFi become easy and enjoyable.",
      images: {
        s: <StaticImage src="./images/small/hardware1.jpg" alt={name2} />,
        m: <StaticImage src="./images/large/hardware1.jpg" alt={name2} />,
        l: <StaticImage src="./images/large/hardware1.jpg" alt={name2} />,
        xl: <StaticImage src="./images/large/hardware1.jpg" alt={name2} />,
      },
    },
    {
      name: ['Water resistance,', 'also tear-resistant'],
      description: 'No fear of soaking in water or tearing by hand.',
      images: {
        s: <StaticImage src="./images/small/hardware2.jpg" alt={name3} />,
        m: <StaticImage src="./images/large/hardware2.jpg" alt={name3} />,
        l: <StaticImage src="./images/large/hardware2.jpg" alt={name3} />,
        xl: <StaticImage src="./images/large/hardware2.jpg" alt={name3} />,
      },
    },
  ];

  return items;
}
