import { StaticImage } from 'gatsby-plugin-image';

export function useFeatureData() {
  return [
    {
      image: (
        <StaticImage
          src="./images/home-software-01.png"
          alt="Free and open source"
        />
      ),
      title: 'Free and open source',
      description:
        'Other crypto wallets may have backdoor or viruses. We are completely transparent.',
    },
    {
      image: (
        <StaticImage
          src="./images/home-software-02.png"
          alt="Trade at the best price"
        />
      ),
      title: 'Trade at the best price',
      description:
        "Hassle free, you won't need to jump between exchanges. Securely trade your crypto assets with us. ",
    },
    {
      image: (
        <StaticImage src="./images/home-software-03.png" alt="Peace of mind" />
      ),
      title: 'Peace of mind',
      description:
        'We use industry-leading technology to protect your crypto, making it super secure.',
    },
    {
      image: (
        <StaticImage
          src="./images/home-software-04.png"
          alt="All platforms covered"
        />
      ),
      title: 'All platforms covered',
      description:
        "iOS, macOS, Android, Windows, Linux, Chrome, Firefox, Edge, Brave... We got'em all",
    },
  ];
}
