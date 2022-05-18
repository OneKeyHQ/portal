import { StaticImage } from 'gatsby-plugin-image';

export function useSecurityData() {
  return [
    {
      image: (
        <StaticImage
          src="./images/image1.jpg"
          alt="Your crypto, in your hands"
        />
      ),
      title: 'Your crypto, in your hands',
      description:
        'OneKey will not store your private keys or recovery seed, all our hardware and software are open source.',
    },
    {
      image: <StaticImage src="./images/image2.jpg" alt="Simple yet secure" />,
      title: 'Simple yet secure',
      description:
        'Use the OneKey App by itself or with the hardware, keeping it simple for beginners without compromising on security.',
    },
    {
      image: <StaticImage src="./images/image3.jpg" alt="Truly open source" />,
      title: 'Truly open source',
      description:
        "Open source means that we don't hide any code and are open to inspection by everyone, which takes courage and commitment.",
    },
    {
      image: (
        <StaticImage src="./images/image4.jpg" alt="End-to-end encryption" />
      ),
      title: 'End-to-end encryption',
      description:
        'OneKey uses industry-leading encryption technology to store your information locally. Only you can decrypt that information. ',
    },
  ];
}
