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
      name: ['Security', 'built right in'],
      description: 'We use top secure chip to protect sensitive information.',
      images: {
        s: <StaticImage src="./images/s/hardware1.jpg" alt={name2} />,
        m: <StaticImage src="./images/m/hardware1.jpg" alt={name2} />,
        l: <StaticImage src="./images/l/hardware1.jpg" alt={name2} />,
        xl: <StaticImage src="./images/xl/hardware1.jpg" alt={name2} />,
      },
    },
    {
      name: ['OneKey', 'Platform'],
      description: 'Travel around all blockchain with one wallet.',
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
